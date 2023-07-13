## Webhooks

Webhooks are automated messages sent by an application or service when a specific event occurs. Webhooks typically contain a message — a payload of information relevant to the triggering event — and are sent over HTTP.

Webhooks can be used to notify your service of an event in near real-time, avoiding having to frequently poll the API for updates.

### Setup

Before creating a webhook, your service must have a publicly accessible URL with a valid SSL certificate. The service must be able to accept POST requests with a JSON payload.

If your service will receive webhooks for more than one team, consider creating a dedicated URL for each team, or use a query parameter when creating the webhook e.g. `https://example.com/webhook?team_id=12345`. Alternatively, store a record of the webhook UUID and ID of the team it was created for.

Your service must respond with a `2xx` response code to acknowledge receipt. A further two delivery attempts will be made if a non-`2xx` response code is received. The second attempt will be made 60 seconds after the first, the third attempt 120 seconds after the second. If the third attempt fails, no further attempts will be made, however webhooks can be manually resent in the Webhooks UI.

Repeated delivery failures do not automatically disable a webhook, however this is subject to change but you will be notified with further details.

### Webhook payloads

When an event with an active webhook occurs, Amiqus sends a POST request to the configured URL. The webhook contains a JSON payload containing details about the webhhook, the event trigger and any entities related to it.

Webhook payloads are deliberately concise, containing only minimal data without sensitive or personally identifiable information (PII). The combination of event alias and entity identifiers may be sufficient to trigger an action within your service, for example `client.archived`. However, some webhooks may require a subsequent API request to retrieve further data, for example `client.created`.

All payloads contain three properties:

- `webhook` Contains details about the registered webhook including its UUID and the list of events that trigger it.
- `trigger` The event that triggered this webhook.
- `data` Supplementary metadata that can be used to perform an action after having received the webhook.

#### Example payload

```json
{
  "webhook": {
    "uuid": "db6a2d91-b67e-4f88-b71a-b73da98c5168",
    "created_at": "2023-02-11T13:01:34Z",
    "events": ["*"]
  },
  "trigger": {
    "triggered_at": "2023-06-28T16:15:27Z",
    "alias": "client.created"
  },
  "data": {
    "client": {
      "id": 472346,
      "show": "https://id.amiqus.co/api/v2/clients/472346"
    }
  }
}
```

### Webook security
All webhooks sent by Amiqus are signed using a shared secret. Webhook signatures allow you to verify that the webhook originated from Amiqus, and not a third-party. We strongly advise you to verify all webhook signatures and reject any that fail. Consider returning a `404` response code for rejected webhooks to prevent enumeration attacks.


A webhook signature is a base64-encoded HMAC-SHA256 hash made up of the webhook payload body and shared secret as the key. The signature is included in the webhook requests headers as `X-AQID-Signature`. The shared secret is returned in `webhook` API response objects and is also available in the Webhooks UI.

Verifying a webhook signature is a simple process. Your system should create an HMAC signature using the webhook request body and shared secret, then compare it with the header value. If the values don't match, the webhook should be rejected. The following are examples of how you might perform validation.

#### PHP example
```php
<?php
function verifySignature(
    string $payloadBody,
    string $sharedSecret,
    string $webhookSignature
): void
{
    $decodedSignature = base64_decode($$webhookSignature);
    $expectedSignature = hash_hmac('sha256', $payloadBody, $sharedSecret, true);
    if (!hash_equals($decodedSignature, $expectedSignature)) {
        throw new InvalidArgumentException('Webhook signature is invalid');
    }
}

try {
    // Raw webhook payload body
    $payloadBody = ''; // e.g. file_get_contents('php://input');
    // Shared webhook secret
    $sharedSecret = '';
    // Value of signature from the request headers
    $webhookSignature = '';  // e.g. $_SERVER['X_AQID_SIGNATURE'];

    verifySignature($payloadBody, $sharedSecret, $webhookSignature);
} catch (InvalidArgumentException $e) {
    // Webhook signature is invalid
    echo 'Error:' . $e->getMessage();
}

```

### Python example
```python
import base64
import hashlib
import hmac

def verify_signature(payload_body, shared_secret, webhook_signature):
    decoded_signature = base64.b64decode(webhook_signature)
    expected_signature = hmac.new(shared_secret.encode(), payload_body.encode(), hashlib.sha256).digest()

    if not hmac.compare_digest(decoded_signature, expected_signature):
        raise Exception('Webhook signature is invalid')

try:
    # Raw webhook payload body
    payload_body = ''
    # Shared webhook secret
    shared_secret = ''
    # Value of signature header (X-AQID-Signature)
    webhook_signature = ''

    verify_signature(payload_body, shared_secret, webhook_signature)
except Exception as e:
    # Webhook signature is invalid
    print('Error:', str(e))
```

### Node.js example
```javascript
const crypto = require('crypto');

function verifySignature(payloadBody, sharedSecret, webhookSignature) {
  const decodedSignature = Buffer.from(webhookSignature, 'base64');
  const computedSignature = crypto
    .createHmac('sha256', sharedSecret)
    .update(payloadBody)
    .digest();

  if (!crypto.timingSafeEqual(decodedSignature, computedSignature)) {
    throw new Error('Webhook signature is invalid');
  }
}

try {
  // Raw webhook payload body
  const payloadBody = '';
  // Shared webhook secret
  const sharedSecret = '';
  // Value of signature from the request headers
  const webhookSignature = '';

  verifySignature(payloadBody, sharedSecret, webhookSignature);
} catch (error) {
  // Webhook signature is invalid
  console.error('Error:', error.message);
}
```

### Available webhooks

| <span style="display:block;width:180px">Type<span> | Description |
| --- | --- |
| `record.created` | Triggered when a record is created. |
| `record.updated` | Triggered when a record or any of its steps are updated, including check steps being submitted by the client or when a check step is processed. |
| `record.finished` | Triggered when a record status changes to a "terminal" state, e.g. it expired, was completed or fails without the possibility of retry. All steps have either; been completed and have finished processing; the client failed to complete them in time; or that there was a technical error preventing the record from ever being completed. |
| `record.bounced` | Triggered when a record created email message bounces. This is a useful prompt to check and resend the record via the Amiqus request page or to notify the client directly. |
| `record.reviewed` | Triggered when a team member manually marks a record as having been reviewed. This is a decisive event, assuming no further action will be taken on the record unless it is unreviewed. |
| `record.unreviewed` | Triggered when a member of the team manually marks a record no longer being reviewed. |
| `client.created` | Triggered when a client is created. |
| `client.deleted` | Triggered when a client is deleted. Note that the payload data will only include the client ID. |
| `client.organisations` | Triggered when a client's relationship to an organisation changes e.g. added to or removed from an organisation. |
| `client.record` | Triggered when a client receives a new request. |
| `client.status` | Triggered when a client's status changed. |
| `client.updated` | Triggered when a client's details were updated. |
| `client.archived` | Triggered when a client was archived by a team member. |
| `client.unarchived` | Triggered when a client was unarchived by a team member. |
| `form.attached` | Triggered when a form is added to a client directly, not as a record step. Typically used for internal data collection. |
| `form.deleted` | Triggered when a client form is deleted. Note that forms sent as a record step cannot be deleted, and deleting a form template does not delete a client form. |
| `form.modified` | Triggered when a client form is modified (title or description changed, fields added or removed, etc). Note that forms sent as a record step cannot be modified, and changes form templates have no affect. |
| `form.sent` | Triggered when a form is sent to a client as a record step. |
| `form.submitted` | Triggered when a form sent to a client as a record step was submitted by the client. |
| `form.updated` | Triggered when a form has its answers or flags updated. This is triggered by both direct client forms and record step forms. Record step forms trigger after submission by the client and direct client forms each time a field is updated. Flagged fields for both types of forms will also trigger this event. This event can trigger several times. |

### Webhook categories

Webhooks are categorised by the entity they represent. It is possible to subscribe to an entire category using a wildcard, e.g. `record.*`, `client.*`. Be aware that any new events added will be included in this group so your service must be able to account for them.

To subscribe to all categories, use the wildcard event `*`. As with category wildcards, any new categories will be included as they are added.

#### Records

The lifecycle of a record within Amiqus can be followed closely using webhooks. While the record's information will only be available via an authenticated API call, there are plenty of events that will allow you to infer its progression.

| Path | Description |
| --- | --- |
| `data.record.id` | The unique identifier for the record. |
| `data.record.show` | API endpoint to retrieve the record. |
| `data.record.download` | API endpoint to download the record as a PDF. |
| `data.client.id` | The unique identifier for the client which the record was sent to. |
| `data.client.show` | API endpoint to retrieve the client. |

#### Clients

Changes to clients (also referred to as "People", to differentiate them from "Organisations") can be tracked using webhooks, too. Similarly to record webhooks, full client information is only be available via an authenticated API call.

All client webhooks share the same payload with the exception of `client.deleted` which only contains `data.client.id`.

| Path | Description |
| --- | --- |
| `data.client.id` | The unique identifier for the client. |
| `data.client.show` | API endpoint to retrieve the client. |

#### Client forms

Client forms are associated with a client either having been attached directly or as a record step. Direct client forms can only be completed by team members, record step forms are typically completed by the client as part of a request but can be completed by a team member on their behalf.

Once a form template is attached to a client, there is no longer any association between them. Changes made to the form template do not affect client forms and vice versa.

| Path | Description |
| --- | --- |
| `data.form.reference` | The unique identifier (UUID) for the form. |
| `data.form.show` | API endpoint to retrieve the form. |
| `data.client.id` | The unique identifier for the client the form is associated to. |
| `data.client.show` | API endpoint to retrieve the client. |

Client forms sent as a record step include additional data about the record.

| Path | Description |
| --- | --- |
| `data.record.id` | The unique identifier for the record. |
| `data.record.show` | API endpoint to retrieve the record. |
| `data.record.download` | API endpoint to download the record as a PDF. |

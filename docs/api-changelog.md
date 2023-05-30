## API Changelog

### May 29 2023

- Added `secret` property to `Webhook` object
- Added `201 Created` success responses to _Update assignees for a record_ and _Update assignees for a client_ endpoints

### May 26 2023

⚠️ This release includes breaking changes.

- Changed Document Transfer record step preferences
    - Added required `attachment` property to "New Document" type

### May 22 2023

- Changed HSCNI Access NI record step preferences
    - Updated `barring_adults` and `barring_children` description with details of requirement
    - Changed `false` as default value for `barring_adults` and `barring_children` properties
- Changed Watchlist record step preferences
    - Changed `true` as default value for `silent` property
    - Updated `silent` description with details of availability

### May 18 2023

⚠️ This release includes breaking changes.

- Changed Dummy record step preferences
    - `preferences` is no longer a required property
    - Changed `payment_amount` from `float` to `integer`
    - Updated `payment_amount` description with details of value format
    - Changed minimum and maximum value of `payment_amount` to `0` – `10000`
    - Changed minimum and maximum value of `credit_cost` to `0` – `100`

### May 17 2023

⚠️ This release includes breaking changes.

- Changed Banking Information record step preferences
    - Renamed step type `check.open_banking` to `check.banking_information`
    - `preferences` is no longer a required property
    - Added `false` as default value for `balance` and `transactions` properties
- Changed Criminal Record step preferences
    - `free_volunteer` property for DBS: Standard and DBS: Enhanced types is now **read only**
- Changed Document Transfer step preferences
    - Renamed property `confirmed` to `require_confirmation`
    - Renamed property `returned` to `require_return`
- Changed Photo ID step preferences
    - `face` and `liveness` properties for `standard` report type are now **read only**
    - Added `issuing_countries` property for `standard` and `biometric` report types
    - Updated `facial_similarity` description for `standard` report type with details of cost changes
- Changed Photo ID step preferences
    - Added `1` and `3` options to `monitor` property
    - Added `false` as default value for `silent` and `monitor` properties
    - Updated `silent` and `monitor` descriptions with details of availability and cost changes
- Changed `RecordDocument` object
    - Renamed config choice headings
        - "Sent" to "Document Transfer"
        - "Requested" to "Document Request"
    - Renamed property `description` to `instructions`
    - Renamed property `instructions` to `return_message`
    - Added `return_message` description
- Removed `link` and `in_person` notification types from _Create a record_ endpoint
- Added `false` notification type to _Create a record_ endpoint

### May 12 2023

⚠️ This release includes breaking changes.

- Changed success response codes from `200 OK` to `201 Created` for endpoints:
  - _Create a client_
  - _Set assignees for a client_
  - _Create an organisation_
  - _Create a record_
  - _Set assignees for a record_
  - _Create a webhook_

### May 11 2023

- Changed maximum length of `message` property to `5000` for _Create a record_ endpoint

### May 10 2023

- Removed `enabled` query parameter`_List all forms for a client_` endpoint

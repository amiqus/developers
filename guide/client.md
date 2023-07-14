
In order to communicate with the Amiqus API you will need an Amiqus account to create API credentials. If you don't yet have one, [contact us](mailto:sales@amiqus.co) to set up a sandbox Amiqus account.

## Integrations
The Amiqus API can be used to create and manage your Requests and much more. The following are common types of integration:

1. **Internal Integration**: Linking Amiqus with internal systems and applications that your team uses in their daily workflow. Your integration will allow the transfer of data between systems and help reduce the need for repeat manual entry.

2. **External Integration**: Organisations who operate a platform can build an integration to allow their customers to sync their Amiqus data with their platform.

3. **No Code Integrations** If you are not a developer, you can still use Amiqus with some of our existing partner integrations such as <a href="https://www.clio.com/uk" target="_blank">Clio</a> and <a href="https://www.denovobi.com" target="_blank">Denovo</a> with no coding required. Amiqus seamlessly integrates workflows, digital risk assessments, internal decision making audits and client data with these case management systems.
> 🚧 Completing Requests
>
> Amiqus API cannot be used to complete any requests. These must be carried out by the client who has been asked to complete the request by interacting with Amiqus' UI in the normal way.
## Authorisation

Most Amiqus API endpoints require authorisation. There are two types of access token available:
- **Personal access tokens**
- **OAuth 2.0 flow tokens**

Find out more about implementing the right type of integration and authorisation option for your app below.

You should think of access tokens as an alternative to a username and password. Both Personal Access Tokens and OAuth 2.0 access tokens have the following attributes:

- they are linked to the user who granted the token and are subject to the same permissions as that user;
- all activities are attributed to the token's user;
- their scope of access is limited to the individual team active at the time of token creation.

As for which option is the best choice, this depends on your needs. Each has its own benefits and drawbacks.

## OAuth 2.0
### *Great for integrations that require access to multiple user accounts or teams | Seamless user experience*
OAuth 2.0 is a protocol that allows users to grant third-party applications access to their data and perform actions on their behalf. It is the recommended workflow for any integration that requires access to more than one user account or team. If you are new to REST APIs, the flow can seem complicated. However, once it is in place, generating an access token is straightforward.

See [OAuth 2.0 flow](#tag/OAuth-2.0-flow) for more info.


## Personal Access Tokens

### *Great for quick starts and internal applications | Managed by user*

Personal Access Tokens are simple to set up and are useful for getting up and running quickly while in development.

Personal Access Tokens are typically used with Internal Integrations that only require access to or perform actions on behalf of a single user account.

> ⚠️ Token Lifetime
>
> Personal Access Tokens can be manually revoked by the user who generated them, otherwise they **automatically expire after 1 year**.

> ⚠️ Multiple users and Personal Access Tokens
>
> If you need to access data from more than one account OAuth 2.0 is the recommended workflow. You should avoid asking your users to paste any Amiqus Personal Access Token into your app.

### Creating a Personal Access Token

Personal Access Tokens can be created in the Amiqus Developer Settings dashboard.

1. Access the Developer Settings via the dropdown menu under your user name;
2. Click Personal access tokens and +Create token;
3. Give your token a descriptive name and select Create token;
4. Copy the token and store it in a safe place as this will be the **only** time it will be displayed.


<!-- [@todo: Include example screenshot/video of what this looks like to the user] -->

### Using your Personal Access Token

Include access tokens in the Authorisation header of API requests in a Bearer format as shown below. You should not include tokens in the body of a request.

```bash
curl https://id.amiqus.co/api/v2/me \
     --header 'Authorization: Bearer {Access Token}'
```

### Revoking a Personal Access Token

Personal Access Tokens can be revoked at any time by accessing the Developer Settings dashboard.

1. Access the Developer Settings via the dropdown menu under your user name;
2. Click Personal access tokens and select the Saved tab;
3. Click Delete beside the relevant token you wish to revoke;
4. Confirm that you are happy by clicking Delete token;
5. A green banner will appear confirming the token has been deleted;

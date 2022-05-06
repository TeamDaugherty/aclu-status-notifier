# ACLU E-Stat

The ACLU E-Stat application allows for the sending of notifications
to complaintants in regards to status changes in their complaint.

The front-end application is developed using React, and his hosted in AWS Amplify.

The back-end application is a GraphQL API, and is created by Amplify and hosted in AWS AppSync.

The DB is a DynamoDB table.

## Local Development

To start the application locally, run:

> `npm run start`

## Amplify CLI

### To view the Amplify Studio console:

> `amplify console`

### To view the Amplify Studio GraphQL api console:

> `amplify console api`

> choose `GraphQL`

### To push new Amplify changes:

> `amplify push`

### To generate a new API key:

> `amplify update api`

> Generate a new GraphQL API key, with expiration of 364 days.

> `amplify push`

## Tech stack

This application was largely built through AWS Amplify and much of the backend is serverless.

We used React for the frontend, a GraphQL api for the datastore interaction, NoSQL DynamoDB as the datastore, Cognito for login/authentication, and a Lambda based email notification service.

## Email Notification

#### API Call

Our notification system used a REST call to API Gateway. That Gateway triggered a Lambda function which leveraged Amazon SES (Simple Email Service) to send out an email template with values from the API call substituted in. The API call in the code can be found in the AddComplaintSummary Component.

```
async function sendEmail() {
    const apiName = 'acluNotificationAPI';
    const path = '/sendEmail';
    console.log("sending email")
    const myInit = {
      body: {"complaintId": values.complaintID,
            "email": values.emailAddress,
            "complaintStatus": values.complaintStatus},
  };
  return await API.post(apiName, path, myInit);
}
```

This call leverages our Cognito authentication to reach API Gateway. API Gateway will need CORS disabled for testing purposes.

#### Lambda
The Lambda code can be found in the sendEmailLambda index.js file. This lambda will need an IAM role attached with SES permissions. The "to" and "source" email fields are left blank but these can be sourced from the API call, a DB, Lambda environment variables, or hardcoded.

#### SES
Setting up SES for testing starts with creating and verifying a sender identity - a domain or email address you use to send email through Amazon SES. Your account will begin in the SES sandbox which imposes some limits on your activity - most notably only allowing messages to already verified email addresses. Moving out of the sandbox requires a production request, details found here : https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html

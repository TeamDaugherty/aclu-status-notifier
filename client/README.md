# ACLU E-Stat

The ACLU E-Stat application allows for the sending of notifications
to complaintants in regards to status changes in their complaint.

The front-end application is developed using React, and his hosted in AWS Amplify.

The back-end application is a GraphQL API, and is created by Amplify and hosted in AWS AppSync.

The DB is a DynamoDB table.

## Local Development

To start the application locally, run:

`npm run start`

## API Key

An Api key is used to authenticate the UI with the API. This key expires every 365 days, and would
need to be regenerated once expired. To do so, generate a new key in the settings for AWS AppSync and update the stored value in AWS Param Store.

## Amplify CLI

### To view the Amplify Studio console:

`amplify console`

### To view the Amplify Studio GraphQL api console:

`amplify console api`

choose `GraphQL`

### To push new Amplify changes:

`amplify push`

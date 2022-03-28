# ACLU E-Stat

The redesigned ACLU E-Stat application allows for the sending of notifications
to complaintants in regards to status changes in their complaint.

The front-end application is developed using React, and his hosted in AWS Amplify.

The back-end application is a GraphQL API, and is created by Amplify and hosted in AWS AppSync.

The DB is a DynamoDB table.

## Local Development

To start the application locally, run:

`npm run start`

## Amplify CLI

### To view the Amplify Studio console:

`amplify console`

### To view the Amplify Studio GraphQL api console:

`amplify console api`

choose `GraphQL`

### To push new Amplify changes:

`amplify push`

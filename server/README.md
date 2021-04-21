# aclu-status-notifier-server

### API for the ACLU Status Notifier

## Startup Instructions

1. npm i
2. npm start
3. navigate to graphQL Playground URL: http://localhost:3000/graphql

## Local DB Instructions

1. Follow the wiki instructions to install: https://github.com/TeamDaugherty/aclu-status-notifier/wiki/Local-DynamoDB---On-Windows-with-PowerShell
2. Create local table: `npm run db:create`
3. Add mock data: `npm run db:load`
4. Read mock data: `npm run db:read`

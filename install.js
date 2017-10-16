/*

brew install awscli
https://github.com/aws/aws-cli

Bucket: react-notes-app-uploads

Cognito User Pool Id us-east-1_cayMvxHZ7
Pool ARN arn:aws:cognito-idp:us-east-1:015874181742:userpool/us-east-1_cayMvxHZ7

App client:
notes-app

App client id: 1nsrjatuh22cdcttskcov7dd0r

npm install eslint aws-sdk serverless-offline --save-dev
npm install --save-dev \
    babel-core \
    babel-loader \
    babel-plugin-transform-runtime \
    babel-preset-es2015 \
    babel-preset-stage-3 \
    serverless-webpack \
    webpack \
    webpack-node-externals

npm install --save babel-runtime

$ export SLS_DEBUG=true

Note id: 62135cf0-b20b-11e7-88d2-a91061e9e3bc

serverless invoke local --function create --path mocks/create-event.json
serverless invoke local --function get --path mocks/get-event.json
serverless invoke local --function list --path mocks/list-event.json
serverless invoke local --function update --path mocks/update-event.json
serverless deploy -v
serverless deploy function -f list

endpoints:
  POST - https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod/notes
  GET - https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
  GET - https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod/notes
  PUT - https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
  DELETE - https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod/notes/{id}
functions:
  create: notes-app-api-prod-create
  get: notes-app-api-prod-get
  list: notes-app-api-prod-list
  update: notes-app-api-prod-update
  delete: notes-app-api-prod-delete

Identity pool id: us-east-1:a256be78-fc35-46fb-9595-d147594af36b

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:a256be78-fc35-46fb-9595-d147594af36b',
})


apig-test \
--username='cb@webhouse.dk' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_cayMvxHZ7' \
--app-client-id='1nsrjatuh22cdcttskcov7dd0r' \
--cognito-region='YOUR_COGNITO_REGION' \
--identity-pool-id='us-east-1:a256be78-fc35-46fb-9595-d147594af36b' \
--invoke-url='https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod' \
--api-gateway-region='us-east-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'

https://realfavicongenerator.net/

*/


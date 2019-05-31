global.fetch = require("node-fetch");
var Amplify = require('aws-amplify')
var Auth = Amplify.Auth
const username = process.env.COGNITO_USER;
const password = process.env.COGNITO_PASS;

// TODO - complete the following for your Cognito Pool
var UserPoolId = 'TODO';
var ClientId = 'TODO';
var AWSRegion = 'ap-southeast-2';

Amplify.default.configure({
    Auth: {
        region: AWSRegion,
        userPoolId: UserPoolId,
        userPoolWebClientId: ClientId,
        mandatorySignIn: false,
    }
});

Auth.signIn({
    username,
    password,
}).then(
    user => Auth.currentSession()).then(session => {
        console.log(session.getIdToken().getJwtToken())
    })
    .catch(err => console.log(err));
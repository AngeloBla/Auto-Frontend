import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-central-1_3u2xEwKHl",
    ClientId: "4ldlm8c3ddt43hu711a05hqroa"
}

const UserPool = new CognitoUserPool(poolData);

export default UserPool;

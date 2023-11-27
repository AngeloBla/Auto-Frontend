import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-central-1_Egx5xezvi",
    ClientId: "3bokkt3i0b6k2iu8scf15s50qs"
}

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
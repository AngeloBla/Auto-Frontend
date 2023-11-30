import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import Userpool from "./Accounts/Userpool";

const VerifyEmail = () => {
    const [verificationCode, setVerificationCode] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const userData = {
      Username: email,
      Pool: Userpool,
    };

    console.log(userData);
  
    const onSubmit = (event) => {
        event.preventDefault();
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
                navigate('/login');
            }
        });
    }
    
    return (
        <main className="form-signin w-100 m-auto text-center">
            <form onSubmit={onSubmit}>
                <div className="form-floating mx-auto" style={{ width: '30%' }}>
                    <div className="mb-4">
                        <img
                            src="https://lego-defender-model-s3bucket.s3.eu-central-1.amazonaws.com/firmenlogo/Logov2.png"
                            alt=""
                            width="150"
                            height="120"
                            className="mx-auto"
                        />
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        id="verificationCode"
                        placeholder="Verification Code"
                        onChange={(event) => setVerificationCode(event.target.value)}
                    />
                    <div style={{ width: '20%', margin: 'auto' }}>
                        <button className="btn btn-primary w-100 py-2" type="submit">Verify Email</button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default VerifyEmail;

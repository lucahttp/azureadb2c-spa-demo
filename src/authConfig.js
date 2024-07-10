/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */


export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://mischangas.b2clogin.com/mischangas.onmicrosoft.com/B2C_1_susi",
        },
        editProfile: {
            authority: "https://mischangas.b2clogin.com/mischangas.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "mischangas.b2clogin.com"
};



export const msalConfig = {
    auth: {
        clientId: "cb47ba50-a1c5-4509-adb7-ba82db356a17",
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: '/'
        //authority: "https://login.microsoftonline.com/mischangas.onmicrosoft.com",
        //redirectUri: "https://9000-idx-azureadb2c-spa-demo-1720637726231.cluster-4ezwrnmkojawstf2k7vqy36oe6.cloudworkstations.dev",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ["User.Read"]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

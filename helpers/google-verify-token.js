const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '906413982880-ijmc0cl3k6qhgoh8i2d0a4vtic0fkui9.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async( token ) => {
    
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '906413982880-uljf5dbv821125j3vpjib2q7b07f1bso.apps.googleusercontent.com'
            ],  
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return null;
    }
}



module.exports = { 
    validarGoogleIdToken
}
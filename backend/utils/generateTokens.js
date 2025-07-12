import jwt from 'jsonwebtoken'; 

const generateTokenAndSetCookie = (userId, res) =>{

    // jwt.sign(payload, secret, options)
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
        // This means that the token will expire in 15 days. After that, the user will need to log in again.
    })
// here the token is set in the cookie!
    res.cookie('jwt', token, {
        maxAge:15 * 24 * 60 * 60 * 1000,  //How long does a cookie lasts before it expires!
        httpOnly:true, // Makes the cookie inaccessible to JavaScript in the browser. This helps prevent XSS (cross-site scripting) attacks.
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie






/* why we use Jsonwebtokens
When a user logs into a website, the server needs a way to remember who they are on future requests. One common way to do this is:
Generate a JWT (JSON Web Token) that contains some info about the user.
Send that token back to the browser.
Store it in a cookie so it’s sent automatically with future requests.
That's what this function does.

````bash
const generateTokenAndSetCookie = (userId, res) => {
    ````

Takes in userId – the unique ID of the user.
Takes in res – the response object from an HTTP request (usually in Express.js).

🔹 What is a JWT?
A JSON Web Token (JWT) is like a digital ID card for a user. It has three parts:
Header – says it's a JWT and which algorithm was used to sign it.
Payload – the data (like userId) we want to store.
Signature – a unique signature made using a secret key, so no one can fake the token.

🔹 Code Breakdown:
jwt.sign() – This function creates (signs) a JWT.
{ userId } – This is the payload of the token. We're storing the user's ID inside.
process.env.JWT_SECRET – This is the secret key used to sign the token. It’s stored safely in environment variables and should never be shared.
expiresIn: '15d' – This sets the token to expire in 15 days. After that, the user would need to log in again.
🔐 The result is a secure, tamper-proof token that proves the user's identity.


What is Cross-Site scripting?
JavaScript running on the page can normally access it using document.cookie.
But sometimes, you don’t want JavaScript to see or touch the cookie — especially if the cookie contains sensitive data like a login token (e.g., your JWT).
That's where the httpOnly: true setting comes in.*/
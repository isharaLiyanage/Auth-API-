Node API with Authentication, JWT Tokens, and Google OAuth
This is a Node.js API that allows users to register and log in using their email and password. Passwords are encrypted using the crypto-js library. Users can also log in using their Google account with Google OAuth 2.0. The authentication is handled using passport-google-oauth20 and passport.js. JWT tokens are used for session management and authentication.

Getting Started
To get started with this API, follow these steps:

Clone the repository using the following command:

bash
Copy code
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Install the required packages by running the following command in the root directory of the project:

Copy code
npm install
Set up your environment variables by creating a .env file in the root directory of the project with the following variables:

makefile
Copy code
PORT=3000
JWT_SECRET=YOUR_SECRET_KEY
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
Replace YOUR_SECRET_KEY with a secure string of your choice for signing JWT tokens and YOUR_GOOGLE_CLIENT_ID and YOUR_GOOGLE_CLIENT_SECRET with your own Google OAuth credentials, which you can obtain by creating a project in the Google Cloud Console.

Start the server by running the following command in the root directory of the project:

sql
Copy code
npm start
This will start the server on port 3000 (or the port specified in the PORT environment variable).

API Endpoints
Register
Registers a new user with the API.

bash
Copy code
POST /api/register
Request Body
Name	Type	Required	Description
name	string	Yes	The user's name.
email	string	Yes	The user's email.
password	string	Yes	The user's password.
Response
If the user was successfully registered, the API will respond with a status code of 201 (Created) and a JSON object containing the user's ID, name, and email.

css
Copy code
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "12345",
  "name": "John Doe",
  "email": "john@example.com"
}
If the email is already in use, the API will respond with a status code of 409 (Conflict) and a JSON object containing an error message.

css
Copy code
HTTP/1.1 409 Conflict
Content-Type: application/json

{
  "message": "Email already in use"
}
Login
Logs in an existing user with the API.

bash
Copy code
POST /api/login
Request Body
Name	Type	Required	Description
email	string	Yes	The user's email.
password	string	Yes	The user's password.
Response
If the user was successfully logged in, the API will respond with a status code of 200 (OK) and a JSON object containing a JWT token.

css
Copy code
HTTP/1.1 200 OK
Content-Type: application/json

{
  "token

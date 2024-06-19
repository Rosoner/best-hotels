# best-hotels

Best Hotels - React project IMS

Intro-
You can create your own publication on your favourite hotel in this blog! Also is possible to edit or delete your post in case that you are logged in. 
Is allowed for all users to write comments about their own or another posts. 
All guests can only read publications and comments. Also guest can see detailed information about each hotel and use link to visit official web site.


Usage-
Development server Run "node server.js" for a dev server. Navigate to (http://localhost:3030/). Admin panel is located at http://localhost:3030/admin

This is REST service, created for educational purposes. A compiled bundle should be available with every exercise's resources. To execute it, run the included start.bat file, or manually open a command prompt and run node server.js.

Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted.

Supported requests are GET, POST, PUT, PATCH, DELETE

Authentication test user: peter@abv.bg / password: 123456

Register Create a new user by sending a POST request to /users/register with properties email and password. You can add any other property that you need, like username, avatar, etc. 
The service automatically creates a session and returns an authorization token, that can be used for requests.

Login Login by sending a POST request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.

Logout Send an authorized GET request to /users/logout.

Get User Details Send an authorized GET request. The service will return the record of the user, associated with the passed-in session token.

Start the client, "npm i" and after that with command "npm run dev".

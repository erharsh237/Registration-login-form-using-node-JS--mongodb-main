Hi, My name is Harshpal Singh. I have created this login and signup page using Node js, express js, HTML and CSS.
Let me walk you through this web app
1.	This is the first page of the web app. It is the login page where user can login with his/her email id.
 
The login page is fully responsive and can be opened on any display size.
The login page consists of a textbox for email and other one for password.
2.	This it the registration/Signup page where user can register itself.
 
Just like login page, the signup page is also fully responsive and can adapt any screen size. The signup page has 3 fields’ names as email, password and confirm password. The web page comes with email and password validation which is shown in the images below.

 
This image shows the email validation of the signup page

 
This image shows the password validation of the web page.
 
When a user successfully login to it’s account, the user lands on this web page.

Technical:
The web page is created using Node and Express. The dependencies of the web page are as follows: 
"dependencies": {
    "bcrypt": "^5.1.0",
    "ejs": "^3.1.9",
    "express": "^4.21.2",
    "express.js": "^1.0.0",
    "mongoose": "^7.4.1"

•	The bcrypt module encrypts the password and the passed the encrypted password to the database.
•	EJS stands for "Embedded JavaScript" and is a templating engine that allows developers to generate dynamic HTML content by embedding JavaScript code directly within their HTML templates.
•	Express is a javaScript framework built over Node Js which is used to create Server-Side aplications by handling routing.
•	Moogose it another library which is used to establish a connection with mongodb atlas and vs code.

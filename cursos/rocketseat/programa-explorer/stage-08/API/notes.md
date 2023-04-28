# API - step by step
  1. [ ] Start the project with NodeJS;
  2. [ ] Adding the Express;
  3. [ ] {
          Import the Express;
          Run the Express;
          Set a port to listen;
          Execute on the port 3333;
        };
  4. [ ] Adding an automated Express execution on package.json script;
  5. [ ] Pergunta;


# Observations
  1. NodeJS is an environment that provides us resources that allow write and run JavaScript applications. It serves to make whatever you want, from websites to automation scripts including API creation.
    * Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).
    The Node.js distributed development project was previously governed by the Node.js Foundation, and has now merged with the JS Foundation to form the OpenJS Foundation. OpenJS Foundation is facilitated by the Linux Foundation's Collaborative Projects program.
  
  2. Express is a framework used to handle HTTP requests and responses.
    * Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the "de facto standard" server framework for NodeJS.
  
  3. We can use a script to run more easily the server application using the command line `npm ${scriptName}` for example "npm start", "npm test", etc.

  4. 


# Notes
  1. **--> npm init -y <--**;

  2. **--> npm install express --save <--**;

  3. ```JavaScript
      const express = require("express"); //Imported the Express framework

      const app = express(); //Started the Express

      const PORT = 3333; //Set a port for the API be watching/listening

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //It's listening the port and when starting the application it executes the function
      ```;
      
  4. ```JavaScript
      "scripts": {
        "start": "node ./src/server.js"
      }
      ```;

  5. Pergunta;
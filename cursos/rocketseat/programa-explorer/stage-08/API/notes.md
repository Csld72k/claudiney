# API - step by step
  1. [ ] Start the project with NodeJS;
  2. [ ] Adding the Express;
  3. [ ];
  4. [ ] {
          Import the Express,
          Run the Express,
          Set a port to listen,
          Execute on the port 3333
        };
  5. [ ] Adding an automated Express execution on package.json script;
  6. [ ];
  7. [ ] Adding a GET method;
  8. [ ] Change the GET method to use Route Params (id and user);
  9. [ ];


# Observations
  1. NodeJS is an environment that provides us resources that allow write and run JavaScript applications. It serves to make whatever you want, from websites to automation scripts including API creation.
    * Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).
    The Node.js distributed development project was previously governed by the Node.js Foundation, and has now merged with the JS Foundation to form the OpenJS Foundation. OpenJS Foundation is facilitated by the Linux Foundation's Collaborative Projects program.
  
  2. Express is a framework used to handle HTTP requests and responses.
    * Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the "de facto standard" server framework for NodeJS.
  
  3. Packages are dropped into the node_modules folder under the prefix. When installing locally, this means that you can require("packagename") to load its main module, or require("packagename/lib/path/to/sub/module") to load other modules.
  Global installs on Unix systems go to {prefix}/lib/node_modules. Global installs on Windows go to {prefix}/node_modules (that is, no lib folder.)
  Scoped packages are installed the same way, except they are grouped together in a sub-folder of the relevant node_modules folder with the name of that scope prefix by the @ symbol, e.g. npm install @myorg/package would place the package in {prefix}/node_modules/@myorg/package. See scope for more details.
  If you wish to require() a package, then install it locally.

  4. =/=

  5. We can use a script to run more easily the server application using the command line **`npm ${scriptName}`** for example **npm start**, **npm test**, etc.

  6. What's a route? A route links a point "A" to the point "B", is a path.

        ||point A||  ==> route=path ==> ||point B||.
        ||my website|| ==> route=path ==> ||server||.

      There are pattern for the API to know how it has to behave and what to do, they are called "request methods", usually called "HTTP verbs" and are they:

        | GET    | => | reading | ==> Used to retrieve data from server. For example, when you type a URL into your browser and hit enter, your browser sends a GET request to the server to retrieve the webpage.

        | POST   | => | creation  | ==> Used to submit data to a server. For example, when you submit a form on a webpage, the data is sent to the server using a POST request.

        | PUT    | => | update  | ==> Used to update data on a server. For example, when you update your profile information, on a website, the data is sent to the server using a PUT request.

        | DELETE | => | deletion  | ==> Used to delete a data from a server. For example, when you delete a post or a comment on a website, the request is sent to the server using a DELETE request.

        | PATCH  | => | partial update  | ==> Used to partially update data on a server. For example,when you edit a specific field on a record, the data is sent to the server using a PATCH request.
  
  7. The GET Method:
     GET is used to request data from a specified resource.

     Note that the query string (name/value pairs) is sent in the URL of a GET request:

     /test/demo_form.php?name1=value1&name2=value2

     Some notes on GET requests:
     GET requests can be cached
     GET requests remain in the browser history
     GET requests can be bookmarked
     GET requests should never be used when dealing with sensitive data
     GET requests have length restrictions
     GET requests are only used to request data (not modify)

  8. Route Params.
     Receives the request data on the route.
     Use case: Best way to fetch something specific, delete or update using unique identifier, for example:

     GET: https://api.github.com/users/tgmarinho
     PUT: https://api.github.com/users/tgmarinho
     DELETE: https://api.github.com/users/380327

     In this example above, it's updating and deleting the GitHub user with login:tgmarinho or id:380327.

     ```JavaScript
      //Route Params = /users/1

      // Make the request in the browser: http://localhost:3333/users/1
      server.get("/users/:id", (request, response) => {
      const { id } = req.params; // desestruturado com ES06	
      return res.json({ message: `Fetching the User ID: ${id}`});
      });
      ```.

  9. 




# Notes
  1. **--> npm init -y <--**;

  2. **--> npm install express --save <--**;

  3. =/=;

  4. ```JavaScript
      const express = require("express"); //Imported the Express framework

      const app = express(); //Started the Express

      const PORT = 3333; //Set a port for the API be watching/listening

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //It's listening the port and when starting the application it executes the function
      ```;
      
  5. ```JavaScript
      "scripts": {
        "start": "node ./src/server.js"
      }
      ```;

  6. =/=;

  7. ```JavaScript
      app.get("/message", (request, response) => {
      response.send("Hello World!")
      }); //Adding a GET method for testing
      ```;

  8. ```JavaScript
      app.get("/message/:id/:user", (request, response) => {
        const { id, user } = request.params;
        response.send(`ID da mensagem: ${id} para o usuário ${user}`)
      }); //Adding a GET method for testing
      ```;

  9. ;
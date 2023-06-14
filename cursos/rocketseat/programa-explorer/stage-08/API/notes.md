# 👣 Step by step - API (stage-08/Rocketseat)
  01. [ ] Start the project with NodeJS;
  02. [ ] Add the Express;
  03. [ ] Learning about node_modules;
  04. [ ] {
          Import the Express,
          Run the Express,
          Set a port to listen,
          Execute on the port 3333
        };
  05. [ ] Add an automated Express execution on package.json script;
  06. [ ] Learning about routes and HTTP methods;
  07. [ ] Add a GET method;
  08. [ ] Change the GET method to use Route Params (id and user);
  09. [ ] Add another GET method to use Query Params (page and limit);
  10. [ ] Install Nodemon;
  11. [ ] Learning about the program Insomnia;
  12. [ ] Delete GET method lines and add a POST method;
  13. [ ] Make the API knows that we're using JSON in the 'body' and use JSON on the 'response';
  14. [ ] Organize the project structure;
  15. [ ] Learning about controllers;
  16. [ ] Separates the responsibilities of routes and controllers;
  17. [ ] Learning about status code;
  18. [ ] Learning about middleware;
  19. [ ] Putting middleware into practice;
  20. [ ];


# 🕵️ Observations
  01. NodeJS is an environment that provides us resources that allow write and run JavaScript applications. It serves to make whatever you want, from websites to automation scripts including API creation.
    * Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).
    The Node.js distributed development project was previously governed by the Node.js Foundation, and has now merged with the JS Foundation to form the OpenJS Foundation. OpenJS Foundation is facilitated by the Linux Foundation's Collaborative Projects program.
  
  02. Express is a framework used to handle HTTP requests and responses.<br/>
    * Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the "de facto standard" server framework for NodeJS.
  
  03. Packages are dropped into the node_modules folder under the prefix. When installing locally, this means that you can require("packagename") to load its main module, or require("packagename/lib/path/to/sub/module") to load other modules.
  Global installs on Unix systems go to {prefix}/lib/node_modules. Global installs on Windows go to {prefix}/node_modules (that is, no lib folder.)
  Scoped packages are installed the same way, except they are grouped together in a sub-folder of the relevant node_modules folder with the name of that scope prefix by the @ symbol, e.g. npm install @myorg/package would place the package in {prefix}/node_modules/@myorg/package. See scope for more details.
  If you wish to require() a package, then install it locally.

  04. =/=

  05. We can use a script to run more easily the server application using the command line **`npm ${scriptName}`** for example **npm start**, **npm test**, etc.

  06. What's a route? A route links a point "A" to the point "B", is a path.

        ||point A||  ==> route=path ==> ||point B||.
        ||my website|| ==> route=path ==> ||server||.

      There are pattern for the API to know how it has to behave and what to do, they are called "request methods", usually called "HTTP verbs" and are they:

        | GET    | => | reading | ==> Used to retrieve data from server. For example, when you type a URL into your browser and hit enter, your browser sends a GET request to the server to retrieve the webpage.

        | POST   | => | creation  | ==> Used to submit data to a server. For example, when you submit a form on a webpage, the data is sent to the server using a POST request.

        | PUT    | => | update  | ==> Used to update data on a server. For example, when you update your profile information, on a website, the data is sent to the server using a PUT request.

        | DELETE | => | deletion  | ==> Used to delete a data from a server. For example, when you delete a post or a comment on a website, the request is sent to the server using a DELETE request.

        | PATCH  | => | partial update  | ==> Used to partially update data on a server. For example,when you edit a specific field on a record, the data is sent to the server using a PATCH request.
  
  07. The GET Method:
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

  08. Route Params.
      Receives the request data on the route.
      Use case: Best way to fetch something specific, delete or update using unique identifier, for example:

      GET: https://api.github.com/users/tgmarinho<br/>
      PUT: https://api.github.com/users/tgmarinho<br/>
      DELETE: https://api.github.com/users/380327<br/>

      In this example above, it's updating and deleting the GitHub user with login:tgmarinho or id:380327.

      In Route Params, all parameters are required. If you try to access the route missing anyone parameter, the route can't be fetched generating an error.

      For example:

      ```JavaScript
        //Route Params = /users/1/7/Claudiney

        // Make the request in the browser: http://localhost:3333/users/1/7/Claudiney
        server.get("/users/:id/:ranking/:name", (request, response) => {
        const { id, ranking, name } = request.params;
        return res.json({ message: `Fetching the User ID: User ${name} ranking ${ranking} id ${id}`});
        });
        ```
        I obligatory need to pass the parameter "id/ranking/name" otherwise won't work. In case of missing any parameter the server will return us an error "cannot GET /"


  09. Query params.
      It Receives the request data as a parameter in the URL.

      Use case: Filters to make queries in the application.

      Can contain one or more parameters.

      Examples:

        http://myapi.com/banks?name=nubank

        In the example above, I access the resource (or route) banks, filtering by name. To insert parameters I put "?" after the route and add the property and value: name=nubank.

        http://myapi.com/movies?name=transformers&actors=megan,peter

        In the example above I access the movies API by searching for name and actors. Whenever passing more than one parameter we can put "&" to separate the parameters.

      Unlike Route Parameters, in Query Parameters I can fetch the route even if some or all of the parameters are missing.

      For example:

      ```JavaScript
        // Make the request in the browser: http://localhost:3333/users?id=1&ranking=7&name=Claudiney
        server.get("/users/", (request, response) => {
        const { id, ranking, name } = request.query;
        response.send(`User: ${user} Id: ${id} Ranking: ${ranking}`);
        });
        ```

        In the browser it will return: "User: Claudiney Id: 1 Ranking: 7".
        If I request only "http://localhost:3333/users?ranking=7&name=Claudiney" missing the Id, it will return: "User: Claudiney Id:undefined Ranking: 7".
        If I request only "http://localhost:3333/users?name=Claudiney" missing the Id and Ranking, it will return: "User: Claudiney Id:undefined Ranking: undefined".
        And so on.....

        `          |URL|             |Query String Begin|    |Property Value|  |Parameter Name|`<br/>
        `            ↓                         ↓                      ↓                ↓`<br/>
        `https://serveraddress.com.br  /users  ?        page     =    2       &      limit     =     10`<br/>
        `                                 ↑              ↑                    ↑                       ↑`<br/>
        `                            |Resource|  |Parameter Name|  |Query String Separator|  |Property Value|`

      ![Query Params](https://user-images.githubusercontent.com/84917784/235512136-b564fcd3-9df4-4afc-856b-808c2672d62c.png)

      ![Query Params - Rocketseat](https://user-images.githubusercontent.com/84917784/235512228-9045960c-e552-4733-838e-7e12f50a1361.png)


  10. Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 
      Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

  11. By default, the browser only accepts GET requests, to use the others HTTP methods we need a specific program to this and we'll use the Insomnia.
      Insomnia is an open source desktop application that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced functionality like authentication helpers, code generation, and environment variables.

  12. The POST Method:
      POST is used to send data to a server to create/update a resource.

      The data sent to the server with POST is stored in the request body of the HTTP request:

      POST /test/demo_form.php HTTP/1.1
      Host: w3schools.com

      name1=value1&name2=value2
      Some notes on POST requests:

      POST requests are never cached
      POST requests do not remain in the browser history
      POST requests cannot be bookmarked
      POST requests have no restrictions on data length

  13. Request.body:
      When you need to send data from a client (let's say, a browser) to your API, you send it as a request body.
      A request body is data sent by the client to your API. A response body is the data your API sends to the client.
      Your API almost always has to send a response body. But clients don't necessarily need to send request bodies all the time.

  14. Initial Project Structure

      ![Estrutura Inicial do Projeto](https://github.com/Csld72k/claudiney/assets/84917784/20aae935-d0ea-47e7-a28f-926f9cb8dee2)

  15. A controller is a function you write to control your data.
      With a self-written controller, you can modify data anyway you want:

        * Convert to upper case,
        * Convert currencies,
        * Calculate and Summarize,
        * Round values,
        * Substitute values,
        * Change colors according to values,
        * Anything else you are able to program

  16. =/=

  17. This is a list of Hypertext Transfer Protocol (HTTP) response status codes. Status codes are issued by a server in response to a client's request made to the server.
      It includes codes from IETF Request for Comments (RFCs), other specifications, and some additional codes used in some common applications of the HTTP.
      The first digit of the status code specifies one of five standard classes of responses. The optional message phrases shown are typical, but any human-readable alternative may be provided, or none at all.
      Unless otherwise stated, the status code is part of the HTTP standard (RFC 9110).
      The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes.
      All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

        * 1xx - Informational response – the request was received, continuing process.
          * 102 - Processing.

        * 2xx - Successful.
          * 200 - The request was successfully received, understood, and accepted.
          * 201 - Created - usually used for POST after an insert.

        * 3xx - Redirection – further action needs to be taken in order to complete the request.
          * 301 - Moved Permanently.
          * 302 - Moved.
        
        * 4xx - Client error – the request contains bad syntax or cannot be fulfilled.
          * 400 - Bad request.
          * 401 - Unauthorized.
          * 404 - Not found.
          
        * 5xx - Server error – the server failed to fulfil an apparently valid request.
          * 500 - Internal server error.

  18. Middleware is a type of computer software that provides services to software applications beyond those available from the operating system. It can be described as "software glue".
      Middleware makes it easier for software developers to implement communication and input/output, so they can focus on the specific purpose of their application. It gained popularity in the 1980s as a solution to the problem of how to link newer applications to older legacy systems, although the term had been in use since 1968.
      Middleware are functions that have access to the request object, the response object, and the next middleware function in the request-response cycle of the application.
      The next middleware function is commonly denoted by a variable called "next".

  19. =/=

  20. 


# 📝 Notes
  01. **--> npm init -y <--**;

  02. **--> npm install express --save <--**;

  03. Always remember to create the archive ".gitignore" to ignore the folder "node_modules";

  04. ```JavaScript
      const express = require("express"); //Imported the Express framework

      const app = express(); //Started the Express

      const PORT = 3333; //Set a port for the API be watching/listening

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //It's listening the port and when starting the application it executes the function
      ```;
      
  05. ```JavaScript
      "scripts": {
        "start": "node ./src/server.js"
      }
      ```;

  06. =/=;

  07. ```JavaScript
      app.get("/message", (request, response) => {
      response.send("Hello World!")
      }); //Adding a GET method for testing
      ```;

  08. ```JavaScript
      app.get("/message/:id/:user", (request, response) => {
        const { id, user } = request.params;
        response.send(`ID da mensagem: ${id} para o usuário ${user}`)
      }); //Adding a GET method for testing - using Route Params
      ```;

  09. ```JavaScript
      app.get("/users", (request, response) => {
        const { page, limit } = request.query;
        response.send(`Página: ${page}. Mostrar: ${limit}`)
      }); ////Adding a GET method for testing - using Query Params
      ```;

  10. **--> npm install nodemon --save-dev <--** to install only in development dependencies.
      **--> npm install -g nodemon <--** to install globally;

  11. =/=;

  12. ```JavaScript
      app.post("/users", (request, response) => {
      response.send(`Você chamou o POST`)
      }); //Adding a POST method for testing - using Insomnia
      ```;

  13. ```JavaScript
      app.use(express.json()); //So that the API knows which pattern we'll use in the 'request.body' which in this case will be JSON
      ```

      Change:
      ```JavaScript
      response.send(`Usuário: ${user}. E-mail: ${email}. E a senha: ${password}`)
      ```
      
      To:
      ```JavaScript
      response.json({ name, email, password })
      ```;

  14. Create routes folder, and then create users routes file to group the routes.
      Move the routes from server.js to users.routes.js.
      ```JavaScript
      const { Router } = require("express");

      const usersRoutes = Router();

      usersRoutes.post("/", (request, response) => {
        const { name, email, password } = request.body;

        response.json({ name, email, password });
      }); // Inserting a POST method for testing - using Insomnia

      module.exports = usersRoutes;
      ```

      Create the file index.js into routes folder.

      ```JavaScript
      const { Router } = require("express");

      const usersRouter = require("./users.routes");

      const routes = Router();

      routes.use("/users", usersRouter)

      module.exports = routes;
      ```;

  15. Create controllers folder and UsersController.js inside.;

  16. In user.routes.js:
      ```JavaScript
      const UsersController = require("../controllers/UsersController"); // Importing the controller

      const usersController = new UsersController(); // Instantiating the UsersController() class

      usersRoutes.post("/", usersController.create); // Passing the responsibility of creating to the controller
      ```

      In UsersController.js:
      ```JavaScript
      class UsersController {
        create(request, response) {
          const { name, email, password } = request.body; // Request data from body

          response.json({ name, email, password }); // Response the data
        }
      }

      module.exports = UsersController; // Export the UsersController class
      
  17. =/=;

  18. =/=;

  19. ``` JavaScript
        function myMiddleware(request, response, next) {
        console.log("Você passou pelo middleware!");

        if (!request.body.isAdmin) return response.json({ message: "user unauthorized" });

        next();
      }
      ```

      ``` JavaScript
        usersRoutes.post("/", myMiddleware, usersController.create);
      ```

      But only to exemplification. Please delete this code before continuing to step 20.

  20. ;
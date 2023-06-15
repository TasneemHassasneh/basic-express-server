# basic-express-server

### 404 on a bad route:

This requirement asserts that when a request is made to a route that does not exist in the server, the server should respond with a 404 status code.
It verifies that the server can handle invalid routes correctly and inform the client that the requested resource is not found.

### 404 on a bad method:

This requirement checks that when a request is made with an unsupported HTTP method to an existing route, the server should respond with a 404 status code.
It confirms that the server correctly handles requests with unsupported methods for a given route.

### 500 if no name in the query string:

This requirement ensures that if a request is made to the /person route without providing the name query parameter, the server should respond with a 500 status code.
It validates that the server properly handles missing required parameters and returns an appropriate error status.

### 200 if the name is in the query string:

This requirement verifies that when a request is made to the /person route with a valid name query parameter, the server should respond with a 200 status code.
It ensures that the server correctly handles requests with valid parameters and returns a successful response.

### Given a name in the query string, the output object is correct:

This requirement asserts that when a request is made to the /person route with a valid name query parameter, the server should respond with a JSON object containing the expected name value.
It ensures that the server processes the input correctly and returns the expected output.

[Deployed server](https://middle-ware-test.onrender.com).

[Actions](https://github.com/TasneemHassasneh/basic-express-server/actions).



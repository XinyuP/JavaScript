/**
 * AJAX is a developer's dream, because you can:
    Update a web page without reloading the page
    Request data from a server - after the page has loaded
    Receive data from a server - after the page has loaded
    Send data to a server - in the background


    AJAX is not a programming language.
    AJAX is a technique for accessing web servers from a web page.

    AJAX just uses a combination of:

    A browser built-in XMLHttpRequest object (to request data from a web server)
    JavaScript and HTML DOM (to display or use the data)


    AJAX is a misleading name. AJAX applications might use XML to transport data, 
    but it is equally common to transport data as plain text or JSON text.


    AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
    This means that it is possible to update parts of a web page, without reloading the whole page.


 */

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo').innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', 'ajax_info.txt', true);
	xhttp.send();
}



/**
 * The XMLHttpRequest Object
 
All modern browsers support the XMLHttpRequest object.
The XMLHttpRequest object can be used to exchange data with a server behind the scenes. 
This means that it is possible to update parts of a web page, without reloading the whole page.



 */

// Create an XMLHttpRequest Object
// All modern browsers (Chrome, Firefox, Edge (and IE7+), Safari, Opera) have a built-in XMLHttpRequest object.
variable = new XMLHttpRequest();

// Access Across Domains

// For security reasons, modern browsers do not allow access across domains.
// This means that both the web page and the XML file it tries to load, must be located on the same server.

/**
 * XMLHttpRequest Object Methods:
Method---Description
new XMLHttpRequest() ---- Creates a new XMLHttpRequest object
abort()	--- Cancels the current request
getAllResponseHeaders()	--- Returns header information
getResponseHeader()	--- Returns specific header information
open(method,url,async,user,psw)	Specifies the request
    method: the request type GET or POST
    url: the file location
    async: true (asynchronous) or false (synchronous)
    user: optional user name
    psw: optional password
send()	--- Sends the request to the server, Used for GET requests
send(string) --- Sends the request to the server, Used for POST requests
setRequestHeader() --- Adds a label/value pair to the header to be sent


 */

/**
 * XMLHttpRequest Object Properties
onreadystatechange --- Defines a function to be called when the readyState property changes
readyState --- Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready

responseText --- Returns the response data as a string
responseXML	--- Returns the response data as XML data
status --- Returns the status-number of a request
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
statusText --- Returns the status-text (e.g. "OK" or "Not Found")

 */

/**
 * Send a Request To a Server
To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:


open(method, url, async) --- Specifies the type of request
    method: the type of request: GET or POST
    url: the server (file) location
    async: true (asynchronous) or false (synchronous)


send() --- Sends the request to the server (used for GET)
send(string) --- Sends the request to the server (used for POST)


GET is simpler and faster than POST, and can be used in most cases.
However, always use POST requests when:
    A cached file is not an option (update a file or database on the server).
    Sending a large amount of data to the server (POST has no size limitations).
    Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

setRequestHeader(header, value)	--- Adds HTTP headers to the request
    header: specifies the header name
    value: specifies the header value


The url parameter of the open() method, is an address to a file on a server:
xhttp.open("GET", "ajax_test.asp", true);
The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).


* Server requests should be sent asynchronously.
The async parameter of the open() method should be set to true:
By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:
    - execute other scripts while waiting for server response
    - deal with the response after the response is ready

    

 */

/** The onreadystatechange Property
 * With the XMLHttpRequest object you can define a function to be executed when the request receives an answer.
 * The function is defined in the onreadystatechange property of the XMLHttpResponse object:

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();

* The readyState property holds the status of the XMLHttpRequest.
* The onreadystatechange property defines a function to be executed when the readyState changes.
* The status property and the statusText property holds the status of the XMLHttpRequest object.
The onreadystatechange function is called every time the readyState changes.
When readyState is 4 and status is 200, the response is ready:
    */


/** Using a Callback Function
 * A callback function is a function passed as a parameter to another function.

    If you have more than one AJAX task in a website, 
    you should create one function for executing the XMLHttpRequest object, 
    and one callback function for each AJAX task.

    The function call should contain the URL and what function to call when the response is ready.



 * 
 */



    /** AJAX can be used for interactive communication with an XML file.


     * 
     */
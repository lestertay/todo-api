Todo API 
Single-page app with RESTful routing

Technologies used:
* jQuery for front-end code and ajax calls
* Express for server code
* MongoDB for database and Mongoose to connect with express

API
Created using nodeJS and express package
Used REST architectural structure
Recap:
* use node Modules to reduce clutter on the main app.js
* use express’s Router function to store routes
* remember to use body-parser if req.params is required
* remember to add express.static when adding in modules from another directory
* common directories: Models( for mongoose/mongo schema ), public( for front-end code ), routes ( for Router ), views ( for html pages ).
* remember to require packages/modules that you need in each node file
* models’ index.js is used by default when requiring the module
* {mongoose.Promise = Promise} to use promises in mongoose 

Front-End
Used jQuery javascript library 
Wrote ajax calls with jQuery
Recap:
* document.ready() when using jQuery, for async codes that won’t block DOM building
* Remember, when creating elements, event listeners won’t work on newly created elements after DOM building, thus need to work around, using the following example:     $(".list").on("click", "li", callBackFunction)
* Good to create functions to prevent re-writing chunks of code
* $(this) jQuery object

Need to read up more on:
express, mongo and mongoose documentations
CSS
DOM and the event loop
jQuery’s documentations
node’s documentations

This is a node and express js application which uses pug templating engine.
 To run this app:
	Go to the directory where the this folder(05-templates) is present and open terminal in that folder.
	Restart your server for better usage.
	Then type : nodemon and press enter.
	Note : if nodemon doesn't work then type : node 05-templates.js and press enter.
	This command initiates the server at the port number 5000.
	So, go to the browser and start localhost by typing "http://localhost:5000" in the search bar.
	This will redirect you the app that is running on the server with portnumber 5000.
	Initially you will see welocme message stating you to try the routes on the page.
	So, after typing "http://localhost:5000" add '/main'("http://localhost:5000/main") and you will see the output of that route(Countries and their Capitals).
	Next try "http://localhost:5000/populous" and "http://localhost:5000/region" for countries with atleast 20 million population in descending order and regions with its number of countries respectively.
	The pug file is in the views folder of the directory.
 	

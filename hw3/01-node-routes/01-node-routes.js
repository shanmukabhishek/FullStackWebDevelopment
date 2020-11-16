const http = require('http'); 
const port = process.env.PORT || 5000;

// http://localhost:5000/ should return a status code 200 with a 'welcome' message

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code

// http://localhost:5000/cache should return 'this resource was cached' in plain text and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// for other routes, this exercise should return a status code 404 with '404 - page not found' in plain text

const server = http.createServer((req, res) => {
    
    // Add your code below
    var url = req.url; 
      
    if(url ==='/') { 
        res.write(' Welcome'); 
        res.statusCode=200; 
        res.end();  
    } 
    else if(url ==='/redirect') { 
      res.writeHead(302, { "Location": "http://localhost:" + port  + '/redirected' });
        res.write('/redirected');
        //res.statusCode(302);
        res.end();  
    } 
    else if (url =='/cache') { 
        res.setHeader('Cache-Control',`max-age=86400, no-cache`)
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.write('this resource was cached');  
        res.end();  
    } 
    else if(url == '/cookie') {
      res.writeHead( 200, {
        'Set-Cookie': 'hello=world',
        'Content-Type': 'text/plain'
      });
      res.write('cookies... yummm');
      res.end(); 
    }
    else if(url == '/check-cookies') {
      document.cookie = 'hello=world';
      if (document.cookie.split(';').some(function(item) {
        return item.trim().indexOf('hello=') == 0
    }))
    
    if (document.cookie.split(';').some((item) => item.trim().startsWith('hello='))) {
        res.write('yes');
    }
    else { res.write('no');
  }
        res.end();
    }
    else res.statusCode=404;
    res.end();
  });
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  
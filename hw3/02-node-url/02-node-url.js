const http = require('http'); 
const url = require('url'); 
const querystring = require('querystring'); 

const port = process.env.PORT || 5000;
// Add your code below

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;

    console.log(queryObject);
    let result='';
    for(i in queryObject) {
      result += `<tr style =  "border: 1px solid black"><td style =  "border: 1px solid black">${i}</td><td style =  "border: 1px solid black">${queryObject[i]}</td></tr>`
    }
    // Add your code below
    res.write('<table style =  "border: 1px solid black">'+result+'</table>');

    res.end();
  });
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
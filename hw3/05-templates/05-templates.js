const express = require('express');
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


function getpage() {
    const url = 'https://restcountries.eu/rest/v2/all';
    return fetch(url).then(response => response.json());
}
app.get('/', (req, res) => {
    res.render('api');
});

app.get('/main', (req, res) => {
    getpage().then((response) => {
        let renderedData = [];
        response.forEach(details => {
            renderedData.push(details.name + " - " + details.capital);
        });
       res.render('api', {
           renderedData
       });
   })
});

app.get('/populous', (req, res) => {
    getpage().then((response) => {
        response.sort( (a, b) => b.population - a.population);
        let renderedData = [];
        response.forEach(details => {
            if(details.population >= 20000000)
                renderedData.push(details.name + " - "+details.population);
        });
       res.render('api', {
           renderedData
       });
   })
});

app.get('/regions', (req, res) => {
    getpage().then((response) => {
        let renderedData = [];
        let regions = {};
        response.forEach(details => {
            if(!Object.keys(regions).includes(details.region)) {
                if(details.region == '') {
                    console.log(details);
                }
                regions[details.region] = 1;
            }
            else {
                regions[details.region] = regions[details.region]+1;
            }
            // console.log(regions);
        });
        for(i in regions) {
            renderedData.push(i + " - " + regions[i]);
        }
        // renderedData.push(details.name + " - "+details.population);
       res.render('api', {
           renderedData
       });
   })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
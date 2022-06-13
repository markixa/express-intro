//require exoress
const { response } = require('express');
const express = require('express');
//create the express application
const app = express();



/* app.get('/', function (req, res) {
  res.send('Hello World');
})
 */
//get request is used only to retrieve data from the server
app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome to Express</h1>
        <a href="/home">Home page</a>
        <a href="/laia">Go to Laia's page</a>
    `)
});

app.get('/welcome-laia', (req, res, next) => {
    res.send(`
    <h1>Welcome to Express, Laia</h1>
    `)
});

//the same, but adding the html file instead the html code here
app.get('/home', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/laia', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/laia.html');
})


//start app on port 300 by convention
app.listen(3000, () => console.log('Listening in port 3000'));
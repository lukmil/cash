# cash

Steps to run application: <br>
    1: npm install <br>
    2: npm start (or nodemon --exec babel-node app/index.js)
    
Steps to run tests: <br>
    1: npm install (if you have not done yet)<br> 
    2: npm test (or ./node_modules/.bin/mocha --recursive --require @babel/register)

Why I chosen libs which I used: <br>
    1: <b>babel</b> - to run ES6 <br>
    2: <b>eslint (airbnb base)</b> - to code with airbnb style guides <br>
    3: <b>mocha</b> - it was most popular testing library <br>
    4: <b>nodemon</b> - for live reload when developing <br>
    5: <b>moment</b> - for better experience with dates (startOf and isBetween methods)     

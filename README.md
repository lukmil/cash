# cash

### Steps to run application:
    1: npm install
    2: npm start (or nodemon --exec babel-node app/index.js)
    
### Steps to run tests:
    1: npm install (if you have not done yet)
    2: npm test (or ./node_modules/.bin/mocha --recursive --require @babel/register)

### Why I chosen libs which I used: 
    * nodemon - for live reload when developing 
    * babel - to run ES6 
    * eslint (airbnb base) - to code with airbnb style guides 
    * mocha - it was most popular testing library 
    * sinon - for test spies
    * moment - for better experience with dates (startOf and isBetween methods)     

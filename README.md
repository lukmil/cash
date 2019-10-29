# cash

### Breaking tests: 
I got notes that some of the tests were breaking. I tried to break my test with:
 * Different pc (3), with Ubuntu and w10, but still nothing works
 * Just in case in packages.json I removed ^ for the same versions as mine
 * Tried with Nodejs 12.13.0 LTS and 13.0.1 (latest)
 * Tried with npm version 6.9.0 and 6.12.0
 * Tried looking for "expected.test" and I found it in two places
   ** regjsgen and eslint, but it does not even call them
    
And still nothing helps, I hope it will not happen again or if it will I need more information about which tests are breaking.

### Steps to run application:
    1: npm install
    2: npm start filePath (takes one argument) => npm start input.json
    
### Steps to run tests:
    1: npm install (if you have not done this step yet)
    2: npm test

### Why I chosen libs which I used: 
    * nodemon - for live reload when developing 
    * babel - to run ES6 
    * eslint (airbnb base) - to code with airbnb style guides 
    * mocha - it was most popular testing library 
    * sinon - for test spies
    * moment - for better experience with dates (startOf and isBetween methods)
    * glob - for eslint tests to match files
    * node fetch - looked like a easiest http library
    * promise - to deal with promises
    

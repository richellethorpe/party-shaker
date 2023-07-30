# Party-Animal

#### By Richelle Thorpe 

#### This application will allow users to enter the recipe of a single cocktail and how many total cocktails they would like to provide and return a multiplied recipe.

## Technologies Used

- React
- Firebase
- JavaScript
- JSX
- ASP.NET Core
- Markdown
- Entity Framework Core
- CSS /React-Bootstrap


## Description
- Party Shaker ues the NoSQL cloud-hosted database Firebase for user authentication. The application will take user input for a single cocktail and returns a large batch recipe based upon how many total cocktails need to be made. It will offer resources for users who want to learn more about making large-scale drinks for events.

### MockUp to go here

### Research & Planning Log
#### Friday, 06/17
- 10:50p-11:23 researching hooks/ api to incorperate.
- 6:30a researching api 
- 7a continuation of api research
- 7:45 react native
- 8:25 plan component diagram

#### Monday 7/3

- 3pm css styling research- bootstrap or css implemenation
- 4pm authentication/ identity
- 5pm mockup research and planning/ color scheme (https://coolors.co/)

## Setup/Installation Requirements
 
1. Clone repository to desired location on your computer.
2. Navigate to project directory PartyShaker.
3. Install all dependancies with `npm install`.
4. Run program with `npm start`.

## Component Diagram
```

├── App.js
│   ├── NavBar.js
│   ├── Home.js   
│   ├── MultiplyForm.js  
│   │       ├── CocktailRecipe.js
│   │
│   ├── SignIn.jsx/SignUp.jsx
│   ├── Inventory.js   
│   │   
      
```     

## Known Bugs

- Authorization needs to be implemented.
- Bottle equivalency needs to be added to batched recipes.

## License

Copyright 2023 Richelle Thorpe; Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information
[richelle.ak@gmail.com](mailto:richelle.ak@gmail.com)
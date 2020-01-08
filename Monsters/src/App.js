import React, {Component} from 'react';
// import logo from './logo.svg';
import {CardList} from './components/card-list/card-list-component'
import { SearchBox } from './components/card-list/search-component.js'
import './App.css';
/*
  what is functional components and class components refer:
  https://codeburst.io/react-js-understanding-functional-class-components-e65d723e909
 */
//Class components
class App extends Component {
  constructor() {
    super();
    //state can be used in class components and not in functiional components and class component very helpful to maintain state 
    // this.state = {
    //   string:'Hello Aadu!'
    // };
    
    //project
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

  //Lifecycle methods 
  //componentdidmount is used to fetch data from external servers or api's, once everyhting is render componentDidMount() is called
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  render() {
    //this is object destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      /*this is JSX
      jsx is a combination of javascript and html to make UI better, jsx uses camelCase of attributes 
      {<h2>this is javascript expressions and not html </h2>}*/ 
      // <div>
      //   <h2>{this.state.string}</h2>
      //  <p>Iam using class component</p>
      // </div>
      <div className= "App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = "search ur monsters"
          handleChange = {e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filteredMonsters} />
        {/* I have sent the monsters into card-list component bcoz displaying card-list components is its duty */}
          {/* u can send anything using props from app.js to the component ardList */}
          {/* whatever u write inside the component block is considered as children and it can be accessed as props.children in card-list-component.js file */}
        
          {/* //key is required because if any one of the state changes React does not  re render everything in the bowl only one will be changed and for that key is required */}
         {/* </CardList> */}
        
          
      </div>
    )
  }
}

export default App;

//THE JOB OF REACT DEVELOPER
/*
  1.  Decide on Components
      (decidde what should be the components adn divide every small stuffs such as card and card-list in the current project)
  2.  Decide the state and where it lives
  3.  what changes when state changes (refer 2019 july udemy react course-React Basics- 21video)
*/
// *********************************************

// how to Deploy the website
/*
  go to package.json and type "homepage": "https://adarshav.github.io/React"
 */
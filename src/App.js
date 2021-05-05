import './App.css';
import React from 'react'
import Person from './Person'
import avatar from './images/images.jpg'

// arrow function

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      person : { 
          fullName : 'John Smith',
          profession : 'Human Resources specialist',
          image      : avatar,
          bio        : 'John Sullivan is a Human Resources specialist with a decadeof successful experience in hiring and employee management. John specializes in Human Resource technologies and regularly attends national training sessions to showcase new HR tech trends, such as self-service, wellness apps, and people analytics tools.'
                },
      status : true,
      // date   : new Date().toLocaleString()
      count : 0
    }
  }

  componentDidMount() {
    setInterval( () => this.setState({
        // date :  new Date().toLocaleString()
        count : this.state.count + 1
    }), 1000);
 }

  show =() => {
    this.setState(prevState => ({
      status: !prevState.status 
      
      }))
  }
  render(){
    return (
      <div className="container">
        <h1>{this.state.count}</h1>
        {this.state.status ? <Person person = {this.state.person}/> : <></>}
        <button onClick = {() => this.show()}>{this.state.status ? 'Hide' : 'Show'}</button>
      </div> 
  )
  }
    
  
}

export default App;

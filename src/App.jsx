import React, { Component } from 'react';
import DisplayName from './Components/DisplayName';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White'
    }
    // this.DisplayName = [
    //   {firstName: 'Reggie'},
    //   {lastName: 'White'}
    // ]
  }

  render() { 
    return (
      <div>

        <DisplayName fN={this.state.firstName} lN={this.state.lastName} />
        <DisplayName fN={this.state.firstName} lN={this.state.lastName} />

      </div>
      // <div><div DisplayName= {firstName + lastName}> 
      //   <h1{props.DisplayName}</h1>
      // </div>
    );
  }

}
 
export default App;
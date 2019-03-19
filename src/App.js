import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Button from './components/Button';

class App extends Component {
    state = {
        mounted: true
    };

    handleSubmit = event => {
        event.preventDefault();
        alert("woohoo")
        this.setState({ mounted: false });
    };

    didComponentMount(){

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {/*<div id="sda"  style={{width: "15px", height: "20px", fontSize: "20px"}} onClick={this.handleSubmit}/>*/}
          {/*<Button type={"submit"} submit={this.handleSubmit}/>*/}
        </header>
        {this.state.mounted ? <Button/> : <Form submitHandler={this.handleSubmit}/>}
          <Form submitHandler={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;

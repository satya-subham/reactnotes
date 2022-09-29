import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      html: "",
      css: "",
      js: "",
      react: "",
      complete: "",
      incomplete: "",
    };
  }

  handleEmail = (event) =>{
    this.setState({
      email: event.target.value,
    })
  }
  handlePassword = (event) =>{
    this.setState({
      password: event.target.value,
    })
  }
  handleHtmlCheck = (event) =>{
    this.setState({
      html: event.target.value,
    })
  }
  handleCssCheck = (event) =>{
    this.setState({
      css: event.target.value,
    })
  }
  handleJsCheck = (event) =>{
    this.setState({
      js: event.target.value,
    })
  }
  handleReactCheck = (event) =>{
    this.setState({
      react: event.target.value,
    })
  }
  handleCompleteRadio = (event) =>{
    this.setState({
      complete: event.target.value,
    })
  }
  handleIncompleteRadio = (event) =>{
    this.setState({
      incomplete: event.target.value,
    })
  }
  login = (Event) => {
    Event.preventDefault()
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>LOG IN</h1>
          <form action="">
            <div>
          <label htmlFor="username">USERNAME: </label>
          <input type="text" id="username" name="username" value={this.state.email} onChange={this.handleEmail}/>
          </div>
          <div> 
          <label htmlFor="password">PASSWORD: </label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
          </div>
          <div>
            <h3>COURSES</h3>
          <input type="checkbox" id="html" name="html" value={this.state.html} onChange={this.handleHtmlCheck}/>
           <label htmlFor="html">HTML</label>
          </div>
          <div>
          <input type="checkbox" id="css" name="css" value={this.state.css} onChange={this.handleCssCheck}/>
           <label htmlFor="css">CSS</label>
          </div>
          <div>
          <input type="checkbox" id="js" name="js" value={this.state.js} onChange={this.handleJsCheck}/>
           <label htmlFor="js">JavaScript</label>
          </div>
          <div>
          <input type="checkbox" id="react" name="react" value={this.state.react} onChange={this.handleReactCheck}/>
           <label htmlFor="react">React</label>
          </div>
          <div>
            <h3>PROGRESS</h3>
            <div>
              <input type="radio" id="complete" name="progress" value={this.state.complete} onChange={this.handleCompleteRadio}/>
              <label htmlFor="complete">Complete</label>
            </div>
            <div>
              <input type="radio" id="incomplete" name="progress" value={this.state.incomplete} onChange={this.handleIncompleteRadio}/>
              <label htmlFor="incomplete">Not Complete</label>
            </div>
          </div>
          <button onClick={this.login}>SUBMIT</button>
          </form>
        </div>
      </>
    );
  }
}

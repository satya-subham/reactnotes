import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          userName: "subham",
          passWord: 1234,
        },
      ],
    };
  }


  login = () => {
    let uName = document.querySelector('#username');
    let pWord = document.querySelector('#password');
    let btn = document.querySelector('button')

    this.state.data.map(user => {
        if(uName.value != user.userName && pWord.value != user.passWord){
          alert('Invalid username or password');
        }
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <label>USERNAME: </label>
          <input type="text" id="username"/> <br />
          <label>PASSWORD: </label>
          <input type="password" id="password"/> <br />
          <button onClick={this.login}>SUBMIT</button>
        </div>
      </>
    );
  }
}

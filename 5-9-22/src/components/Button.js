import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
       data: [
        {
          userName: "RAAVAN",
          id: 1,
          imgUrl : "https://i0.wp.com/www.mythoworld.com/wp-content/uploads/2021/06/Chandrahasa-Blog.jpg?fit=1000%2C667&ssl=1",
          message: "Never porcastinate anything if it comes in your mind do it now !!!"
        },
        {
          userName: "RAM",
          id: 2,
          imgUrl : "https://cdn.pixabay.com/photo/2021/03/29/10/33/rama-6133619__340.png",
          message: "A spiritless, weak, and sad person cannot do any good work, He goes on drowning in the depths of sorrow. !!!"
        },
        {
          userName: "SITA",
          id: 3,
          imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1f6QSo0mB3m6HeMH2Recb9eWrmr3_BNAwQ&usqp=CAU",
          message: "When the axe entered the forest, the trees said to each other: do not worry, the handle in that axe is one of us. !!!"
        },
        {
          userName: "HANUMAN",
          id: 4,
          imgUrl : "https://i.pinimg.com/564x/41/16/e0/4116e02280eca76e4d737991caa5ec63.jpg",
          message: "Without Hanuman, no one in this world would have known of ram !!!"
        }
      ],
    };
  }

  valueIncrement = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.state.count = 10;
    }
  };

  valueDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      this.state.count = 0;
    }
  };


  

  render() {
    
  
    return (
      <>
        <h1>Value = {this.state.count}</h1>
        <button onClick={this.valueIncrement}>Increment</button>
        <button onClick={this.valueDecrement}>Decrement</button>
        <div className="main">
         {this.state.data.map(person => <div className="container">
          <div className="img_user">
          <img src={person.imgUrl}  alt="loading" />
          <h1>{person.userName}</h1> 
          </div>
          <div className="message">
            <h3>{person.message}</h3>
          </div>
          <div className="img_profile">
          <img src={person.imgUrl}  alt="loading"/>
          </div>
          <div className="buttons">
          <button><i className="fa-solid fa-heart"></i></button>
          <button><i className="fa-regular fa-comment"></i></button>
          <button><i className="fa-solid fa-share"></i></button>
          </div>
          </div>
          )}
          </div>
      
        
      </>
    );
  }
}

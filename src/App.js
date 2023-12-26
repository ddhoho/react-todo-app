import React, { Component } from "react"; // from "react"; 라이브러리에서 {Component} 를 가져옴
import "./App.css"

// 클래스형
// 가져온 {Component}를 extends해서 사용함
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    }
  ]

  //key={data.id} 리액트에서는 리스트 나열할때 유니크한 값을 써야한다.
  // {data.title} 로 중괄호를 사용해줘야 title가 나온다.

  render() {
    return (
      <duv className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.todoData.map(data => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed}></input>
              {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}


        </div>
      </duv>
    )
  }
}
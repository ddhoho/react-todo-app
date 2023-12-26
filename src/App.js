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

  render() {
    return (
      <duv className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div>
            <input type="checkbox" defaultChecked={false}></input>
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>

        </div>
      </duv>
    )
  }
}
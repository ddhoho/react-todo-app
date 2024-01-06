//import React, { Component } from "react"; // from "react"; 라이브러리에서 {Component} 를 가져옴 // 클래스형
import React, { useState } from "react";
import "./App.css"
import List from "./components/List";
import Form from "./components/Form";

// 클래스형
// 가져온 {Component}를 extends해서 사용함
//export default class App extends Component {

// 함수형으로 변경
export default function App() {
  // state = { // 클래스형
  //   todoData: [],
  //   value: ""
  // }
  // 위와 같은 코드, 즉, 함수형 리액트에서 하는 초기화.
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");



  const handleSubmit = (e) => {
    // form 안에서 input을 전송할때 페이지 리로드 되는걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      //title: this.state.value, // 클래스형
      title: value,
      completed: false
    }

    // 원래 있던 할 일에 새로운 할일 더해주기
    // 입력란에 있던 글씨 지워주기
    //this.setState({ todoData: [...this.state.todoData, newTodo], value: "" }) // 클래스형
    // prev는 전 데이터
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }



  //key={data.id} 리액트에서는 리스트 나열할때 유니크한 값을 써야한다.
  // {data.title} 로 중괄호를 사용해줘야 title가 나온다.
  //render() { // 클래스형
  return (
    <duv className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

      </div>
    </duv >
  )
}
// } // render 중괄호

///
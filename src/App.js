//import React, { Component } from "react"; // from "react"; 라이브러리에서 {Component} 를 가져옴 // 클래스형
import React, { useState, useCallback } from "react";
import "./App.css"
import Lists from "./components/Lists";
import Form from "./components/Form";


const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

// 클래스형
// 가져온 {Component}를 extends해서 사용함
//export default class App extends Component {


// 함수형으로 변경
//export default function App() {
function App() {
console.log("App Component");

  // state = { // 클래스형
  //   todoData: [],
  //   value: ""
  // }
  // 위와 같은 코드, 즉, 함수형 리액트에서 하는 초기화.
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

   // 할일 목록 제거 함수
  // filter함수 : 배열에서 특정 조건에 따라 필터링 해주고 필터링한 값을 리턴해줌.
  const handleClick = useCallback( (id) => {
    //let newTodoData = this.state.todoData.filter(data => data.id !== id) // 클래스형
    let newTodoData = todoData.filter((data) => data.id !== id);
    //console.log("newTodoData : ", newTodoData);
    //this.setState({ todoData: newTodoData }) // 필터링된 newTodoData를 todoData에 덮어씌워줌 으로서 삭제된걸 걸러준 배열을 보여줌 // 클래스형
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  },[todoData]);



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
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue("");
  }

  // 할 일 목록 전부 지우기
  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
   }



  //key={data.id} 리액트에서는 리스트 나열할때 유니크한 값을 써야한다.
  // {data.title} 로 중괄호를 사용해줘야 title가 나온다.
  //render() { // 클래스형
  return (
    <duv className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg-max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

      </div>
    </duv >
  )

}
// } // render 중괄호

///

export default App
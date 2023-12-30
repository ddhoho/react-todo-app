import React, { Component } from "react"; // from "react"; 라이브러리에서 {Component} 를 가져옴
import "./App.css"

// 클래스형
// 가져온 {Component}를 extends해서 사용함
export default class App extends Component {

  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
    ],
    value: ""
  }

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

  // 할일 목록 제거 함수
  // filter함수 : 배열에서 특정 조건에 따라 필터링 해주고 필터링한 값을 리턴해줌.
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id)
    console.log('newTodoData : ', newTodoData)
    this.setState({ todoData: newTodoData }) // 필터링된 newTodoData를 todoData에 덮어씌워줌 으로서 삭제된걸 걸러준 배열을 보여줌
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    // form 안에서 input을 전송할때 페이지 리로드 되는걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    // 원래 있던 할 일에 새로운 할일 더해주기
    // 입력란에 있던 글씨 지워주기
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" })
  }

  //key={data.id} 리액트에서는 리스트 나열할때 유니크한 값을 써야한다.
  // {data.title} 로 중괄호를 사용해줘야 title가 나온다.
  render() {
    return (
      <duv className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map(data => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed}></input>
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}

          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />

          </form>

        </div>
      </duv >
    )
  }
}
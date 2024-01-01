import React from 'react'

export default function List({ todoData, setTodoData }) {

     // 부모컴포넌트에서 자녀컴포넌트로 데이터를 내려줌
     //props.todoData

     const btnStyle = {
          color: "#fff",
          border: "none",
          padding: "5px 9px",
          borderRadius: "50px",
          cursor: "pointer",
          float: "right"
     }

     const handleCompleteChange = (id) => {
          //let newTodoData = this.state.todoData.map((data) => { // 클래스형
          let newTodoData = todoData.map((data) => {
               if (data.id === id) {
                    data.completed = !data.completed;
               }
               return data;

          });

          //this.setState({ todoData: newTodoData }); // 클래스형
          setTodoData(newTodoData);
     };

     // 할일 목록 제거 함수
     // filter함수 : 배열에서 특정 조건에 따라 필터링 해주고 필터링한 값을 리턴해줌.
     const handleClick = (id) => {
          //let newTodoData = this.state.todoData.filter(data => data.id !== id) // 클래스형
          let newTodoData = todoData.filter(data => data.id !== id)
          console.log('newTodoData : ', newTodoData)
          //this.setState({ todoData: newTodoData }) // 필터링된 newTodoData를 todoData에 덮어씌워줌 으로서 삭제된걸 걸러준 배열을 보여줌 // 클래스형
          setTodoData(newTodoData);
     }

     const getStyle = (completed) => {
          return {
               padding: "10px",
               borderBottom: "1px #ccc dotted",
               textDecoration: completed ? "line-through" : "none"
          }
     }

     return (
          <div>
               {todoData.map(data => ( // {this.state.todoData.map(data => 클래스형
                    <div style={getStyle(data.completed)} key={data.id}>
                         <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)}></input>
                         {data.title}
                         <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                    </div>
               ))}
          </div>
     )
}

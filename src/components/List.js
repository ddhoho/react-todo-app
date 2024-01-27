import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {
  // 부모컴포넌트에서 자녀컴포넌트로 데이터를 내려줌
  //props.todoData

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
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData : ", newTodoData);
    //this.setState({ todoData: newTodoData }) // 필터링된 newTodoData를 todoData에 덮어씌워줌 으로서 삭제된걸 걸러준 배열을 보여줌 // 클래스형
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext >
        <Droppable droppableId="todo">
          {(provided) => ( 
            <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map(
            (
              data, // {this.state.todoData.map(data => 클래스형
              index
            ) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                  <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                    <div className="items-center">
                      <input
                        type="checkbox"
                        defaultChecked={data.completed}
                        onChange={() => handleCompleteChange(data.id)}
                      />{" "}
                      <span
                        className={data.completed ? "line-through" : undefined}
                      >
                        {data.title}
                      </span>
                    </div>
                    <div>
                      <button
                        className="items-center"
                        onClick={() => handleClick(data.id)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

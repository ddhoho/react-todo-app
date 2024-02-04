import React from "react";

function List({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) {
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
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => handleCompleteChange(id)}
        />{" "}
        <span className={completed ? "line-through" : undefined}>{title}</span>
      </div>
      <div>
        <button className="items-center" onClick={() => handleClick(id)}>
          x
        </button>
      </div>
    </div>
  );
}

export default List;

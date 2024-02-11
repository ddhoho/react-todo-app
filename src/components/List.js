import React, { useState } from "react";

const List = React.memo(
  ({
    handleClick,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
  }) => {

    // 할 일 목록 수정 스테이트
    const [isEditing, setIsEditing] = useState(false);
    // 할 일 목록 타이틀 수정 스테이트
    const [editedTitle, setEditedTitle] = useState(title);

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
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
    };

    // 할 일 목록 수정할때 텍스트 입력 기능
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    }

    // 할 일 목록 수정 기능
    const handleSubmit = (e) =>{
      e.preventDefault();

      let newTodoData = todoData.map(data => {
        if(data.id === id) {
          data.title = editedTitle
        }
        return data;
      })
      
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
      setIsEditing(false);
    }

    if (isEditing) {
      // 할 일 목록 수정 할때...
      return (
        <div className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  bg-gray-100 border rounded`} >
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />{" "}
          </form>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(false)}
          >
            x
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 float-right"
            type="submit"
          >
            save
          </button>
        </div>
      </div>

      )
      
      
    } else {

      // 할 일 목록 추가 할때...
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={() => handleCompleteChange(id)}
            />{" "}
            <span className={completed ? "line-through" : undefined}>
              {title}
            </span>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;

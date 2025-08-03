import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";

interface Todo {
  id: string;
  text: string;
  category: string;
  isDone: boolean;
}

export const TodoListComp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? (JSON.parse(saved) as Todo[]) : [];
  });

  const [filterCategory, setFilterCategory] = useState<string>("Все");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (idToDelete: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== idToDelete));
  };

  const makeDone = (idToMakeDone: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === idToMakeDone ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const filteredTodos =
    filterCategory === "Все"
      ? todos
      : todos.filter((todo) => todo.category === filterCategory);

  return (
    <div className="text-center">
      <h1>TodoList</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 && <p>Пока задач нет</p>}
      категория для поиска:
      <select
        className="text-black bg-white ml-3"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="Все">Все категории</option>
        <option value="Учеба">Учеба</option>
        <option value="Работа">Работа</option>
        <option value="Дом">Дом</option>
      </select>
      {filteredTodos.map((todo) => (
        <div
          style={{ color: todo.isDone ? "green" : "white" }}
          key={todo.id}
          className="border-t border-b py-2 my-4"
        >
          <p>Todo: {todo.text}</p>
          <p>Категория: {todo.category}</p>
          <button className="border rounded p-1" onClick={() => deleteTodo(todo.id)}>Удалить</button>

          <p>
            <input className="mr-3 scale-125"
              type="checkbox"
              checked={todo.isDone}
              onChange={() => makeDone(todo.id)}
            />
            Сделать выполненым?
          </p>
        </div>
      ))}
    </div>
  );
};

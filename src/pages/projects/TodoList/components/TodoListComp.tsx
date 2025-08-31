import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div className="text-center p-6">
      <div className="mb-3"><h1>TodoList</h1>
      <TodoForm addTodo={addTodo} /></div>
      
      <div className="border-t">
        <DropdownMenu>
          <DropdownMenuTrigger className="border p-1 my-5 rounded hover:bg-white hover:text-black transition hover:cursor-pointer">
            Выбери категорию для поиска
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-950 text-white border-zinc-800">
            <DropdownMenuLabel>Категория</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <DropdownMenuRadioGroup
              value={filterCategory}
              onValueChange={setFilterCategory}
            >
              <DropdownMenuRadioItem value="Все">
                Все категории
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Учеба">Учеба</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Работа">
                Работа
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Дом">Дом</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {todos.length === 0 && <p>Пока задач нет</p>}
        {filteredTodos.map((todo) => (
          <div
            style={{ color: todo.isDone ? "green" : "white" }}
            key={todo.id}
            className="border-t border-b py-2 my-4"
          >
            <p>Todo: {todo.text}</p>
            <p>Категория: {todo.category}</p>
            <button
              className="border rounded p-1"
              onClick={() => deleteTodo(todo.id)}
            >
              Удалить
            </button>

            <p>
              <input
                className="mr-3 scale-125"
                type="checkbox"
                checked={todo.isDone}
                onChange={() => makeDone(todo.id)}
              />
              Сделать выполненым?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState, type FormEvent, type ChangeEvent } from "react";


interface Todo {
  id: string;
  text: string;
  category: string;
  isDone: boolean;
}


interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string>('Учеба');

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(), // делаем id строкой
      text,
      category,
      isDone: false
    };

    addTodo(newTodo);
    setText('');
    setCategory('Учеба');
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <input className="m-3 p-1 text-black"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Введи задачу"
      />
      <select className="m-3 p-1 text-black"
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
      >
        <option>Учеба</option>
        <option>Работа</option>
        <option>Дом</option>
      </select>
      <button className="m-3 border p-1 rounded" type="submit">submit</button>
    </form>
  );
};

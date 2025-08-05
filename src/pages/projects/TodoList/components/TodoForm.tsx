import { useState, type FormEvent, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("Учеба");
  
  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(), // делаем id строкой
      text,
      category,
      isDone: false,
    };

    addTodo(newTodo);
    setText("");
    setCategory("Учеба");
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <Input
        className="m-3 p-1"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Введи задачу"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="border p-1 rounded hover:bg-white hover:text-black transition hover:cursor-pointer">Выбери категорию</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-950 text-white border-zinc-800">
          <DropdownMenuLabel>Категория</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-700" />
          <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
              <DropdownMenuRadioItem value="Учеба">Учеба</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Работа">Работа</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Дом">Дом</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <button className="m-3 border p-1 rounded hover:bg-white hover:text-black transition hover:cursor-pointer" type="submit">
        Submit
      </button>
    </form>
  );
};

import { LoremIpsum } from "lorem-ipsum";
import {  useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export const Paragraphs = () => {
  const [inputNum, setInputNum] = useState(0);
  const [generated, setGenerated] = useState('')
  const handleGenerate = () => {
    if (inputNum > 10000) {
        setGenerated('TOO BIG NUM, > 10000')
    } else {setGenerated(lorem.generateParagraphs(inputNum))}
    
  };
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(generated);
    } catch (err) {
      console.error("Ошибка копирования: ", err);
    }
  };
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return (
    <div>
      <nav className="flex justify-between mx-40 my-10">
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/home">Home</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/words">Words</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/sentences">Sentences</NavLink>
        <NavLink className={({ isActive }) =>
            `inline-block mx-6 transform transition-transform duration-200 hover:scale-125 ${
              isActive ? "underline font-semibold" : "text-gray-500"
            }`
          } to="/projects/small/loremgenerator/paragraphs">Paragraphs</NavLink>
      </nav>
      <div className="text-center ">
        <Input
          onChange={(e) => setInputNum(Number(e.target.value))}
          type="number"
          className=""
        ></Input>
       <p><button className="border rounded p-1 my-2 transition hover:bg-white hover:text-black" onClick={handleGenerate}>Generate</button></p> 
        <p className="inline-block border rounded p-1 my-2 transition hover:bg-white hover:text-black">
          <AlertDialog>
            <AlertDialogTrigger>Copy</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-zinc-900">Do you want to copy all of this text?</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={copyText}>Ok</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </p>
      </div>
      <p>{generated}</p>
    </div>
  );
};

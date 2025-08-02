import { LoremIpsum } from "lorem-ipsum";
import {  useState } from "react";
import { NavLink } from "react-router-dom";
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
      alert("Copyied!");
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
        <input
          onChange={(e) => setInputNum(Number(e.target.value))}
          type="number"
          className="text-black"
        ></input>
       <p><button className="border rounded p-1 my-2 transition hover:bg-white hover:text-black" onClick={handleGenerate}>Generate</button></p> 
       <p><button className="border rounded p-1 my-2 transition hover:bg-white hover:text-black" onClick={copyText}>Copy</button></p> 
      </div>
      <p>{generated}</p>
    </div>
  );
};

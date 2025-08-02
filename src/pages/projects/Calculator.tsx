import { useEffect, useState } from "react";
import { evaluate } from "mathjs";
export function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [used, setUsed] = useState(true);
  const handleClick = (prop: number) => {
    setInput((prev) => prev + prop);
    setUsed(false);
  };
  const handleClickOp = (prop: string) => {
    if (!used) {
      setInput((prev) => prev + prop);
      setUsed(true);
    }
  };
  const handleClear = () => {
    setInput("");
    setResult(0);
    setUsed(true);
  };
  const handleRemoveLast = () => {
    const lastChar = input.charAt(input.length - 1);

    if (["+", "-", "*", "/"].includes(lastChar)) {
      setUsed(false);
    } else {
      setUsed(true);
    }

    setInput((prev) => prev.slice(0, -1));
    console.log(lastChar);
  };
  useEffect(() => {
    try {
      setResult(evaluate(input));
    } catch {}
  }, [input]);
  return (
    <div className="text-center">
      <p className="">Result = {result}</p>
      <p>{input}</p>
      <div className="">
        <div className="">
          <button
            className="bg-white text-black m-2 p-1 rounded "
            onClick={() => handleClick(7)}
          >
            7
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(8)}
          >
            8
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(9)}
          >
            9
          </button>
        </div>
        <div className="">
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(4)}
          >
            4
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(5)}
          >
            5
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(6)}
          >
            6
          </button>
        </div>
        <div className="">
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(1)}
          >
            1
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(2)}
          >
            2
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(3)}
          >
            3
          </button>
        </div>
        <div>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClick(0)}
          >
            0
          </button>
        </div>
        <div className="">
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClear()}
          >
            clear
          </button>

          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleRemoveLast()}
          >
            &#8592;
          </button>
        </div>
        <div className="">
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClickOp("+")}
          >
            +
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClickOp("-")}
          >
            -
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClickOp("/")}
          >
            /
          </button>
          <button
            className="bg-white text-black m-2 p-1 rounded"
            onClick={() => handleClickOp("*")}
          >
            *
          </button>
        </div>
      </div>
    </div>
  );
}

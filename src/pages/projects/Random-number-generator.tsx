import { useState } from "react";
import { Input } from "@/components/ui/input";
export const RandomNumberGenerator = () => {
  const [randomNum, setRandomNum] = useState(0);
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  
  return (
    <div>
      <div className="text-center my-4 ">
        <Input className="my-6" placeholder="min" type="number" onChange={(e) => {
            setMin(Number(e.target.value))
        }} />
        <Input className="" placeholder="max" type="number" onChange={(e) => {
            setMax(Number(e.target.value))
        }} />
        <br />
        <button className="mx-6 hover:cursor-pointer rounded-md p-2 border hover:bg-gray-100 transition hover:text-black" onClick={() => {
            const newVal = () => {
                return Math.round(Math.random() * (max - min) + min) ;
            }
            setRandomNum(newVal)
        }}>Generate</button>
      </div>
      <p className="text-center">Generated: </p><p className="font-bold text-center">{randomNum}</p>
    </div>
  );
};

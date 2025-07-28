import { useState } from "react";
export const RandomNumberGenerator = () => {
  const [randomNum, setRandomNum] = useState(0);
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  
  return (
    <div>
      <div className="text-center my-4 ">
        <input className="text-black mb-3 mx-6 rounded-md" placeholder="min" type="number" onChange={(e) => {
            setMin(Number(e.target.value))
        }} />
        <input className="text-black mb-2 mx-6 rounded-md" placeholder="max" type="number" onChange={(e) => {
            setMax(Number(e.target.value))
        }} />
        <br />
        <button className="mx-6 rounded-md p-2 border hover:bg-gray-100 transition hover:text-black" onClick={() => {
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

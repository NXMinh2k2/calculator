import { useState } from "react";
import {BsFillSunFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import useDarkmode from "./useDarkmode";

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  const [isDarkMode, toggleDarkMode] = useDarkmode()

  const operators = ['/', '*', '+', '-', '.']
  
  const updateCalc = (c) => {
    setCalc(calc + c)
    setResult(eval(calc + c))
  }

  const caculate = () => {
    setCalc(result)
    setResult("")
  }

  const deleteLast =  () => {
    if(calc === '') {
      return
    } 

    const value = calc.slice(0,-1)
    setCalc(value)
  }

  const deleteAll = () => {
    setCalc('')
    setResult('')
  }

  const numbers = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="App h-[100vh] flex justify-center items-center">
      <div className="rounded-2xl w-[500px] h-[600px] dark:bg-dark dark:text-light text-dark bg-cyan-100 overflow-hidden">
        <div className="w-full h-[15%]  flex justify-end text-2xl p-6">
          {result ? <span className="text-xl pt-2">({result})</span> : ''}
          <span className="ml-2 text-4xl">{calc && calc || 0}</span>
        </div>

        <div className="w-full h-[15%] bg-primary grid grid-cols-5 text-2xl ">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>Del</button>
        </div>

        <div className="w-full h-[55%] grid grid-cols-3 text-2xl ">
          {numbers.map((number,index) =>
            <button  
              key={index}
              onClick={() => updateCalc(`${number.toString()}`)} 
            >
              {number}
            </button>
          )}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={caculate}>=</button>
        </div>

        <div className="w-full h-[15%] grid grid-cols-2 text-2xl text-white bg-primary">
          <div className="flex justify-center items-center">
           {
            isDarkMode ?  
            <BsFillSunFill className="text-yellow-300 text-3xl cursor-pointer" onClick={() => toggleDarkMode(!isDarkMode)}/> : 
            <FaMoon className="text-yellow-300 text-3xl cursor-pointer" cursor-pointer onClick={() => toggleDarkMode(!isDarkMode)}/>
           }
          </div>
          <button onClick={deleteAll} className="text-3xl">X</button>
        </div>
      </div>
    </div>
  );
}

export default App;

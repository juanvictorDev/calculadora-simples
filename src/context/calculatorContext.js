import {createContext,useState} from "react";
import * as math from "mathjs";

export const Context = createContext();

export function ContextProvider({children}){
  
  const [ calc, setCalc ] = useState("");
  
  const arrOperadores =["+", "-", "*", "/", ".",]
  
  
  function handleCalc(e) {   
    setCalc(calc + e.target.value)
  }

  function handleOperators(e) {
    if (calc === "" || arrOperadores.includes(calc[calc.length - 1])){
      return;
    } else {
      setCalc(calc + e.target.value)
    }
  }

  function handleAllClear() {
    setCalc("")
  }

  function handleDelete() {
    setCalc(calc.slice(0, calc.length - 1));
  }

  function changeSign() {
    if(calc > 0){
      const negativo = -calc;
      setCalc(negativo.toString());
    }
  }

  function handleResult() {
    if (arrOperadores.includes(calc[calc.length - 1])){
      setCalc(calc)
    } else {
      setCalc(math.evaluate(calc).toString());
    }
  }
  
  return (
    <Context.Provider value = {{calc, handleCalc, handleAllClear,handleOperators, handleDelete, handleResult, changeSign}}>
      {children}
    </Context.Provider>
  )
}


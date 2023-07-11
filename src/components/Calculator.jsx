import { Box, Container } from '@mui/material'

import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {

const [number, setNumber] = useState(0);
const [operator, setOperator] = useState();
const [visor, setvisor] = useState(0)
const [oldnum, setOldNum] = useState();

function inputNum(e){
  var input = e.target.value;

  if(number === 0){
    setvisor( input);
    setNumber(input);
  }else{

    setNumber(number + input);
    setvisor(visor+input)
  }
}

//clear
function clearAll(){
  setNumber(0);
  setvisor(0);
}
//porcentage
function porcentage(){

  var input = number/100;
  setNumber(input);
  setvisor(input);
}

//toggleSinal(Trocar sinal)
function toggleSign(){
  if(number > 0){
    setNumber(-number);
    setvisor(-number);
  }else{
    setNumber(Math.abs(number));
    setvisor(Math.abs(number));
  }
}

//operatorHandler
function operatorHandler(e){
  var operatorInput = e.target.value;
  setOperator(operatorInput);
  setvisor(number + operatorInput);
  setOldNum(number);
  setNumber(0);
  
}

//calculate
function calculate(){
  if(operator === "/"){
    setvisor(oldnum/number);
  }
  else if(operator === "x"){
    setvisor(oldnum*number);
  }
  else if(operator === "-"){
    setvisor(oldnum-number);
  }
  else if(operator === "+"){
    setvisor(oldnum + number);
  }
  
}
  return (
    <Box m={20}>
         <Container maxWidth='xs' >

            <div className='wrapper'>
                <Box m={8}/>
                    <h1 className='result'>{visor}</h1>
                    
                    <button onClick={clearAll} className='white'>
                    AC
                    </button>

                    <button onClick={toggleSign} className='white'>
                    +/-
                    </button>

                    <button onClick={porcentage} className='white'>
                    %
                    </button>

                    <button onClick={operatorHandler}  value="/" className='orange'>
                    /
                    </button>

                    <button  className='grey' onClick={inputNum} value={7}> 
                    7
                    </button>
                    
                    <button  className='grey' onClick={inputNum} value={8}>
                    8
                    </button>

                    <button  className='grey' onClick={inputNum} value={9}>
                    9
                    </button>

                    <button onClick={operatorHandler}  value="x" className='orange' >
                    x
                    </button>

                    <button  className='grey' onClick={inputNum} value={4}>
                    4
                    </button>

                    <button  className='grey' onClick={inputNum} value={5}>
                    5
                    </button>

                    <button  className='grey' onClick={inputNum} value={6}>
                    6
                    </button>

                    <button onClick={operatorHandler}  value="-" className='orange' >
                    -
                    </button>

                    <button  className='grey' onClick={inputNum} value={1}>
                    1
                    </button>

                    <button  className='grey' onClick={inputNum} value={2}>
                    2
                    </button>

                    <button  className='grey' onClick={inputNum} value={3}>
                    3
                    </button>

                    <button onClick={operatorHandler}  value="+" className='orange' >
                    +
                    </button>

                    <button  className='grey' onClick={inputNum} value={0}>
                    0
                    </button>

                    <button  className='grey'>
                    ,
                    </button>

                    <button  className='black'>
                    .
                    </button>

                    <button onClick={calculate} className='orange'>
                    =
                    </button>
                  
            </div>
             
        </Container>     
   
    </Box>
       
    
    
  )
}

export default Calculator
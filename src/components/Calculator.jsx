import { Box, Container } from '@mui/material'

import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {

const number = useState(0);
  return (
    <Box m={20}>
      
           
         <Container maxWidth='xs' >

            <div className='wrapper'>

                <h1>{number}</h1>
                
                <button className='white'>
                AC
                </button>

                <button className='white'>
                +/-
                </button>

                <button  className='white'>
                %
                </button>

                <button className='orange'>
                /
                </button>

                <button  className='grey'>
                7
                </button>
                
                <button  className='grey'>
                8
                </button>

                <button  className='grey'>
                9
                </button>

                <button  className='orange'>
                x
                </button>

                <button  className='grey'>
                4
                </button>

                <button  className='grey'>
                5
                </button>

                <button  className='grey'>
                6
                </button>

                <button  className='orange'>
                -
                </button>

                <button  className='grey'>
                1
                </button>

                <button  className='grey'>
                2
                </button>

                <button  className='grey'>
                3
                </button>

                <button  className='orange'>
                +
                </button>

                <button  className='grey'>
                0
                </button>

                <button  className='grey'>
                ,
                </button >

                <button  className='black'>
                
                </button >

                <button  className='orange'>
                =
                </button>
            </div>
             
        </Container>
            
   
    </Box>
       
    
    
  )
}

export default Calculator
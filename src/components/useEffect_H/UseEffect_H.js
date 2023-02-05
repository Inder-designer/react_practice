import { Button } from '@mui/material'
import React from 'react'
import { useEffect, useState   } from 'react'


const UseEffect_H = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState()

    useEffect (() => {
        async function getData(){
            const get = await fetch(`https://api.apispreadsheets.com/data/IYpnrJf4SLCZZXkC`)

            const res = await get.json();
            setData(res)
            console.log(res);
        }
        getData();
    }, [state])

     

  return (
    <div>
        <h1>UseEffect Hook</h1>
        
        <Button onClick={() => setState(state + 2) } >Add {state}</Button>

    </div>
  )
}

export default UseEffect_H
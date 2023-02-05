import React, {useState} from 'react'

const UseStateHook = () => {
    const [greet, setGreet] = useState("Hello");
    function add(){
        setGreet("Bye")
    }
    function remove(n){
      setGreet(greet + n)
    }
  return (
    <div className='main'>
        <h2 className='heading'>{greet}</h2>
        <button onClick={add}>add</button>
        <button onClick={ () => remove(" Morning")}>remove</button>
    </div>
  )
}

export default UseStateHook
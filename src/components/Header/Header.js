import React from 'react'

const Header = ({name , age}) => {
    const titles=[
        {
            id :"0",
                tiitle : "inder"
        },
        {
            id : "1",
            tiitle : "inder1"
        }
    ]
  return (
    <div>
        <h1>{name} {age}</h1>
        <h2 >{titles[0].tiitle}</h2>
        <h2 >{titles[1].tiitle}</h2>
    </div>
  )
}

export default Header;
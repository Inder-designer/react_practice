import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


const UseEffect_H = () => {
  const [state, setState] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://api.apispreadsheets.com/data/EO5WZViDvfdMofeh`)

      const res = await get.json();
      setData(res.data)
      // console.log(res);
      // const dataa = res.data
      // dataa.map((e) => {
      //   return console.log(e.Name)
      // })
    }
    getData();
  }, [setData])
   
  // useEffect(() => {
  //   fetch(`https://api.apispreadsheets.com/data/EO5WZViDvfdMofeh`)
   
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setData([...data, { Name, Number }]);
  //   })
  // },)

  const [Name, setName] = useState("");
  const [Number, setEmail] = useState("");
  const addData = async() => {
  let abc =  await fetch("https://api.apispreadsheets.com/data/EO5WZViDvfdMofeh/", {
    method: "POST",
    body: JSON.stringify({"data": {"Name":Name,"Email":"","Number":Number,"Password":""}})
  });

    setData([...data, { Name, Number }])
    setName("")
    setEmail("")
};



  return (
    <div>
      <h1>UseEffect Hook</h1>
      <table border={1} style={{ margin: "30px auto" }} >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Password</th>
        </tr>

        {
          data.map((e, index) => {
            return (
                <tr key={index}>
                  <td>{e.Name}</td>
                  <td>{e.Email}</td>
                  <td>{e.Number}</td>
                  <td>{e.Password}</td>
                </tr>
            )
          })
        }
      </table>

      <div className='form_box'>
        <Stack spacing={2} direction="row">
          <TextField required id="outlined-basic" label="Name" variant="outlined" placeholder="Enter Your Name" onChange={(event) => setName(event.target.value)} value={Name} />
          <TextField required id="outlined-basic" label="Email" variant="outlined" placeholder="Enter Your Email" onChange={(event) => setEmail(event.target.value)} value={Number} />
          <Button variant="contained" color="success" onClick={addData} ><AddIcon /></Button>
        </Stack>
      </div>

      <Button onClick={() => setState(state + 2)} >Add {state}</Button>

    </div>
  )
}

export default UseEffect_H
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'
import './usestateP.css'
// import DataItem from './DataItem';

const Usestate_p = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, { name, email }])
        setName("")
        setEmail("")
    };
    const removeItems = (index) => {
        let removeData = data;
        removeData.splice(index, 1);
        setData([...removeData])
    };
    const removeAllItems = () => {
        setData([])
    }

    return (
        <div>
            <h1>UseState Project</h1>
            <div className='form_box'>
                <Stack spacing={2} direction="row">
                    <TextField required id="outlined-basic" label="Name" variant="outlined" placeholder="Enter Your Name" onChange={(event) => setName(event.target.value)} value={name} />
                    <TextField required id="outlined-basic" label="Email" variant="outlined" placeholder="Enter Your Email" onChange={(event) => setEmail(event.target.value)} value={email} />
                    <Button variant="contained" color="success" onClick={addData} ><AddIcon /></Button>
                </Stack>
            </div>
            <div className='data_box'>
                <div className="data_item">
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Remove</h3>
                </div>
                {
                    data.map((element, index) => {
                        return (
                            <div className="data_item" key={index}>
                                <h4>{element.name}</h4>
                                <h4>{element.email}</h4>
                                <Button variant="outlined" color="error" onClick={() => removeItems(index)} ><DeleteIcon /></Button>
                            </div>
                        )
                    })
                }
                <Button variant="outlined" color="error" onClick={() => removeAllItems()} style={{marginTop:"20px",textAlign:"center" }}>Remove All</Button>
            </div>
        </div>
    )
}

export default Usestate_p;
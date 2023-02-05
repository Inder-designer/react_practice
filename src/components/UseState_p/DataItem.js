import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const DataItem = ({ name, email, index }) => {
    return (
        <div className="data_item">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>
                <Button variant="outlined" color="error"><DeleteIcon/></Button>
            </h4>
        </div>
    )
}

export default DataItem
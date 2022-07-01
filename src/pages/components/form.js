
import React from "react";
import {Card , Form,Container} from "react-bootstrap"
import Box from "@mui/material/Box"
import { TextField } from "@mui/material";
import fire from "../../firebaseconfig";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';




function InsideForm({discription,title,setPassword, setEmail,handleAction,redirectBtn ,image}){

        return (
    
        <>
            <div>
                <div className="heading-container">
                    <h3>
                        {title} Form
                    </h3>
                </div>
            <Box
                component="form"
                sx={{  '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField id="email" label="Enter the Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="password" label="Enter the Password" variant="outlined"  onChange={(e) => setPassword(e.target.value)}/>
                    <input type="file" style={{outline:"none", border:"none",cursor:"pointer",color:"rgba(0,0,0,0)"}} />
            </Box>
            <Button Button variant="contained" href="#contained-buttons"  onClick={handleAction} >{title}</Button>
     <p>{discription}have an account then  don't you {title} <Button variant="outlined" href="#outlined-buttons" onClick={redirectBtn}>
  here
</Button></p>
            <ToastContainer />
            </div>
    </>
        )
    }
    export default InsideForm;
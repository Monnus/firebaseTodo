
import {Card , Form,Container} from "react-bootstrap"
import Box from "@mui/material/Box"
import { TextField } from "@mui/material";
import fire from "../../firebaseconfig";
import Button from '@mui/material/Button';



function InsideForm({title}){
console.log(title);
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
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="email" label="Enter the Email" variant="outlined" />
                <TextField id="password" label="Enter the Password" variant="outlined" />
        </Box>
        <Button Button variant="contained" href="#contained-buttons"  >{title}</Button>
        </div>
</>
    )
}

function CreateLayoutRegis({title}) {
    return(
 
            <InsideForm  title={title}/>


     
    )
}

export default CreateLayoutRegis;





{/* <Form>
<label>Name*</label>
<br></br>

<input type="text" name="fname" className="imputsSize" placeholder="Name" />
<br></br>
<br></br>
<label>Surname*</label>
<br></br>

<input type="text" name="Surname" className="imputsSize" placeholder="Surname" />
<br></br>
<br></br>
<label>Email*</label>
<br></br>

<input type="Email" name="Email" className="imputsSize" placeholder="....@outlook" />
<br></br>
<br></br>
<label>Password*</label>
<br></br>

<input type="Password" name="password" className="imputsSize" placeholder="Password" />
<br></br>
<br></br>
<label>IMAGE*</label>
<input type="file" name="file" className="File" style={{color:"rgba(0,0,0,0)"}} />
<br></br>
<br></br>
<input type="submit" />


</Form> */}

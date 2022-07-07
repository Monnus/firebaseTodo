
import { Link } from 'react-router-dom'
import {Button} from "@mui/material"
import { bgcolor, Box, margin } from '@mui/system'
import hcbgImage from "../images/R.jpg"


import React from 'react'

export default function LandingPage() {
  return (
    <div style={{width:"100%",maxHeight:"100%", position:"relative",backgroundColor:"#f5f5f5",}}>
        <div style={{margin:"100", position:"absolute", top:"100px",left:"300px",letterSpacing:"2px", lineHeight:"2"}}>

        <p>having siad that we would love it if you join us by <Link to="/register "><Button  variant="contained">registering</Button></Link>,Or please continue to <Link to="/login"><Button   variant="contained">sign In</Button></Link> </p>
        <Box sx={{
            width:1000,
            height:500,
            backgroundColor:"white",
            boxShadow:"4px 2px 2px gray",
            textDecoration:"none",
         padding:"2px",
            "&:hover":{
                backgroundImage: 'url('+hcbgImage+')',
                backgroundColor:"black",
                opacity:[0.9,0.8,0.7],
                color:"blue",
                boxShadow:"4px 4px 5px gray",
                height:1000,
                lineHeight:"4",
                transition:"ease-in 1s",

            },
            
        }}>

  <h1 style={{textAlign:"center"}}>Welcome to the todo app</h1>      
<p>

To do lists come in all shapes and sizes. It always used to be something that you would write using pen and paper,
 but thanks to technology there’s an app that can come to the rescue. What makes a good to do list app?
Tasks should be fast to add and organise
There should be a variety of ways to organise the tasks
<ul>

<li>Ability to plan your workflow</li>
<li>Setting priorities</li>
<li>Reminders for any self-imposed deadlines.</li>
<li>Allocation of tasks if using it for task management with a team. Team to-do list allows you to assign to the best person for the job.</li>
<li>Able to synch between different platform</li>
</ul>
All it takes is just a few minutes every day to keep a to do list up to date. 
With a to do list, you can complete goals without wasting time trying to figure out priorities.
Your productivity will increase, you won’t forget things, your time management will improve and you’ll 
 be able to manage your tasks more effectively.
</p>


        </Box>
            </div>
    </div>
  )
}

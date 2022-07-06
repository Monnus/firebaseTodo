import React from "react";
import "../styles/registrationPage.css"
import CreateLayoutRegis from "./components/layoutRegistration";

function RegistrationPage({title}){
    
    return (
        <div className="registration">
  
                <CreateLayoutRegis title={title}/>
         
        </div>
    )
}



export default RegistrationPage;
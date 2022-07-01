import React,{useState,useEffect} from "react"
import './App.css';
import InsideForm from './pages/components/form';
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import fire from "./firebaseconfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Home from "./pages/Home"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate= useNavigate();
useEffect(() => {
    let authToken = sessionStorage.getItem('Auth-Token')

    if (authToken) {
      // navigate('/home')
    }
  }, [])
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('')
const [image,setImage]=useState("")
const handleAction = (id) => {
    const authentication =getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth-Token', response._tokenResponse.refreshToken)
        }).catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
    sessionStorage.setItem("Auth-Token",response._tokenResponse.refreshToken);
    navigate("/home");
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email Already in Use');
      }
    })
    }
  }
  let route="/login"

const redirectBtn=(path)=>{
  if(path==="/login"){
    navigate(`/register`)
      }else if(path==="/register"){
        navigate(`/login`)
      }

}
const handleimages=(imageType)=>{
  switch(input.files[0].type){
    case "image/jpeg":
console.log("jpep image loaded");
   console.log(input.files[0].name);
   break
   case "image/png":
      console.log("png image loaded");
   console.log(input.files[0].name);
   break;
   default:
    user.allcheckspassed=false;
       return alert("Oops we dont support this file format");
}
  return (
    <div className="App">
 <>
  <Routes>
<Route path="/login" element={<InsideForm title="Login" discription="Already " setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} redirectBtn={(e)=>redirectBtn(window.location.pathname)}/>} />
<Route path="/register" element={<InsideForm title="Register" discription="Don't  " setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} redirectBtn={(e)=>redirectBtn(window.location.pathname)}/>}  /> 
<Route path='/home' element={ <Home />} />
  </Routes>
  </>
    </div>
  );
}
}
export default App

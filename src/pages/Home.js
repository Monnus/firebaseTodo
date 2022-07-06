import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TodoPage from "./components/todoApp"

export default function Home() {
    let navigate = useNavigate();


    const handleLogout = () => {
        sessionStorage.removeItem('Auth-Token');
        navigate('/login')
    } 

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth-Token')

        if (authToken) {
            navigate('/home')
        }
        if (!authToken) {
            navigate('/register')
        }
    }, [])


    return (
        <div>
         <TodoPage/>
            <Button onClick={(e)=> handleLogout()}>Logout</Button>
        </div>
    )
}
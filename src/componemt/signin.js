import React,{useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import signin from './signin.jpeg'
import { FaUserFriends,FaLock,FaFacebookSquare,FaTwitterSquare,FaGoogle,FaGooglePlusSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'
export default function Signin()
{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [loginstatus,setLoginstatus]=useState("");
    const login=()=>{
        axios.post("http://localhost:3004/getuser/${data}",{
            username:username,
            password:password,
        }).then((response)=>{
            console.log(response);
        });
    }




    // const [userdetails,setUserdetails]=useState([])
   
    // useEffect(()=>{
    //     fetch('http://localhost:3004/getuser')
    //     .then((response)=>response.json())
    //     .then((json)=>setUserdetails(json));
       
    // },[]);
  
    // const data1=(()=>
    // {
       
    //     let username=document.getElementById("username").value;
    //     let password=document.getElementById("password").value;
    //    userdetails.find((value,index)=>{
    //     if(value.username==username && value.password==password)
    //     {
    //         alert("success");
    //     }
    //    else if(value.username!=username || value.password!=password)
    //    {
    //     alert("fail");
           
    //    }
       
    //   })
            
    // })

    return(
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={signin} className="container" />
                        <h5 className='row-12 text-center '><Link to="/" className='text-center signup-link'>Create an account</Link></h5> 
                    </div>
                    <div className='col-lg-6'>
                        <form>
                            <h1 className='col-12'><b>Sign in</b></h1>
                            <div className='user-div mt-5'>
                                <FaUserFriends/>
                                <input type="text" name="username" id="username" className='signup-input col-10' placeholder="Username"
                                onChange={(e)=>{
                                    setUsername(e.target.value);
                                    }}/>
                            </div>
                            <div className=' user-div mt-5'>
                                <FaLock size="1rem"/>
                                <input type="password" name="password" id="password" className='signup-input col-10' placeholder="password"
                                 onChange={(e)=>{
                                    setPassword(e.target.value);
                                    }}/>
                            </div>
                            <div className='mt-4'>
                                <p><input type="checkbox" className='mr-4'/>Remember me</p>
                            </div>
                            <div className='mt-4'>
                                <input type="button" value="Login" className='btn w-25 btn-primary' onClick={login}/>
                            </div>
                            </form>
                            <div className='mt-5'>
                                <p className='row text-center'>
                                    <p className='col-lg-3'>  Or login with</p>
                                    <p className='col-lg-3 '>
                                        <FaFacebookSquare size="1.5rem" className=''/>
                                        <FaTwitterSquare size="1.5rem" className='ml-2 text-primary'/>
                                        <FaGooglePlusSquare size="1.5rem" className='ml-2 text-danger'/>
                                    </p>  
                              </p>
                            </div>
                       
                    </div>
                                    <h1>{loginstatus}</h1>
                </div>

            </div>
        </>
    );
}
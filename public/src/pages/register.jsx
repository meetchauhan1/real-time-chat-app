import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoustes";

function Register(){
  const navigate = useNavigate();
 const [values,setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const toastoptions ={
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(()=>{
    if(localStorage.getItem('chat-app-user')){
     navigate('/')
    }
 },[]);
 
  const handleSubmit = async(event)=>{
  event.preventDefault();
  if (handleValidation()){
    const {password, confirmpassword, username, email} = values;
    const {data} = await axios.post(registerRoute,{
        username,
        email,
        password,
      });
      if(data.status === false){
        toast.error(data.msg, toastoptions);
      }
      if(data.status === true){
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/") ;  
      }
      
    }
};

  const handleValidation = () => {
    const {password, confirmpassword, username, email} = values;
    if(password!==confirmpassword){
      toast.error(
        "password and confirm password should be same.",
        toastoptions
        );
        return false;
    }
    else if (username.length<3){
      toast.error("username should be greater than 3 characters ",toastoptions);
      return false;
    }
    else if (password.length<8){
      toast.error("password should be greater than 8 characters ",toastoptions);
      return false;
    }
    else if (email === ""){
      toast.error("please enter email",toastoptions);
      return false;
    }
    return true;
  };

  const handleChange =(event) => {
    setValues({ ...values, [event.target.name]: event.target.value}) //overwrite value of 
  };

return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>snappy</h1>
          </div>
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={(e) => handleChange(e)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            onChange={(e) => handleChange(e)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            onChange={(e) => handleChange(e)}
          />
          <input 
            type="password" 
            placeholder="Confirm password" 
            name="confirmpassword" 
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have a account? <Link to="/login">Login</Link>
          </span> 
      </form>
    </FormContainer>
    <ToastContainer />
   </>
   );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
  export default Register;
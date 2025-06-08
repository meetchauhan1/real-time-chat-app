import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Register from "./pages/register";
import Chat from "./pages/chat";
import Login from "./pages/login";
import SetAvatar from "./pages/SetAvatar";
export default function App(){
   return (<BrowserRouter>
   <Routes>
    <Route path="/register" element={<Register />}/>
    <Route path="/" element={<Chat />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/setAvatar" element={<SetAvatar />}/>
   </Routes>
   </BrowserRouter>
   );
 }
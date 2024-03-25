"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [data,setData]=useState([])
  const start={
    name:"",
    email:"",
    password:"",
    gender:"",
    number:0,
    course:"",
    degree:"",
    address:"",
    profilePicture:null,
    file:null
  }
  let [value,setValue]=useState(start)
  const onChangeHandler = (e) => {
    if (e.target.type === "file") {
      setValue((a) => ({
        ...a,
        [e.target.name]: e.target.files[0]
      }));
    } else {
      setValue((a) => ({
        ...a,
        [e.target.name]: e.target.value
      }));
    }
  };
  const clickHandler=(e)=>{
    e.preventDefault()
    setData((a)=>[...a,value])
    setValue(start)
  }
  return (
    <div>
  
    </div>
    
  );
}

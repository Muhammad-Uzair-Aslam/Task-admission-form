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
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl py-3 font-bold text-center">Admission Form</h1>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center">
          <label  className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="name">Full Name</label>
          <input name="name" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" id="name" type="text" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="email">Email</label>
          <input name="email" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="email" id="email" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="password">Password</label>
          <input name="password" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="password" id="password" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="gender">Gender</label>
          <div className="flex items-center space-x-4 w-full sm:w-60">
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-radio text-blue-600" type="radio" name="gender" value="Male" id="male" />
              <label htmlFor="male" className="ml-2">Male</label>
            </div>
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-radio text-blue-600" type="radio" name="gender" value="Female" id="female" />
              <label htmlFor="female" className="ml-2">Female</label>
            </div>
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-radio text-blue-600" type="radio" name="gender" value="Other" id="other" />
              <label htmlFor="other" className="ml-2">Other</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="number">Mobile Number</label>
          <input name="number" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="number" id="number" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="degree">Degree</label>
          <select name="degree" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" id="degree">
            <option value="">Select Degree</option>
            <option value="BSSE">BS Software Engineering</option>
            <option value="BSCS">BS Computer Science</option>
            <option value="BSBI">BS Bioinformatics</option>
            <option value="BS Botany">BS Botany</option>
            <option value="BS Math">BS Math</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="course">Courses</label>
          <div className="flex items-center space-x-4 w-full sm:w-60">
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-checkbox text-blue-600" type="checkbox" name="course" value="Web Development" id="webDev" />
              <label htmlFor="webDev" className="ml-2">Web Development</label>
            </div>
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-checkbox text-blue-600" type="checkbox" name="course" id="graphicDesign" value="Graphic Designing" />
              <label htmlFor="graphicDesign" className="ml-2">Graphic Designing</label>
            </div>
            <div className="flex items-center">
              <input onChange={onChangeHandler} className="form-checkbox text-blue-600" type="checkbox" name="course" id="ml" value="Machine Learning" />
              <label htmlFor="ml" className="ml-2">Machine Learning</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="address">Address</label>
          <input name="address" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="text" id="address" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="pic">Profile Picture</label>
          <input name="profilePicture" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="file" id="pic" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <label className="w-full sm:w-40 mb-2 sm:mb-0 text-left pr-4" htmlFor="cert">Add Intermediate Certificate</label>
          <input name="file" onChange={onChangeHandler} className="w-full sm:w-60 p-2 border border-gray-300 rounded" type="file" id="cert" />
        </div>
        <div className="text-center">
          <button onClick={clickHandler} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
        </div>
      </form>
      </div>
      <br/>
        <hr/>
    
    </div>
    
  );
}

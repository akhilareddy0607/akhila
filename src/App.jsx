import NavBar from './components/NavBar'
import Home from './components/Home'

import {Routes,Route} from 'react-router-dom'
import ResumeForm from './components/ResumeForm'
import { useState,useEffect } from 'react'
import Template1 from './components/template1'
import Template2 from './components/template2'
import PreviewPage from './components/PreviewPage'

function App(){

   useEffect(()=>{
     let mydata=localStorage.getItem("data")
    mydata && setResumeData(JSON.parse(mydata))
  },[])


  let [resumeData,setResumeData]=useState({
    personalDetails:{
      name:"",
      email:"",
      location:"",
      github:"",
      linkedin:"",
      website:"",
      mobile:"",
    },
    summary:"",
    experience:[
      {company:"",position:"",duration:"",description:""}
    ],
    education:[
      {schoolname:"",duration:"",grade:""}
    ],
    project:[
      {name:"",technologies:"",description:""}
    ],
    skills:""
  })
  return(
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/edit" element={<ResumeForm resumeData={resumeData} setResumeData={setResumeData}/>}></Route>
        <Route path="/preview" element={<PreviewPage/>}></Route>
        <Route path="/preview/1" element={<Template1 data={resumeData}/>}></Route>
        <Route path="/preview/2" element={<Template2 resumeData={resumeData}/>}></Route>
        
      </Routes>
      
    </div>
  )
}
export default App
import './ResumeForm.css'
function Resumeform({resumeData,setResumeData})
{
    console.log(resumeData)
    function addBlock(section,Feilds)
    {
        let data=resumeData[section];

        let updatedArray=[...data,Feilds];

        setResumeData({...resumeData,[section]:updatedArray})


    }

    function removeBlock(section,index)
    {
        let data=resumeData[section];
        let updatedArray=data.filter((item,i)=>i!=index)
        setResumeData({...resumeData,[section]:updatedArray})

    }

    function updateField(section,Field,value)
    {
        let data=resumeData[section];
        let updatedData={...data,[Field]:value};

        setResumeData({...resumeData,[section]:updatedData})
    }

    function updateArrayFeild(section,index,Feild,value)
    {
        let data=resumeData[section];
        let updatedData=data.map((item,i)=>i==index?{...item,[Feild]:value}:item);

        setResumeData({...resumeData,[section]:updatedData})
    }
    function saveData(){
      localStorage.setItem("data",JSON.stringify(resumeData))
    }
    return(
        <div className="form-container">
            <div className='section'>
                <h2 className="title">personal Details</h2>
                <div className="input-group">
                <input type="text" placeholder="name" value={resumeData["personalDetails"].name} onChange={(e)=>updateField("personalDetails","name",e.target.value)}/> 
                <input type="text" placeholder="email"  value={resumeData["personalDetails"].email} onChange={(e)=>updateField("personalDetails","email",e.target.value)}/>
                <input type="text" placeholder="linkedin"  value={resumeData["personalDetails"].linkedin} onChange={(e)=>updateField("personalDetails","linkedin",e.target.value)}/>
                <input type="text" placeholder="github"  value={resumeData["personalDetails"].github} onChange={(e)=>updateField("personalDetails","github",e.target.value)}/>
                <input type="text" placeholder="location"  value={resumeData["personalDetails"].location} onChange={(e)=>updateField("personalDetails","location",e.target.value)}/>
                <input type="text" placeholder="website"  value={resumeData["personalDetails"].website} onChange={(e)=>updateField("personalDetails","website",e.target.value)}/>
                <input type="text" placeholder="mobile"  value={resumeData["personalDetails"].mobile} onChange={(e)=>updateField("personalDetails","mobile",e.target.value)}/>
                </div>
                </div>
        
            <div className="section">
                <h2 className='title'>Professional Summary</h2>
                <textarea placeholder='Enter Your Summary' value={resumeData["skills"]} onChange={(e)=>setResumeData({...resumeData,["summary"]:e.target.value})}></textarea>
            </div>

            <div className="section">
                <div>
                <h2 className='title'>Experience</h2>
                <button onClick={()=>addBlock("experience",{company:"",position:"",duration:"",description:""})}>Add Experience</button>
                </div>
                
            </div>
              {
                    resumeData["experience"].map((exp,index)=>{
                        return(
                            <div>
                                <input type="text" placeholder="company" value={exp.company} onChange={(e)=>updateArrayFeild("experience",index,"company",e.target.value)}/>
                                <input type="text" placeholder="position" value={exp.position} onChange={(e)=>updateArrayFeild("experience",index,"position",e.target.value)}/>
                                <input type="text" placeholder="duration" value={exp.duration} onChange={(e)=>updateArrayFeild("experience",index,"duration",e.target.value)}/>
                                <input type="text" placeholder="description" value={exp.description}  onChange={(e)=>updateArrayFeild("experience",index,"description",e.target.value)}/>
                                <div>
                                    {resumeData['experience'].length>1 && <button onClick={()=>removeBlock("experience",index)}>Remove</button>}
                                    </div>
                            </div>
                        )
                    })
                }

                <div className="section">
                    <div>
                    <h2 className="title">Education</h2>
      <button onClick={()=>addBlock("education",{schoolname:"",duration:"",grade:""})}>Add Education</button>
                    </div>
                </div>
                {
                    resumeData["education"].map((exp,index)=>{
                        return(
                            <div>
                                <input type="text" placeholder="school" value={exp.school} onChange={(e)=>updateArrayFeild("education",index,"school",e.target.value)}/>
                                <input type="text" placeholder="duration" value={exp.duration} onChange={(e)=>updateArrayFeild("education",index,"duration",e.target.value)} />
                                <input type="text" placeholder="grade" value={exp.grade} onChange={(e)=>updateArrayFeild("education",index,"grade",e.target.value)} />
                                <div>
                                    {resumeData['education'].length>1 && <button onClick={()=>removeBlock("education",index)}>Remove</button>}
                                    </div>
                            </div>
                        )
                    })
                }
                
                <div className="section">
                    <div>
                    <h2 className="title">Projects</h2>
                    <button>Add Projects</button>
                    </div>
                </div>
                {
                    resumeData["project"].map((exp,index)=>{
                        return(
                            <div>
                                <input type="text" placeholder="name" value={exp.name} onChange={(e)=>updateArrayFeild("project",index,"name",e.target.value)}/>
                                <input type="text" placeholder="technologies" value={exp.technologies} onChange={(e)=>updateArrayFeild("project",index,"technologies",e.target.value)}/>
                                <textarea placeholder='Enter your description' value={exp.description} onChange={(e)=>updateArrayFeild("project",index,"description",e.target.value)}></textarea>
                            </div>
                        )
                    })
                }
            <div className="section">
                    <h2 className="title">Skills</h2>
                    <textarea placeholder='Enter your skills' value={resumeData["skills"]} onChange={(e)=>setResumeData({...resumeData,["skills"]:e.target.value})}></textarea>
                </div>    
<button onClick={()=>saveData()}>SaveData</button>
        </div>
    )
}

export default Resumeform
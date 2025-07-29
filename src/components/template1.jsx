import './template1.css'
import {useRef} from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

function Template1({data})
{
   const resumeRef = useRef();
        const downloadPDF = () => {
            const input = resumeRef.current;
            html2canvas(input, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("resume.pdf");
            });
        };
    return(
        <div>
            <button onClick={()=>downloadPDF()}>Download</button>
        <div className="resume-container" ref={resumeRef}>
            <div className="header">
                <h1 className='name'>{data["personalDetails"].name}</h1>
                <div className='contact'>
                    <span>{data["personalDetails"].email}</span>
                    <span>{data["personalDetails"].linkedin}</span>
                    <span>{data["personalDetails"].github}</span>
                    <span>{data["personalDetails"].location}</span>
                    <span>{data["personalDetails"].website}</span>
                    <span>{data["personalDetails"].mobile}</span>
                </div>
            </div>




            <div className='block'>
                <h2 className='section-title'>Professional summary</h2>
                <p>{data["summary"]}</p>
            </div>


            






            <div className='block'>
                <h2 className='section-title'>Experience</h2>
                <div>
                    {
                        data["experience"].map((item,index)=>{
                            return(
                                <div>
                                    <div className='position'>
                                        <span>{item.position}</span>
                                        <span>{item.duration}</span>
                                    </div>
                                    <p>{item.company}</p>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>




            <div className='block'>
                <h2 className='section-title'>Education</h2>
                <div>
                    {
                        data["education"].map((item,index)=>{
                            return(
                                <div>
                                    <div className='position'>
                                        <span>{item.school}</span>
                                        <span>{item.duration}</span>
                                    </div>
                                    <p>{item.grade}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>




        <div className='block'>
                <h2 className='section-title'>Projects</h2>
                <div>
                    {
                        data["project"].map((item,index)=>{
                            return(
                                <div>
                                    <div className='position'>
                                        <span>{item.name}</span>
                                    </div>
                                    <p>{item.technologies}</p>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

<div className='block'>
                <h2 className='section-title'>skills</h2>
                <p>{data["skills"]}</p>
            </div>




        </div>
        </div>
    )
}


export default Template1
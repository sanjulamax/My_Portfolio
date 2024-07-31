import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { myContext } from '../context/context';
import { useContext } from 'react';

import { faEnvelope, faPhone ,faAnglesDown , faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter  } from '@fortawesome/free-brands-svg-icons';

import Imgs from "../imgs/imges"



function Sec1() {

    const {

         aboutMe, 
        mySkills,
        myWorks,
        contact,
        arch,
    }=useContext(myContext)
    

    return (
        
        <div className=" bg-white h-max w-screen  border-2 text-[20px]">

            <div className="flex">
            
            
                    <div id={aboutMe} className="max-sm:w-[95%] shadow-xl shadow-gray-400 border-2 border-black inline-flex w-[50%] flex-col m-[2%] mt-[3%] p-[10px] ">
                            <h1  className="  font-bold text-[25px] flex items-center justify-center">Who Am I</h1><br></br>
                        <p  className="  max-sm:w-[100%]  text-[18px]  max-sm:text-wrap max-sm:whitespace-break-spaces">
                        🔥 Hi, I'm Savindu Abeywickrama, a 22-year-old undergraduate student at the Open University of Sri Lanka, specializing in Software Engineering.<br></br><br></br>🔥 My journey in technology began with a fascination for how software can transform ideas into reality.I am skilled in a variety of programming languages including Java, Python, and JavaScript. <br></br><br></br>🔥I also have experience with web development frameworks like React and Angular, and backend technologies such as Node.js and php . <br></br><br></br>🔥 My areas of interest include web development, artificial intelligence, and mobile application development. I am particularly enthusiastic about exploring how AI can be integrated into everyday applications to enhance user experience.
                        </p>

                    </div>

                        <img className=" max-sm:hidden h-[300px] relative left-[10%] top-20 " src={Imgs.iam}></img>
            </div>

            <div className=" flex">

                <div className=' flex-row'>
                
                            <img className="h-[300px] relative mb-[30%] left-[0%] top-0 max-sm:hidden " src={Imgs.skill1}></img>
                                <img className="h-[300px] ml-[10%] max-sm:hidden " src={Imgs.skill2}></img>
                    </div>
            
            
                    <div id={mySkills} className=" max-sm:w-screen shadow-xl shadow-gray-400 border-2 border-black inline-flex w-[70%] flex-col m-[2%] mt-[3%] p-[10px] ">
                            <h1 className=" font-bold text-[25px] flex items-center justify-center">MY SKILL SET</h1><br></br>
                        <p className="  text-[18px]">
                        

                        I am proficient in a diverse array of programming languages and frameworks, enabling me to develop robust and dynamic software solutions. My expertise includes:
                        <br></br>
                        <br></br>
                        <ul>

                            


                                        <li> <FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>Web Development :</span> Strong foundation in front-end and back-end development, creating responsive and user-friendly web applications.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>React, Vue.js :</span> Skilled in modern JavaScript frameworks for building high-performance, scalable web interfaces.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>HTML, CSS, Tailwind CSS : </span>Expertise in crafting well-structured, visually appealing websites with an emphasis on responsive design and modern styling techniques.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>JavaScript, Node.js :</span> Proficient in full-stack development using JavaScript, from interactive front-end experiences to efficient server-side processing.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>Java, Kotlin :</span> Developing versatile applications for AndroidOS with Android studio .  </li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>PHP, SQL :</span> Experienced in server-side scripting and database management, ensuring data handling and storage solutions.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>C Programming : </span>Solid understanding of low-level programming and system-level operations.</li><br></br>
                                        <li><FontAwesomeIcon className='mr-[10px]' icon={faCode} fade style={{color: "#008a60",}} /><span className=' font-bold text-red-800'>Firebase :</span> Proficient in using Firebase for real-time database management, authentication, and cloud functions.</li><br></br>
                            
                            </ul>

With this comprehensive skill set, I am equipped to tackle complex challenges and deliver innovative, high-quality software solutions.
                        </p>

                    </div>

                        
            </div>
            <div className=' max-sm:hidden border-2 border-black rounded-xl m-[2%] p-[2%] flex-col bg-black text-white justify-center items-center'>
                
                <div  className='flex  mb-[2%] '>

                <p className=' relative bottom-2 mr-[10px]'>Python </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-0'>
                    <div className=' bg-lime-500 w-[80%] h-[10px] rounded-3xl'></div>
                </div>
                 <p className='relative left-[9.2%] bottom-2'>Java</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[10.5%]'>
                    <div className=' bg-lime-500 w-[75%] h-[10px] rounded-3xl'></div>
                    </div>
                    <p className='relative left-[17%] bottom-2'>Kotlin</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[18%]'>
                    <div className=' bg-lime-500 w-[80%] h-[10px] rounded-3xl'></div>
                    </div>
                </div>

                   <div className='flex mb-[2%]'>

                <p  className=' relative bottom-2 mr-[10px]'>React</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl'>
                    <div className=' bg-orange-500 w-[78%] h-[10px] rounded-3xl'></div>
                </div>
                 <p  className='relative left-[9.5%] bottom-2'>Vuejs </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[10.5%]'>
                    <div className=' bg-orange-500 w-[85%] h-[10px] rounded-3xl'></div>
                    </div>
                    <p className='relative left-[14%] bottom-2'>TailwindCSS </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[15%]'>
                    <div className=' bg-orange-500 w-[90%] h-[10px] rounded-3xl'></div>
                    </div>
                </div>
                 <div className='flex mb-[2%]'>

               <p  className=' relative bottom-2 mr-[10px]'> PHP</p> 
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl'>
                    <div className=' bg-fuchsia-700 w-[70%] h-[10px] rounded-3xl'></div>
                </div>
                 <p className='relative left-[9%] bottom-2'>Nodejs </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[10%]'>
                    <div className=' bg-fuchsia-700 w-[68%] h-[10px] rounded-3xl'></div>
                    </div>

                   <p className='relative left-[16%] bottom-2'> FireBase </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[17%]'>
                    <div className=' bg-fuchsia-700 w-[45%] h-[10px] rounded-3xl'></div>
                    </div>

                </div>
                 <div className='flex mb-[2%]'>

               <p  className=' relative bottom-2 mr-[10px]'> HTML</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl'>
                    <div className=' bg-blue-800 w-[98%] h-[10px] rounded-3xl'></div>
                </div>
                 <p className='relative left-[10%] bottom-2'>CSS </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[11%]'>
                    <div className=' bg-blue-800  w-[98%] h-[10px] rounded-3xl'></div>
                    </div>
                    <p className='relative left-[16%] bottom-2'>JavaScript </p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[17%]'>
                    <div className=' bg-blue-800  w-[85%] h-[10px] rounded-3xl'></div>
                    </div>
                </div>

                 <div className='flex mb-[2%]'>

                <p  className=' relative bottom-2 mr-[10px]'>MongoDB</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl'>
                    <div className=' bg-rose-600 w-[80%] h-[10px] rounded-3xl'></div>
                </div>
               <p className='relative left-[7.5%] bottom-2'> SQL</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[8.5%]'>
                    <div className=' bg-rose-600 w-[85%] h-[10px] rounded-3xl'></div>
                    </div>
                    <p className='relative left-[18%] bottom-2'>C</p>
                <div className='h-[10px] w-[300px] bg-slate-100 rounded-3xl relative left-[19%]'>
                    <div className=' bg-rose-600 w-[86%] h-[10px] rounded-3xl'></div>
                    </div>
                </div>
               
            </div>

               <div className=" max-sm:block flex">
            
            
                    <div id={arch} className=" max-sm:w-[95%] shadow-xl shadow-gray-400 border-2 border-black inline-flex w-[55%] flex-col m-[2%] mt-[3%] p-[10px] ">
                            <h1 className=" font-bold text-[25px] flex items-center justify-center">MY ARCHIEVMENTS</h1><br></br>
                        <p className="  text-[18px]">

I have successfully enhanced my skills and knowledge through various certifications, showcasing my commitment to continuous learning and professional growth:
                        <br></br><br></br>
 <div className='flex '> <div className='ml-[10%]'>                     
<ul><li className=' font-bold'>University of Moratuwa</li></ul>
  <li>Python for Beginners <a href='https://drive.google.com/file/d/1N8kskGG12rC_w7sxTVzB5VdYieXQbwJ-/view?usp=drive_link' className='ml-[12%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a>  </li>
  <li> Web Design for Beginners <a href='https://drive.google.com/file/d/1kPQk19Bg8WuD-kMt5PE-6W8h8SNhE71K/view?usp=drive_link' className='ml-[0%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
  <li> Front-End Web Design<a href='https://drive.google.com/file/d/1Ho1nEjN0ZhzWa9GGAjSS81XfkrCxzO14/view?usp=drive_link' className='ml-[9%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
   <li> Front-End Web Design<a href='https://drive.google.com/file/d/1Ho1nEjN0ZhzWa9GGAjSS81XfkrCxzO14/view?usp=drive_link' className='ml-[9%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
   <li> Server-Side Web Programing <a href='https://drive.google.com/file/d/1v2LFyfp-4VIpR2Sh8WNdD3B_YxmZFmGF/view?usp=sharing' className='ml-[9%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
<br></br><br></br>
<ul><li className=' font-bold'>SoloLearn</li></ul> 
                            <li>Python <a href='https://drive.google.com/file/d/1kIXaHslCm1cEcyIfD1X0VnvptBcSPh8V/view?usp=drive_link' className='ml-[18%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
                            <li> Java <a href='https://drive.google.com/file/d/1xuYD-NY4hmukUFfS077Q7DTtkXnWNl28/view?usp=drive_link' className='ml-[26%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
                            <li> JavaScript<a href='https://drive.google.com/file/d/1ikwZIr8Z2xbm8j0C5nr2JcaT3hxNK0NE/view?usp=drive_link' className='ml-[12%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
   
  <li> SQL<a href='https://drive.google.com/file/d/11BYAeP4fL8wMp66DZOCeerXSIGsgMCJ0/view?usp=drive_link' className='ml-[28%] pl-[5px] pr-[5px]   text-green-600 font-mono font-bold rounded-md'>view</a></li>
 
  <li> HTMLS<a href='https://drive.google.com/file/d/19oCEPB009KuKcEd-t4xm9tcUBWV2XYiS/view?usp=drive_link' className='ml-[20%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li>
  

  
  <li> C Language <a href='https://drive.google.com/file/d/17NGN873bzdHVRTvgHMxhhZbniH9474qx/view?usp=drive_link' className='ml-[5%] pl-[5px] pr-[5px]  text-green-600 font-mono font-bold rounded-md'>view</a></li><br></br><br></br> 
 
  </div> <img src={Imgs.skill} className='max-sm:hidden h-[300px] relative top-20'></img></div>
 
These certifications highlight my proficiency in both foundational and advanced concepts across multiple programming languages and web development technologies.
                    </p>
                    
                   <div className='flex items-center justify-center'><a href='https://drive.google.com/file/d/1tsa5Zb1snXpOlI_jJDShOgQ8CVlpLj9m/view?usp=sharing'> <button className=' bg-blue-700 border-2 border-blue-700 rounded-lg text-white p-[10px] mt-[20px]'>VIEW MY CV</button></a></div>

                    </div>

             
            
            
                    <div id={myWorks} className=" max-sm:w-[95%] shadow-xl shadow-gray-400 border-2 border-black inline-flex w-[50%] flex-col m-[2%] mt-[3%] p-[10px] ">
                            <h1 className=" font-bold text-[25px] flex items-center justify-center">FEATURED PROJECTS</h1><br></br>
                        <p className="  text-[18px]">
                         

                        I have developed a variety of projects that demonstrate my ability to create innovative and functional software solutions: <br></br><br></br>
                        

                        <ul>

<li><span className=' font-bold'>Alina AI Chat Bot :</span> An intelligent chat bot built with React, designed to enhance user interaction through natural language processing.</li><br></br>
<li><span className=' font-bold' >Calculator Web Applicatio :</span>  A user-friendly calculator app providing basic arithmetic functions, showcasing my skills in web development.</li><br></br>
<li><span className=' font-bold'>Weather Forecasting Web Applicatio :</span>  A dynamic app that provides real-time weather updates, utilizing API integration for accurate forecasts.</li><br></br>
<li><span className=' font-bold'>To-Do List Web Applicatio :</span>  An efficient task management tool that helps users organize and prioritize their daily activities.</li><br></br>
<li><span className=' font-bold'>Website Login System :</span> Developed a secure and reliable login system using Firebase, ensuring user authentication and data protection.</li><br></br>
</ul>

All of the projects mentioned above can touch throgh my github page . <br></br><br></br>
In addition to these, I have worked on a commercial software project:<br></br><br></br>

 <span className=' font-bold'>Korean Quiz Desktop Application </span> Created a desktop application using Vue.js and Electron, designed to help users learn Korean through interactive quizzes.<br></br><br></br>

<span className=' font-bold'>I have also developed several websites</span> as part of my university mini projects, further honing my web development skills and gaining practical experience in real-world applications.
                        </p>

                    </div>

                        
            </div>

            <div className=" max-sm:block flex">
            
            
                    <div id={contact} className="max-sm:w-[95%] shadow-xl shadow-gray-400 border-2 border-black inline-flex w-[50%] flex-col m-[2%] mt-[3%] p-[10px] ">
                    <h1 className=" font-bold text-[25px] flex items-center justify-center">SAY HELLO</h1><br></br>
                    
                    <div className=' max-sm:block flex items-center justify-between'><div><a href='https://github.com/sanjulamax'><div className=' flex'><img className='h-[30px] mr-[10px]' src={Imgs.git} ></img><p>ON GITHUB </p></div></a><br></br>
                    <a href='https://www.linkedin.com/in/savindu-abeywickrama-58a828311/'><div className=' flex'><img className='h-[30px] mr-[10px]' src={Imgs.linked} ></img><p> ON LINKEDIN </p></div></a><br></br>
                       <div className=' flex'> <img className='h-[30px] mr-[10px]' src={Imgs.gmail}></img><p>ON EMAIL :-  sanjulasavindu@gmail.com  </p></div></div><br></br>
                        <div><a href='https://www.facebook.com/savindu.sanjula.56/'><div className=' flex'><img className='h-[30px] mr-[10px]' src={Imgs.fb} ></img><p>ON FACEBOOK </p></div></a><br></br>
                           <div className=' flex'> <img className='h-[35px]  mr-[10px]' src={Imgs.whats}></img><p>ON WHATSAPP :- 0777611408 </p></div><br></br>
                  
                      <div className=' flex'> <img className='h-[30px] mr-[10px]' src={Imgs.phone}></img><p>ON MOBILE :- 0777611408 </p></div></div></div> <br></br>

                       

                    </div>

                        <img className=" max-sm:hidden h-[300px] relative left-[10%] top-3 " src={Imgs.skill4}></img>
            </div>
            

            
            </div>
    )
}

export default Sec1













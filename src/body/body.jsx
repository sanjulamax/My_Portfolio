
import Imgs from "../imgs/imges"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faPhone ,faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";
import { myContext } from "../context/context";




function Body() {

       const {

         aboutMe, 
        mySkills,
        myWorks,
        contact,
        arch,
    } = useContext(myContext)

     const Myscroll = (elementId) => {

        const secId = document.getElementById(elementId)
        
        secId.scrollIntoView({ behavior: "smooth" })
        
        console.log(secId)
    }

    

    

    return (

        <>
            
            <div className=" max-h-8 absolute max-sm:block  text-white flex mt-[3%] p-[5%] w-screen h-full ">

                <img className=" max-sm:w-[130px] max-sm:h-[130px] max-sm:left-[2%] max-sm:bottom-[-50px] relative left-[-3%] bottom-10 mr-[5%] border-2 rounded-full w-[300px] h-[300px] shadow-custom-glow  " src={Imgs.profilePic}></img>
               
                <FontAwesomeIcon onClick={()=>Myscroll(aboutMe)} className=" max-sm:top-[630px] max-sm:left-[40%] h-[40px] absolute left-[11%] top-96" icon={faAnglesDown} bounce size="2xl" />
                
               <h1 className=" max-sm:text-[25px]  max-sm:top-[-70px] max-sm:left-[41%]  border-red-400  mr-[5%] text-[60px] whitespace-break-spaces text-wrap relative left-[0%] bottom-14 p-[10px] font-semibold text"> HI , 
                    I AM SAVINDU ABEYWICKRAMA </h1>
                
                <div className=" max-sm:text-[15px] max-sm: max-sm:w-screen max-sm:right-[150%] max-sm:top-[50px] max-sm:ml-[-4%] max-sm:pl-[3px] max border-l-2 h-min   border-red-400  whitespace-break-spaces text-wrap relative bottom-14 left-[0%] pl-[30px] font-normal text-[25px]"><ol>
                    <li> I'm a 22-year-old undergraduate student at the Open University of Sri Lanka, specializing in Software Engineering. I am passionate about creating innovative software solutions and continuously enhancing my skills through self-study and practical experience.My journey in software development is driven by curiosity and a desire to solve real-world problems.    </li></ol></div>
               


            </div>

            <p className=" max-sm:text-[15px] max-sm:w-max max-sm:relative max-sm:bottom-[-550px] max-sm:left-[10%]  absolute left-[33%] text-[20px] bottom-36 text-white border-2 border-lime-600 inline-flex p-[5px]"> WEB DEVELOPER AND SOFTWARE ENGINEER</p>
             
            
            
        
        </>
    )
}

export default Body
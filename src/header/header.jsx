import { useContext } from "react"
import Imgs from "../imgs/imges"
import { myContext } from "../context/context"
import { useState } from "react"


function Header() {

    const[sidebar , setSideBar] = useState(false)

    const {

         aboutMe, 
        mySkills,
        myWorks,
        contact,
        arch, 
        git10,
    } = useContext(myContext)
    
    const Myscroll = (elementId) => {

        const secId = document.getElementById(elementId)
        
        secId.scrollIntoView({ behavior: "smooth" })
        
        console.log(secId)
    }

    const sidebarShow = ()=> {

        setSideBar(!sidebar)

    }

    return (
        <div> <div className="flex border-2 border-white max-sm:max-w-max  rounded-xl m-5" onClick={sidebarShow}>

                <div className="  font-medium text-white  relative left-[48%] w-[50%] max-sm:w-full p-[10px] m-[10px] flex items-center justify-between  rounded-lg">

                    <a className=" max-sm:hidden    hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(aboutMe)}>About Me</a>
                <a className="  max-sm:hidden hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={() => Myscroll(mySkills)}>Skill Set</a>
                <a className=" max-sm: hidden  hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(arch)}>Archievments</a>
                    <a className=" max-sm:hidden hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(myWorks)}>Project Gallery</a>
                <a className=" max-sm:hidden hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={() => Myscroll(contact)}>Say Hello</a>
                
                  

                    </div>
                    {sidebar ? (<img className='hidden max-sm:block h-[45px]'  src={Imgs.sideIcon1} ></img>):          <img className='hidden max-sm:block h-[45px]'  src={Imgs.sideIcon} ></img>}
         
          
                   
                    
                    <div className=" max-sm:hidden max-sm:relative max-sm:left-[-50%] font-medium text-white  relative left-[-50%] w-[40%] p-[10px] m-[10px] flex items-center justify-between  rounded-lg">
                    <a className=" border-2 rounded-full border-white hover:bg-white p-[5px]  " href="https://www.linkedin.com/in/savindu-abeywickrama-58a828311/"><img className="h-[35px]" src={Imgs.linked}></img></a>
                    <a className=" hover:bg-white p-[5px]  border-2 rounded-full border-white " href="https://github.com/sanjulamax"><img className="h-[35px]" src={Imgs.git10}></img></a>
                    <a className=" hover:bg-white p-[5px]  border-2 rounded-full border-white " href="https://www.youtube.com/@slnoobhacker4903"><img className="h-[35px]" src={Imgs.yt}></img></a>
                    <a className=" hover:bg-white p-[5px]  border-2 rounded-full border-white " href="https://www.facebook.com/savindu.sanjula.56/"><img className="h-[35px]" src={Imgs.fb}></img></a>

                </div>
     
        </div>
      

    {sidebar ? (
  <div className="block border-2 border-white w-max p-1 relative left-[45%] mt-[-10%]">
  <a className="block text-white    hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(aboutMe)}>About Me</a>
  <a className=" block text-white  hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={() => Myscroll(mySkills)}>Skill Set</a>
  <a className=" block text-white   hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(arch)}>Archievments</a>
  <a className=" block text-white  hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={()=>Myscroll(myWorks)}>Project Gallery</a>
  <a className=" block text-white  hover:bg-green-500 p-[5px] rounded-lg hover:border-2 border-green-600" onClick={() => Myscroll(contact)}>Say Hello</a>
</div>
         ):null }  
    </div>
    )
}

export default Header
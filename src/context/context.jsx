import { createContext } from "react";

export const myContext = createContext()


const Myprovider = (props) => {

    const aboutMe = "aboutme"
    const mySkills = "myskills"
    const myWorks = "myworks"
    const contact = "contact"
      const arch = "arch"

    const contextVals = {
        
        aboutMe, 
        mySkills,
        myWorks,
        contact,
        arch,

    }

    return (

        <myContext.Provider value={contextVals}>
            {props.children}
        </myContext.Provider>
    )
}


export default Myprovider
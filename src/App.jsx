import Body from "./body/body"
import Header from "./header/header"
import Sec1 from "./sec1/sec1"

function App() {
 

  return (
    <div  >
      
      
      <div className="  scrollbar-hide"><Header></Header></div>
       <div className="  scrollbar-hide"> <Body></Body></div>
       <div className=" absolute flex top-full scrollbar-hide"><Sec1></Sec1></div>


      
    </div>
  )
}

export default App

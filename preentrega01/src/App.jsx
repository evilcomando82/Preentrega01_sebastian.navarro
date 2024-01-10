import Carrousel from "./components/Navbar/Carrousel";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";



function App() {
 
  let mensaje = "Página en construcción";

  return (
    <>
  
  <Navbar/>
  <Carrousel/>
  <ItemListContainer props={mensaje}/>
    
      
      
     

    </>
  )
}

export default App

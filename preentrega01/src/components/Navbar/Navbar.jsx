 
import logo from "../../assets/img/logo.png";
import CartWidget from "./CartWidget";
 
const Navbar = () =>{

return(
<>

 
 
    <nav className="navbar navbar-expand-lg bg-primary navbar-secondary sticky-top p-0">
        <a href="#" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h3 className="m-0"><img src={logo} alt="logo" width={40}/> Librería Colores</h3>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="#" className="nav-item nav-link">Inicio</a>
                <a href="#" className="nav-item nav-link">Nosotros</a>
               
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Libreria</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="#" className="dropdown-item">Arte</a>
                        <a href="#" className="dropdown-item">Cuadernos</a>
                        <a href="#" className="dropdown-item">Escolar</a>
                        <a href="#" className="dropdown-item">Regalos</a>
                       
                    </div>
                </div>
                <a href="#" className="nav-item nav-link ">Contacto</a>
            </div>
             
            <CartWidget/>
            
        
        </div>

        

    </nav>
   

</>



)


}
export default Navbar;
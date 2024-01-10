const ItemListContainer = ({props}) => {

let descripcion = "Lo sentimos, pronto estaremos disponibles, gracias por su comprensión";

return(

<>

 
    <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-2 alert alert-danger">{props}</h1>
                    <h1 className="mb-4"> 😜</h1>
                    <p className="mb-4">{descripcion}</p>
                    <a className="btn btn-primary py-3 px-5" href="#">Inicio</a>
                </div>
            </div>
        </div>
    </div>
   

</>


)



}

export default ItemListContainer;
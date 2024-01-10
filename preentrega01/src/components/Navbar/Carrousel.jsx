const Carrousel = ()=>{


return(
<>


 
    <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="src/assets/img/carousel-1.jpg" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="display-1 text-light mb-5 animated slideInDown">OFICINA</h1>
                                    <h3 class="display-8 alert alert-success mb-5 animated slideInDown">Descubrelos todos!!!</h3>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-5">Leer más</a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="src/assets/img/carousel-2.jpg" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="display-1 text-light mb-5 animated slideInDown ">ARTE</h1>
                                    <h3 class="display-8 alert alert-danger mb-5 animated slideInDown">Inspirate con nuestro productos!!!</h3>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-5">Leer más</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    

</>


)


}

export default Carrousel
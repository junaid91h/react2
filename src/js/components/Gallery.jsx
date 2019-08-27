import React from "react";
const Gallery =(props)=>{
    let res =props.data[0].mp.map((item,index)=>{
        return(
            <div key= {index} >
                <div className="row">
               <div className="col-sm-4" >
                        <img src={item.img1} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img2} id="gimg"alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img3} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img4} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img5} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img6} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img7} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img8} id="gimg" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={item.img9} id="gimg" alt=""/>
                    </div>
                    </div>
            </div>
        )
    });
    return(
        <div>
            <div className="section container pt-5">
                <h1  className="text-center text-primary">Our Gallery</h1>
                <br/>
                <div className="row">
                    {res}
                </div>
                
               
            </div>

            <div className="section container-fluid pt-5" id="stdimg">
                <h1 className="text-center text-white pt-5">{props.data[0].ga1} </h1>




                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            
          <div className="section container pt-5">
                <div className="section container ">

                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo  eiusmod. sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi</p>
                </div>
                <div className="container pt-5 rounded-circle" >
                    <img className="rounded-circle" src={props.data[0].imhq} alt=""/>
                    <br/>
                    <h4 className="text-center text-white pt-4 pb-5">{props.data[0].imhp}</h4>

                </div>
                </div>

          </div>
          <div className="carousel-item">
           
          <div className="section container pt-5">
                <div className="section container ">

                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo  eiusmod. sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi</p>
                </div>
                <div className="container pt-5 rounded-circle" >
                <img className="rounded-circle" src={props.data[0].imhq} alt=""/>
                    <br/>
                    <h4 className="text-center text-white pt-4 pb-5">{props.data[0].imhp}</h4>

                </div>
                </div>

          </div>
          <div className="carousel-item">
           
          <div className="section container pt-5">
                <div className="section container ">

                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo  eiusmod. sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi</p>
                </div>
                <div className="container pt-5 rounded-circle" >
                <img className="rounded-circle" src={props.data[0].imhq} alt=""/>
                    <br/>
                    <h4 className="text-center text-white pt-4 pb-5">{props.data[0].imhp}</h4>

                </div>
                </div>

          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>


            </div>

            <div className="container-fluid pt-5 text-center">
                <h1 className="text-primary pt-5">{props.data[0].app1}</h1>
                <p className="text-muted">{props.data[0].app2}</p>
                <div className="container">
                <div className="container pt-5">
                    
                    <button className="btn pt-2 pb-2 pl-3 pr-3  mr-3 shadow"><i class="fab fa-apple" id="ggg"></i>  App Store</button>
                    <button className="btn pt-2 pb-2 pl-3 pr-3 shadow text-white" id="bagw"><i class="fab fa-windows"></i>  Windows Store</button>
                    <button className="btn pt-2 pb-2 pl-3 pr-3 ml-4 shadow"><i class="fab fa-android" id="ggg"></i>  Android</button>
                    </div>

                </div>
<br/><br/>
            </div>
        </div>
    )

}
export default Gallery

import React from "react";
const About =(props)=>{
  let res =props.data[0].abp.map((item,index)=>{
    return(
        <div key= {index} >
           <h3 className="pt-3">{item.par} </h3>
            <p className="">{item.par2} </p>
            <br/>
            <br/>
            <button className="btn text-white pl-4 pr-4 pt-2 pb-2 mb-5" id="sppi2">{item.btg} </button>
        </div>
    )
});
    return(
        <div className="mt-5 pt-5 ">
           <h1 className="text-primary text-center"> {props.data[0].abo_tit} </h1>

           <div className="section container pt-5">
           <div className="row">
               <div className="col-sm">
                   <img className="img-fluid" src={props.data[0].abo_img}  alt=""/>
               </div>
               <div className="col-sm">
                   <h3>{props.data[0].ab1}</h3>
                   <br/>
                   <p>{props.data[0].ab2}</p>
                   <br/>
                   <hr />
                   <p>{props.data[0].ab3}</p>
               </div>

           </div>
           </div>

           <div className="mt-5 pt-5" id="bgeimg">
           <h1 className="text-white text-center">What We Do?</h1>
           <br/><br/>
           <br/><br/>
           <div className="container">
           <div className="row text-center">
          <div className="col-sm-4 pb-5" >
              <div className="bg-white">
              <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"><i class="fa fa-book-open"></i></div>
            </div>
            <br/>
            {res}
            
          </div>
          </div>
          <div className="col-sm-4 ">
          <div className="bg-white">
          <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"> <i class="fa fa-graduation-cap"></i></div>
            </div>
            <br/>
            {res}
          </div>
          </div>
          <div className="col-sm-4  ">
          <div className="bg-white">
          <div  className="d-flex justify-content-center">
            <div id="round" className="d-flex justify-content-center align-items-center"> <i class="fa fa-users"></i></div>
            </div>
            <br/>
            {res}
          </div>
          </div>
           </div>
           </div>
           </div>
           </div>
    )
}
export default About
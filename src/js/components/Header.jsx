import React from "react";

const Header =(props)=>{
  
    return(

      <div className="section container-fluid pb-5" id="backimg">
        <div className="pt-5">
        <h1 className="text-center display-4 font-weight-bold text-white"> Welcome to <span id="sppi">My School </span>  <br/> Best for Education</h1>

        <br/>
        <h5 className="text-white">{props.data[0].hed1} </h5>
        <div className="container">
        <div className="container">
        <div className="container">

        <form >
          <br/>
          <div className="row " id=" no-pad">
          <div className="col-sm ">
          <input type="text" className="pl-5 pt-2 pb-2 w-75" placeholder="Fist Name" />
          <br/>
          <br/>
          <input type="text" className="pl-5 pt-2 pb-2 w-75" placeholder="Mobile Namber" />
          </div>
          <div className="col-sm ">

          <div className="row">
          <div className="col-sm align-self-end">
          <input type="text" className="pl-5 pt-2 pb-2 w-75" placeholder="Last Name" />
          <br/>
          <br/>
          <input type="text" className="pl-5 pt-2 pb-2 w-75" placeholder="your message" />
          </div>
          </div>
          </div>
          </div>
          
        </form>
        </div>
        </div>
        </div>
        </div>
        <div className="pt-5">
          <button className="btn  pl-5 pr-5 pt-3 pb-3 text-white" id="sppi2"> {props.data[0].bt} </button>
        </div>
        </div>
        
     
    )

}
export default Header

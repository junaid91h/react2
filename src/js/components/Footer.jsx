import React from "react";
const Footer =(props)=>{
    return(
        <div className="pt-5 pb-4 bg-dark text-white d-flex justify-content-around justify-content-center align-items-center ">
            <h6>{props.data[0].foo} </h6>
            <div className="d-flex ">
               
                    <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-facebook-f"></i>
                </div>
                <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-google-plus-g"></i>
                </div> <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-twitter"></i>
                </div> <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-dribbble"></i>
                </div>
              
                </div>
            </div>
       
        
    )
}
export default Footer
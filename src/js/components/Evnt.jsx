import React from "react";
const Evnt =(props)=>{
    let res =props.data[0].evncolm.map((item,index)=>{
        return(
            <div key= {index} >
              <div id="coooi">
                        <h4 className="ml-3  pt-3 text-center text-primary"> {item.colh} </h4>
                        <br/><br/>
                            <p className="ml-3 text-left"> {item.colp}</p>
                            <br/><br/>
                            <button className="btn text-white pl-4 pr-4 pt-2 pb-2 mb-5 ml-5" id="sppi2"> {item.colb}</button>

                            <br/><br/>
                            <div className=" ml-4 d-flex justify-content-between">
                            <p>{item.colp2}</p>
                            <p className="mr-5">{item.colp3}</p>
                            </div>
                        </div>
            </div>
        )
    });
    return(
        <div>
            <br/><br/><br/>
            <div className="section container pt-5">
                <h1 className="text-center text-primary"> {props.data[0].evn_tit} </h1>
                <br/><br/>
                <div className="row">
                    <div className="col-sm">
                            <h4 className="ml-3 "> {props.data[0].evn_h}</h4>
                            <br/>
                            <hr/>
                            <br/>
                            <p className="ml-3 "> {props.data[0].evn_P}</p>
                    </div>
                    <div className="col-sm">
                        {res}
                    </div>
                    <div className="col-sm">
                        {res}
                    </div>
                </div>
            </div>
            <br/>
            
            

        </div>
    )
}
export default Evnt
import React from "react";
const Courses =(props)=>{
    return(
        <div>
            <br/><br/><br/>
            <div className="section container pt-5">
                <h1 className="text-center text-primary">{props.data[0].cou_tit} </h1>
                <br/><br/>
                <div className="row">
                    <div className="col-sm">
                        <div id="coimg">
                            <h4 className="ml-3 text-white">{props.data[0].c1} </h4>
                            <p className="ml-3 text-white">{props.data[0].c2}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg2">
                        <h4 className="ml-3 text-white">{props.data[0].c3}</h4>
                            <p className="ml-3 text-white">{props.data[0].c4}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg3">
                        <h4 className="ml-3 text-white">{props.data[0].c5}</h4>
                            <p className="ml-3 text-white">{props.data[0].c6}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg4">
                        <h4 className="ml-3 text-white">{props.data[0].c7}</h4>
                            <p className="ml-3 text-white">{props.data[0].c8} </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            

        </div>
    )
}
export default Courses
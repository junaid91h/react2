import React from "react";

const Nav = (props) =>{
    let res =props.data[0].nav_link.map((item,index)=>{
        return(
            <div key= {index} >
                <li className="nav-item active">
              <a className="nav-link" href="#"> {item.link} <span className="sr-only">(current)</span></a>
            </li>
            </div>
        )
    });
    return(
        <div className="mnav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand text-primary display-1 ml-5 font-weight-bold" href="#" id="loag"> {props.data[0].logo_text} </h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mar " id="navbarNav">
          <ul className="navbar-nav ulh ">
              {res}
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Nav;
import React, { Component } from "react";
// import data from "./data";
// import axios from 'axios';
import Nav from "./Nav";
import data from "./data";
import Header from "./Header";
import About from "./About";
import Courses from "./Courses"
import Evnt from "./Evnt"
import Gallery from "./Gallery"
import Footer from "./Footer"






class App extends Component {

  state = {
   
    data:data,
    
  };
 
  render() {
    return (
      <div>
        <Nav data={this.state.data[0].nav} />
        <Header data={this.state.data[0] .header} />
        <About data={this.state.data[0].about} />
        <Courses data={this.state.data[0].Courses} />
        <Evnt data={this.state.data[0].evnt} />
        <Gallery data={this.state.data[0].gallery}/>
        <Footer data={this.state.data[0].footer}/>



      </div>
    );
  }
}
export default App;

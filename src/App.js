import React from "react";
import Intro from "./component/Intro";
import "./App.css"
import Quiz from "./component/quiz/quiz";
import Name from "./component/name";
import Cursor from "./component/cursor";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      taketest :true,
      intro: false
     
      
    }
    this.handleclick=this.handleclick.bind(this);
    this.endClick=this.endClick.bind(this);

  }
  handleclick(){
    this.setState({
 taketest:false,

    });
  }
  endClick(){
    this.setState({
      intro: !this.state.intro
    })
  }
  submitclick =() =>{
   this.setState({
     intro: !this.state.intro
   })
  }
 
   
  
 
  render(){
    return (
      
      <div>
        <Cursor/>
      {
        this.state.intro ?
      
      <div className="app">
        
        {
          this.state.taketest ?
        
       ( <div className="intro">
          <Intro clickevent={this.handleclick}/>
        
        </div>) :
        (
          <div className="quiz">
        <Quiz  end={this.endClick}/>
        
          </div>


  
        )
        } 
      </div>:
      <Name  enter={this.submitclick} />
  }
      </div>
  
   

       
    )
  }
}

export default App;
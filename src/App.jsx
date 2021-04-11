import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Errorpage from './Errorpage';
import Navbar from './Navbar'
import './App.css';

function App(props) {

    const Home = ()=>{
        return(
            <h1> I am Home Page </h1>
        )
    }

    const Name = ()=>{
        return(
            <h1> I am contact Name Page </h1>
        )
    }

    return (
        <>
        <Navbar />
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route
              exact path="/about" 
              component={
                  ()=><About name="About" />
                  }/>
            <Route  exact path="/service" render={()=> <Services name='service'/>}/>
            <Route  exact path="/contact" component={Contact}/>
            <Route  exact path="/contact/name" component={Name}/>
            <Route  component={Errorpage} />

          </Switch>
        </>
    );
}

export default App;
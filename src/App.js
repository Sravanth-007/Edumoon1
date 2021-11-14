import React , {Component} from 'react' ;
import Navbar from './components/navbar';
import  Header from './components/header';
import  Homeslider from './components/homeslider';
import Patners from './components/patners';
import  Latestevents from './components/latestevents';
import  Popularcourses from './components/popularcourses';
import  Testimonial from './components/testimonial';
import  Grid from './components/grid';
import  Footer from './components/footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import './components/about.css';
 import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import uuid from 'uuid';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/home';
import Ca from './components/ca';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Events from './components/events';
import Server from './components/server';
import Courses from './components/courses';
import Resources from './components/resources';
import About from './components/about';
import Tutions from './components/tutions';
import Materials from './components/materials';
import Video from './components/video';



class App extends Component{

    render(){


        return(
        <div style={{overflowX:"hidden"}}>
        <Navbar />
        <Header />
       <switch>
           <Router>
           <Route exact path="/home" component={Home} />
           <Route exact path="/courses" component={Courses} />
           <Route exact path="/resources" component={Resources} />
           <Route exact path="/blog" component={Blog} />
           <Route exact path="/about" component={About} />
           <Route exact path="/events" component={Events} />
           <Route exact path="/tutions" component={Tutions} />
           <Route exact path="/gallery" component={Gallery} />
           <Route exact path="/materials" component={Materials} />
           <Route exact path="/ca" component={Ca} />
           <Route exact path="/video" component={Video} />

           </Router>
        
       </switch>
       <Footer />
           
             </div>
       
               
        );
    }

}


export default App;
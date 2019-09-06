import React from 'react';
import { BrowserRouter , Route, Link , Switch} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
  import KONG from './Kong.jpg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    function home(){
      return(
        <>
        <h1>Home</h1>     
        <div className>
          <h3>hello</h3>
           </div>
        </>
      )
    }
  
    function add(){
      return(
        <>
        <h1>Add</h1>
        <BrowserRouter>
        <Link to="/out">go to out </Link>
        </BrowserRouter>
        </>
      )
    }
    
    function out(){
      return(
        <>
        <h1>out</h1>
        <BrowserRouter>
        <Link to="/add">go to add </Link>
        </BrowserRouter>
        </>
      )
    }
   
    return (
      <center>
      <div>
        <BrowserRouter>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><Link to="/"> Home</Link> 
</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/add/">Add</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/out/">Out</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
       
        
  <Switch>
        <Route path="/" exact component={home} />
          <Route path="/add/" component={add} />
          <Route path="/out/" component={out} />
          </Switch>
  
 </BrowserRouter>
      </div></center>
    );
  }
}


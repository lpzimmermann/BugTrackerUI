import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import logo from '../../logo.svg';

class NavigationBar extends React.Component<() => {}, () => {}> {

    render(){
        return( <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <img src={logo} className="NavBar-Logo" alt="logo"/> Bug Tracker
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/bugs">
                    Bug Übersicht
                </NavItem>
                <NavItem eventKey={2} href="/createBug">
                    Bug erstellen
                </NavItem>
            </Nav>
        </Navbar>);
    }

}
export default NavigationBar;
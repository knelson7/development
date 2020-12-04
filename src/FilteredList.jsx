import { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DisplayList from './DisplayList'




class FilteredList extends Component {
  constructor(props) {
		super(props);
		this.state = {
            profession: 'All',
            gender: 'All',
            rating: 'All',
            totalVotes: 0
        };    
  }


//   onSelectFilterSize
    onSelectFilterSize = event => {
        this.setState({
            profession: event,
        })
    };

    onSelectFilterGender = event => {
        this.setState({
            gender: event,
        })
    };


    onSeletSort = event => {
        this.setState({
            rating: event,
        })
    };
      
//   handleClick6 = () => {
//     this.setState({
//       totalVotes: this.state.totalVotes + 1,
// 		});
//   }




//   matchesFilterSize
    matchesFilterSize = item => {
        // all items should be shown when no filter is selected
        var professionMatch = new Boolean(false);
        var genderMatch = new Boolean(false);

        if (this.state.profession === "All") { 
            professionMatch = true
        } else if (this.state.profession === item.profession) {
            professionMatch = true
        } else {
            professionMatch = false
        }

        if(this.state.gender === "All") { 
            genderMatch = true
        } else if (this.state.gender === item.gender) {
            genderMatch = true
        } else {
            genderMatch = false
        }

        if (genderMatch === true && professionMatch === true) {
            return true
        }
        else {
            return false
        }
    }




    render() {
        return (
            <div class="container">
            <h1 class='title'>Vote for your favorite Celebrity!</h1>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Profession</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Musician" onSelect={this.onSelectFilterSize}>Musician</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Influencer" onSelect={this.onSelectFilterSize}>Influencer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Actor" onSelect={this.onSelectFilterSize}>Actor</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Gender</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterGender}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Male" onSelect={this.onSelectFilterGender}>Male</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Female" onSelect={this.onSelectFilterGender}>Female</Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link eventKey="test" onSelect={this.handleClick6}>test</Nav.Link></Nav.Item> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Sort</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectSort}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Highest Rating" onSelect={this.onSelectSort}>Highest Rating to Lowest</Nav.Link></Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <h4>Total Votes: {this.state.totalVotes}</h4>
            
            <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>

            <DisplayList list={this.props.list.sort()}/>

        </div>)
    }

}

export default FilteredList
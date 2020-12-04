import { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DisplayList from './DisplayList'
import DisplayDash from "./DisplayDash";



// this class handles the logic for filtering my list based on 2 filters (gender and profession) and sorting the list 
//from highest rating to lowest rating

class FilteredList extends Component {
  constructor(props) {
		super(props);
		this.state = {
            profession: 'All',
            gender: 'All',
            rating: 'All',
            totalVotes: 0,
        };    
  }


//  handles the click for the filter that filters celebrities based on profession
    onSelectFilterProfession = event => {
        this.setState({
            profession: event,
        })
    };

//handles the click for filter taht filters celebrities based on gender
    onSelectFilterGender = event => {
        this.setState({
            gender: event,
        })
    };

//handles the click for sorting the celebrities based on their rating
    onSelectSort = event => {
        this.setState({
            rating: event,
        })
    };


//   Handles the logic for deteriming if the item in the list matches the selected filters and sort 
    matchesFilters = item => {
        //boolean to keep track of if item matches the profession that is selected
        var professionMatch = new Boolean(false);
        //boolean to keep track of if the item matches the gender that is selected
        var genderMatch = new Boolean(false);

        // if the selected sorting option is rate from highest to lowest
        if (this.state.rating === "Highest") {
            //make a copy the current list so you can revert back when necessary
            this.state.oldList = this.props.list.slice();
            //sort the list based on rating
            this.props.list.sort((a, b) => b.rating - a.rating);
        }

        // else {
        //     this.props.list.sort((a, b) => b.count - a.count);
        // }
    
        //handles logic to check if item matches selected profession and updates the boolean as necessary
        if (this.state.profession === "All") { 
            professionMatch = true
        } else if (this.state.profession === item.profession) {
            professionMatch = true
        } else {
            professionMatch = false
        }

         //handles logic to check if item matches selected gender and updates the boolean as necessary
        if(this.state.gender === "All") { 
            genderMatch = true
        } else if (this.state.gender === item.gender) {
            genderMatch = true
        } else {
            genderMatch = false
        }

        //returns true if item matches both filters; otherwise, returns false
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

            {/* renders the first navbar that will serve as the Profession filter */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Profession</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterProfession}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Musician" onSelect={this.onSelectFilterProfession}>Musician</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Influencer" onSelect={this.onSelectFilterProfession}>Influencer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Actor" onSelect={this.onSelectFilterProfession}>Actor</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            {/* renders the first navbar that will serve as the Gender filter */}
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



            {/* renders the first navbar that will serve as the sorting option */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Sort</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectSort}>All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Highest" onSelect={this.onSelectSort}>Highest Rating to Lowest</Nav.Link></Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <DisplayDash list={this.props.list}/>
            <DisplayList list={this.props.list.filter(this.matchesFilters)}/>
        </div>)
    }

}

export default FilteredList
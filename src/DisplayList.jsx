import { Component } from "react";
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import logo from './darren.jpg';


// this class displays each list item with all of its attributes and information (name, gender, rating, picture, and button that a user can use
// to vote for each individual celebrity)

class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalVotes: 0

        }; 
    }


    
    handleClick = item => {
        this.state.totalVotes = this.state.totalVotes + 1
        // this.setState({
        //   totalVotes: this.state.totalVotes + 1,
        // //   itemCount: item.count

        // });
      }



//renders the important information for each celebrity. Also renders a vote button and an image. 
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '60px', flexWrap: "wrap", alignItems: 'flex-start'}}>
                {this.props.list.map(item => 
                    <div class='card'>
                        <div class='celeb'>
                            <ul class="nonbullet">
                                <li>Name: {item.name}</li>
                                <li>Profession: {item.profession}</li>
                                <li>Gender: {item.gender}</li>
                                <li>Rating: {item.rating}</li>
                            </ul>
                        </div>
                        <div className="logo">
                            <img src={logo} width="150" height="200"/>
                         </div>
                        <div>
                            <AwesomeButton onPress={this.handleClick(item)} type="primary" ripple>Vote</AwesomeButton>
                        </div>
                    </div>)}
            </div>
        )
    }     
}
    



export default DisplayList
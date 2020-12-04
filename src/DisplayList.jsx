import { Component } from "react";
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import moment from 'moment';

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = item => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          count: item.count + 1,
            });
      }


    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '60px', flexWrap: "wrap", alignItems: 'flex-start'}}>
                {this.props.list.map(item => 
                    <div class='card'>
                        <p>{item.name}</p>
                        <p>{item.profession}</p>
                        <p>{item.gender}</p>
                        <p>{item.rating}</p>
                        <AwesomeButton onPress={this.handleClick} type="primary" ripple>Vote</AwesomeButton>
                    </div>)}
            </div>
        )
    }     
}
    



export default DisplayList
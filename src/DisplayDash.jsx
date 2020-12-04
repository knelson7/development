import { Component } from "react";
import './App.css';
import { AwesomeButton } from "react-awesome-button";


// This class renders my aggregator, which adds up the votes from each respective celebrity and displays that as the total votes value
// The aggregator also lists each celebrities individual vote

class DisplayDash extends Component {
    constructor(props) {
        super(props);
		this.state = {
            totalVotes: 0,
            BenCount: 0,
            QuinnCount: 0, 
            DemiCount: 0,
            TaylorCount: 0,
            DavidCount: 0,
            ChrissyCount: 0,
            KylieCount: 0,
            LoganCount: 0,
            JenniferCount: 0,
            ChrisCount: 0,
            RobertCount: 0,
            MerylCount: 0,
           
		};
    }

    //handle methods handle updating the state for the count for the specific celebrity as well as the total votes cast.
    handleClick1 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          BenCount: this.state.BenCount + 1,
      
            });
      }
    
      handleClick2 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          QuinnCount: this.state.QuinnCount + 1, 
     
            });
      }
    
      handleClick3 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          DemiCount: this.state.DemiCount + 1,
       
            });
      }
    
      handleClick4 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          TaylorCount: this.state.TaylorCount + 1,
       
            });
      }
    
      
      handleClick5 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          DavidCount: this.state.DavidCount + 1,
      
            });
      }
    
    
      
      handleClick6 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          ChrissyCount: this.state.ChrissyCount + 1,
         
            });
      }
    
    
      
      handleClick7 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          KylieCount: this.state.KylieCount + 1,
        
            });
      }
    
      
      handleClick8 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          LoganCount: this.state.LoganCount + 1,
      
            });
      }
    
    
      handleClick9 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          JenniferCount: this.state.JenniferCount + 1,
           
            });
      }
    
      handleClick10 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          ChrisCount: this.state.ChrisCount + 1,
      
            });
      }
    
    
      handleClick11 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          RobertCount: this.state.RobertCount + 1,
     
            });
      }
    
    
      handleClick12 = () => {
        this.setState({
          totalVotes: this.state.totalVotes + 1,
          MerylCount: this.state.MerylCount + 1,
      
            });
      }
    


      //handleDelete methods handle updating the vote for the specific celebrity as well as the total votes cast
      handleDelete1 = () => {
        this.setState({

          totalVotes: this.state.totalVotes - 1,
          BenCount: this.state.BenCount - 1,
      
            });
      }
    
      handleDelete2 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          QuinnCount: this.state.QuinnCount - 1, 
     
            });
      }
    
      handleDelete3 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          DemiCount: this.state.DemiCount - 1,
       
            });
      }
    
      handleDelete4 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          TaylorCount: this.state.TaylorCount - 1,
       
            });
      }
    
      
      handleDelete5 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          DavidCount: this.state.DavidCount - 1,
      
            });
      }
    
    
      
      handleDelete6 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          ChrissyCount: this.state.ChrissyCount - 1,
         
            });
      }
    
    
      
      handleDelete7 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          KylieCount: this.state.KylieCount - 1,
    
            });
      }
    
      
      handleDelete8 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          LoganCount: this.state.LoganCount - 1,
      
            });
      }
    
    
      handleDelete9 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          JenniferCount: this.state.JenniferCount - 1,
           
            });
      }
    
      handleDelete10  = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          ChrisCount: this.state.ChrisCount - 1,
      
            });
      }
    
    
      handleDelete11 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          RobertCount: this.state.RobertCount - 1,
     
            });
      }
    
    
      handleDelete12 = () => {
        this.setState({
          totalVotes: this.state.totalVotes - 1,
          MerylCount: this.state.MerylCount - 1,
      
            });
      }

      //handles resetting all votes 
      handleReset = () => {
        this.setState({
            totalVotes: 0,
            BenCount: 0,
            QuinnCount: 0, 
            DemiCount: 0,
            TaylorCount: 0,
            DavidCount: 0,
            ChrissyCount: 0,
            KylieCount: 0,
            LoganCount: 0,
            JenniferCount: 0,
            ChrisCount: 0,
            RobertCount: 0,
            MerylCount: 0,
        
              });
      }

      // returns code that renders the dashboard UI

      render() {
        return (
        <div> 
             <h4 class='header'>Total Votes: {this.state.totalVotes}</h4>
              <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '20px'}}>
                <div class="chunk">
                  <p>Votes for Ben Platt: {this.state.BenCount}</p>
                  <AwesomeButton onPress={this.handleClick1} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete1} type="secondary" ripple>Delete</AwesomeButton>
                </div>
                
    
                <div class="chunk">
                  <p>Votes for Quinn XCII: {this.state.QuinnCount}</p>
                  <AwesomeButton onPress={this.handleClick2} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete2} type="secondary" ripple>Delete</AwesomeButton>
                  
                </div>
    
    
                
                <div class="chunk">
                  <p>Votes for Demi Lovato: {this.state.DemiCount}</p>
                <AwesomeButton onPress={this.handleClick3} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete3} type="secondary" ripple>Delete</AwesomeButton>
                </div>
    
    
                
                <div class="chunk">
                  <p>Votes for Taylor Swift: {this.state.TaylorCount}</p>
                  <AwesomeButton onPress={this.handleClick4} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete4} type="secondary" ripple>Delete</AwesomeButton>
                </div>
              </div>
    
              <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '20px'}}>
    
                <div class="chunk">
                  <p>Votes for David Dobrik: {this.state.DavidCount}</p>
                  <AwesomeButton onPress={this.handleClick5} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete5} type="secondary" ripple>Delete</AwesomeButton>
    
                </div>
    
    
                <div class="chunk">
                <p>Votes for Chrissy Tiegen: {this.state.ChrissyCount}</p>
                <AwesomeButton onPress={this.handleClick6} type="secondary" ripple>Vote</AwesomeButton>
                <AwesomeButton onPress={this.handleDelete6} type="secondary" ripple>Delete</AwesomeButton>
                </div>
    
    
                <div class="chunk">
                  <p>Votes for Kylie Jenner: {this.state.KylieCount}</p>
                  <AwesomeButton onPress={this.handleClick7} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete7} type="secondary" ripple>Delete</AwesomeButton>
                </div>
    
    
                <div class="chunk">
                  <p>Votes for Logan Paul: {this.state.LoganCount}</p>
                  <AwesomeButton onPress={this.handleClick8} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete8} type="secondary" ripple>Delete</AwesomeButton>
                </div>
              
              </div>
    
    
              
              <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '20px'}}>
    
    
                <div class="chunk">
                  <p>Votes for Jennifer Aniston: {this.state.JenniferCount}</p>
                  <AwesomeButton onPress={this.handleClick9} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete9} type="secondary" ripple>Delete</AwesomeButton>
                </div>
    
    
                
                <div class="chunk">
                  <p>Votes for Chris Evans: {this.state.ChrisCount}</p>
                <AwesomeButton onPress={this.handleClick10} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete10} type="secondary" ripple>Delete</AwesomeButton>
    
                </div>
    
    
                            
                <div class="chunk">
                  <p>Votes for Robert Pattinson: {this.state.RobertCount}</p>
                  <AwesomeButton onPress={this.handleClick11} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete11} type="secondary" ripple>Delete</AwesomeButton>
    
                </div>
    
    
                            
                <div class="chunk">
                  <p>Votes for Meryl Streep: {this.state.MerylCount}</p>
                  <AwesomeButton onPress={this.handleClick12} type="secondary" ripple>Vote</AwesomeButton>
                  <AwesomeButton onPress={this.handleDelete12} type="secondary" ripple>Delete</AwesomeButton>
    
                </div>
              </div>
              <div>
                <AwesomeButton onPress={this.handleReset} type="facebook" ripple>Reset all Votes</AwesomeButton>
                </div>
     
        </div>)
      }



}
export default DisplayDash
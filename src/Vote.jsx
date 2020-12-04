import { Component } from "react";
import moment from 'moment';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Vote extends Component {
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
            updated: moment()
		};
	}

  handleClick1 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      BenCount: this.state.BenCount + 1,
      updated: moment()
		});
  }

  handleClick2 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      QuinnCount: this.state.QuinnCount + 1, 
      updated: moment()
		});
  }

  handleClick3 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      DemiCount: this.state.DemiCount + 1,
      updated: moment()
		});
  }

  handleClick4 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      TaylorCount: this.state.TaylorCount + 1,
      updated: moment()
		});
  }

  
  handleClick5 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      DavidCount: this.state.DavidCount + 1,
      updated: moment()
		});
  }


  
  handleClick6 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      ChrissyCount: this.state.ChrissyCount + 1,
      updated: moment()
		});
  }


  
  handleClick7 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      KylieCount: this.state.KylieCount + 1,
      updated: moment()
		});
  }

  
  handleClick8 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      LoganCount: this.state.LoganCount + 1,
      updated: moment()
		});
  }


  handleClick9 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      JenniferCount: this.state.JenniferCount + 1,
      updated: moment()
		});
  }

  handleClick10 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      ChrisCount: this.state.ChrisCount + 1,
      updated: moment()
		});
  }


  handleClic11 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      RobertCount: this.state.RobertCount + 1,
      updated: moment()
		});
  }


  handleClick12 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      MerylCount: this.state.MerylCount + 1,
      updated: moment()
		});
  }

  render() {
    return (
    <div>
          <h1>Vote for your favorite Celebrity!</h1>
          <br></br>
          <h2>Results:</h2>
          <p>Total Votes: {this.state.totalVotes}</p>


          <div style={{display: 'flex', justifyContent: 'space-evenly', paddingBottom: '60px'}}>
            <div class="chunk">
              <p>Votes for Ben Platt: {this.state.BenCount}</p>
              <AwesomeButton onPress={this.handleClick1} type="primary" ripple>Ben Platt</AwesomeButton>
            </div>
            

            <div class="chunk">
              <p>Votes for Quinn XCII: {this.state.QuinnCount}</p>
              <AwesomeButton onPress={this.handleClick2} type="primary" ripple>Quinn XCII</AwesomeButton>
            </div>


            
            <div class="chunk">
              <p>Votes for Demi Lovato: {this.state.DemiCount}</p>
              <AwesomeButton onPress={this.handleClick3} type="primary" ripple>Demi Lovato</AwesomeButton>
            </div>


            
            <div class="chunk">
              <p>Votes for Taylor Swift: {this.state.TaylorCount}</p>
              <AwesomeButton onPress={this.handleClick4} type="primary" ripple>Taylor Swift</AwesomeButton>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-evenly', paddingBottom: '60px'}}>



            <div class="chunk">
              <p>Votes for David Dobrik: {this.state.DavidCount}</p>
              <AwesomeButton onPress={this.handleClick5} type="primary" ripple>David Dobrik</AwesomeButton>

            </div>


            <div class="chunk">
            <p>Votes for Chrissy Tiegen: {this.state.ChrissyCount}</p>
            <AwesomeButton onPress={this.handleClick6} type="primary" ripple>Chrissy Tiegen</AwesomeButton>
            </div>


            <div class="chunk">
              <p>Votes for Kylie Jenner: {this.state.KylieCount}</p>
              <AwesomeButton onPress={this.handleClick7} type="primary" ripple>Kylie Jenner</AwesomeButton>
            </div>


            <div class="chunk">
              <p>Votes for Logan Paul: {this.state.LoganCount}</p>
              <AwesomeButton onPress={this.handleClick8} type="primary" ripple>Logan Paul</AwesomeButton>
            </div>
          
          </div>


          
          <div style={{display: 'flex', justifyContent: 'space-evenly', paddingBottom: '60px'}}>


            <div class="chunk">
              <p>Votes for Jennifer Aniston: {this.state.JenniferCount}</p>
              <AwesomeButton onPress={this.handleClick9} type="primary" ripple>Jennifer Anniston</AwesomeButton>
            </div>


            
            <div class="chunk">
              <p>Votes for Chris Evans: {this.state.ChrisCount}</p>
              <AwesomeButton onPress={this.handleClick10} type="primary" ripple>Chris Evans</AwesomeButton>

            </div>


                        
            <div class="chunk">
              <p>Votes for Robert Pattinson: {this.state.RobertCount}</p>
              <AwesomeButton onPress={this.handleClic11} type="primary" ripple>Robert Pattinson</AwesomeButton>

            </div>


                        
            <div class="chunk">
              <p>Votes for Meryl Streep: {this.state.MerylCount}</p>
              <AwesomeButton onPress={this.handleClick12} type="primary" ripple>Meryl Streep</AwesomeButton>

            </div>

          </div>

          <br></br>
          <br></br>
          <p>Most recent vote submitted on {this.state.updated.toString()}</p>
    </div>)
  }
}

export default Vote
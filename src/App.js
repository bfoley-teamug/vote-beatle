import React, { Component } from 'react';
import { voteJohn, votePaul, voteGeorge, voteRingo } from './actions';
import './App.css';

//https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteJohn = () => {
    this.store.dispatch(voteJohn());
  }

  handleVotePaul = () => {
    this.store.dispatch(votePaul());
  }

  handleVoteGeorge = () => {
    this.store.dispatch(voteGeorge());
  }

  handleVoteRingo = () => {
    this.store.dispatch(voteRingo());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="https://68.media.tumblr.com/95313bca74191d8b4b980d5ad3121eda/tumblr_opsmmpF2RJ1vd2c8xo1_250.jpg"
          alt="The Beatles!"></img>
          <h2>Vote for your favorite Beatle!</h2>
          <h4>Click to select your favorite</h4>  <br />
              <div className="row">
                <div className="col-xs-offset-4 col-md-3">
                  <img src="https://78.media.tumblr.com/b5b66803efe71d6609013b60eb92cfce/tumblr_p4v1zboNT91vd2c8xo1_100.jpg"
                    alt="John" onClick={this.handleVoteJohn}></img>
                </div>

                <div className="col-md-3">
                  <img src="https://78.media.tumblr.com/2a9e55c312ff24edb58a7d0849a14cdd/tumblr_p4v1zboNT91vd2c8xo2_100.jpg"
                    alt="Paul" onClick={this.handleVotePaul}></img>
                </div>

                <div className="col-md-3">
                  <img src="https://78.media.tumblr.com/55a9f60472e859070461ae635b668812/tumblr_p4v1zboNT91vd2c8xo3_100.jpg"
                    alt="George" onClick={this.handleVoteGeorge}></img>
                </div>

                <div className="col-md-3">
                  <img src="https://78.media.tumblr.com/feec6b91fc1b8107d6db1bd6d98311df/tumblr_p4v1zboNT91vd2c8xo4_100.jpg"
                    alt="Ringo" onClick={this.handleVoteRingo}></img>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default App;

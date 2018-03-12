import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  voteJohnTotal(){
    return (this.store.getState().john)
  }

  votePaulTotal(){
    return (this.store.getState().paul)
  }

  voteGeorgeTotal(){
    return (this.store.getState().george)
  }

  voteRingoTotal(){
    return (this.store.getState().ringo)
  }

  voteJohnInPercent(){
    if(this.store.getState().john){
      return (this.store.getState().john / (this.store.getState().john + this.store.getState().paul + this.store.getState().george + this.store.getState().ringo)) * 100
    } else {
      return 0;
    }
  }

  votePaulInPercent(){
    if(this.store.getState().paul){
      return (this.store.getState().paul / (this.store.getState().john + this.store.getState().paul + this.store.getState().george + this.store.getState().ringo)) * 100
    } else {
      return 0;
    }
  }

  voteGeorgeInPercent(){
    if(this.store.getState().george){
      return (this.store.getState().george / (this.store.getState().john + this.store.getState().paul + this.store.getState().george + this.store.getState().ringo)) * 100
    } else {
      return 0;
    }
  }

  voteRingoInPercent(){
    if(this.store.getState().ringo){
      return (this.store.getState().ringo / (this.store.getState().john + this.store.getState().paul + this.store.getState().george + this.store.getState().ringo)) * 100
    } else {
      return 0;
    }
  }

  votesJohnInPercentStyle(){
    return{
      width: this.voteJohnInPercent()+'%'
    }
  }

  votesPaulInPercentStyle(){
    return{
      width: this.votePaulInPercent()+'%'
    }
  }

  votesGeorgeInPercentStyle(){
    return{
      width: this.voteGeorgeInPercent()+'%'
    }
  }

  votesRingoInPercentStyle(){
    return{
      width: this.voteRingoInPercent()+'%'
    }
  }

  render() {
    return(
      <div>
        <span className="label votes">John: {this.voteJohnTotal()+' votes'}</span> <span>{ this.voteJohnInPercent().toFixed(1)+'%'}</span>
        <div className="progress active">
          <div className="progress-bar" style={this.votesJohnInPercentStyle()}>
          </div>
        </div>

        <span className="label votes">Paul: {this.votePaulTotal()+' votes'}</span> <span> { this.votePaulInPercent().toFixed(1)+'%'}</span>
        <div className="progress active">
          <div className="progress-bar" style={this.votesPaulInPercentStyle()}>
          </div>
        </div>

        <span className="label votes">George: {this.voteGeorgeTotal()+' votes'}</span> <span> { this.voteGeorgeInPercent().toFixed(1)+'%'}</span>
        <div className="progress active">
          <div className="progress-bar" style={this.votesGeorgeInPercentStyle()}>
          </div>
        </div>

        <span className="label votes">Ringo: {this.voteRingoTotal()+' votes'}</span> <span> { this.voteRingoInPercent().toFixed(1)+'%'}</span>
        <div className="progress active">
          <div className="progress-bar" style={this.votesRingoInPercentStyle()}>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import WordToGuess from '../containers/WordToGuess'
import SendBox from '../containers/SendBox'
import Counter from '../containers/Counter'
import {newGuess} from '../actions/game'

class OrderPage extends Component {
    newGuess = (guesses) => {
    this.props.newGuess(guesses)
  }


  render() {
    return (
        <div className="App">
            <Link to={ `/order` }><header className="App-header">
            <h1 className="App-title">Ordering Pizza</h1>
            </header></Link>
            <div className = "Game">
            <WordToGuess />
            <SendBox onSubmit={this.newGuess} />
            <Counter />
            </div>
        </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		wordToGuess: state.wordToGuess,
        guesses: state.guesses
	}
}

export default connect(mapStateToProps, {newGuess})(GamePage)
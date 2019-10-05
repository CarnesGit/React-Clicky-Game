import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    lose: "false",
    styleMe: "white"
  };
  clickPicture = id => {
    // Randomly arrange the pictures
    const shuffledArray = this.shuffleArray(cards);
    this.setState({cards: shuffledArray});
    // Sets score
    if (this.state.clickedArray.includes(id)) {
      this.setState({ 
        score: 0, 
        clickedArray: [], 
        message:"You Clicked that before! Game Over! Click an image to start again!", 
        lose: "true",
        styleMe: "red"
      });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message:"Correct!",
        lose: "false",
        styleMe: "green"
      });
    }
    // Sets Top Score
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }
  shuffleArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Clicky Game!!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on a picture to earn points, but don't click any picture more than once!</strong> 
          <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p style={{color: this.state.styleMe}} className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper
        loseWrapper = {this.state.lose}
        pictures=
          {this.state.cards.map(picture => (
            <PictureCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id}
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
        <footer className="footer">
      <div className="container">
        <span className="text-muted">&copy;CarnesDev React app.</span>
      </div>
    </footer> 
      </div>
    );
  }
}

export default App;

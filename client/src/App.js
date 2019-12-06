import React from 'react';
import axios from 'axios';

import Players from './components/Players';
import NavBar from './components/NavBar';

import './App.css';
import "./styles.scss";

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        // console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log('Why no data?', err))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          {this.state.players.map(player => (
            <Players key={player.id} player={player} />
          ))}
        </div>
      </div>
    ); 
  }
}

export default App;

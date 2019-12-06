import React from 'react';
import Players from './components/Players';

import axios from 'axios';

import './App.css';

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
        <h1>Women's World Cup</h1>
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

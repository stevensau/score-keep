import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render(){
    return(
        <div>
          <TitleBar title={this.props.title} subtitle='by Steven Sauder'/>
          <div className='wrapper'>
            <PlayerList players={this.props.players}/>
            <AddPlayer/>
          </div>
        </div>
    )
  }
}

App.PropTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired
}

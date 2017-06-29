import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPosition} from './../imports/api/players';

import App from './../imports/ui/App';




const renderPlayers =  (playersList) => {

};






Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({},{sort:{score: -1}}).fetch();
    console.log(players);
    let positionPlayers = calculatePlayerPosition(players);
    console.log(positionPlayers);
    let title = 'Score Keep';
    ReactDOM.render(<App players={positionPlayers} title={title} />, document.getElementById('app'));
  });
});

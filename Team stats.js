const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
    {firstName: 'Luis', lastName: 'Armano', age: 25},
    {firstName: 'Sebastian', lastName: 'Ferero', age: 37}     
  ],
  _games: [
    {opponent: 'Broncos', teamPoints:  42, opponentPoints: 27},
    {opponent: 'Israel', teamPoints: 2, opponentPoints: 7},
    {opponent: 'Germania', teamPoints: 5, opponentPoints: 3}
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
  
  this.players.push(player);
  },

  addGame(opponentName,teamPoint,oppoPoints){
    const game = {
      opponent: opponentName,
      teamPoints: teamPoint,
      opponentPoints: oppoPoints,
    }
    this.games.push(game);
  }
}; 

team.addPlayer("Pablo", "Sanchez", 20);
team.addPlayer("Luis", "Armano", 83);
team.addPlayer("Sebastian", "Ferero", 24);

console.log(team.players);
team.addGame('Israel',34,35);
team.addGame('Broncos',90,52);
team.addGame('Germania',75,25);

console.log(team.games);

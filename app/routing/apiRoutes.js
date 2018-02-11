var friends = require('../data/friends');

module.exports = function(app) {

app.get('/api/friends', (req, res)=> {
    res.json(friends.friendList);
});

app.post('/api/friends', (req, res)=> {
    var friend = req.body;
    friend.scores = JSON.parse(friend.scores);
    friends.friendList.push(friend);
    res.json(friends.findFriend());
});

};
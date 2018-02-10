var friends = require('../data/friends');

module.exports = function(app) {

app.get('/api/friends', (req, res)=> {
    res.json(friends.friendList);
});

app.post('/api/friends', (req, res)=> {
    var friend = req.body;
    friends.friendList.push(friend);
    console.log(friends.friendList)
    res.json(friends.friendList);
});

};
const friendData = require('../data/friends');

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {

        var newFriendDataScore = 0;
        var bestFriendScore = 0;
        var bestFriend = -1;

        req.body.scores.forEach(function (score) {
            newFriendDataScore += parseInt(score);
        });

        friendData[0].scores.forEach(function (score) {
            bestFriendScore += parseInt(score);
        });

        totalDifference = Math.abs(newFriendDataScore - bestFriendScore);
        bestFriend = 0;

        for (var loop = 1; loop < friendData.length; loop++) {
            friendData[loop].scores.forEach(function (score) {
                bestFriendScore += parseInt(score);
            });

            var tempDifference = Math.abs(newFriendDataScore - bestFriendScore);
            if (totalDifference > tempDifference) {
                totalDifference = tempDifference;
                bestFriend = loop;
            }
        }

        friendData.push(req.body);

        res.json({
            name: friendData[bestFriend].name,
            photo: friendData[bestFriend].photo
        });
    });
};
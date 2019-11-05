const friendData = require('../data/friends');

function getScores(objectArray) {
    let friendScore = 0;

    objectArray.forEach(function (score) {
        friendScore += parseInt(score);
    });

    return friendScore;
}

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {

        var newFriendDataScore = 0;
        var bestFriendScore = 0;
        var bestFriend = -1;

        newFriendDataScore = getScores(req.body.scores);
        bestFriendScore = getScores(friendData[0].scores);

        totalDifference = Math.abs(newFriendDataScore - bestFriendScore);
        bestFriend = 0;

        for (var loop = 1; loop < friendData.length; loop++) {

            bestFriendScore = getScores(friendData[loop].scores);

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
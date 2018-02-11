var friends = {
    friendList: [
        {
            name: "Robert",
            photo: 'http://www.matse.psu.edu/sites/default/files/faculty_profile/robert-hickey-web.jpg',
            scores: [
                5,1,2,5,5,4,3,2,3,5
            ]
        }, 
        {
            name: "Karen",
            photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAe3AAAAJGUwYTU2NTJmLTI3Y2QtNGExNy1hNjliLTMxMzM0MDc0MDgzYw.jpg',
            scores: [
                1,5,2,2,3,1,5,1,2,1
            ]
        },
        {
            name: "Brandy",
            photo: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjWAAAAJGRhMTM2NDRiLTFlODAtNDFiZi05ZjdiLTJlNzMyZjdjZTAyMA.jpg',
            scores: [
                3,3,2,4,3,5,1,5,3,3
            ]
        }
    ],
    findFriend: function() {
        var index = 0;
        var lastArray = this.friendList[this.friendList.length -1].scores;
        console.log("lastArray is ", lastArray);
        var lowestDifference = this.arrayComparison(lastArray, this.friendList[0].scores);
        for (var i=1 ; i < this.friendList.length -1 ; i++) {
            var arrayDifference = this.arrayComparison(this.friendList[i].scores, lastArray)
            if (arrayDifference < lowestDifference) {
                index = i;
                lowestDifference = arrayDifference;
            }
        }
        return this.friendList[index];
    },
    arrayComparison: function(array1, array2) {
        var totalDifference = 0;
        array1.forEach((value, index, array)=> {
            totalDifference += Math.abs(value - array2[index]);
        });
        return totalDifference;
    }
}

module.exports = friends;

// Logic for programatically storing survey answers

// Logic for finding a best friend given one survey
// and the other surveys in the array
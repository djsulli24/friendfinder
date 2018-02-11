$(document).ready(function() {

$("#viewFriends")
.click(function () {
    $.get("/api/friends", function(data) {
        $("#allFriends").append(JSON.stringify(data));
    })
});

$("#postFriends")
.click(function () {
    $.post("/api/friends", 
    {
        name: "Marian",
        photo: 'a',
        scores: JSON.stringify([5,1,2,5,5,4,3,2,3,3])
    }, function(data) {
        $("#bestFriend").append(JSON.stringify(data));
    })
});

});
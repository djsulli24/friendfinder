$(document).ready(function(){

$("#viewFriends")
.click(function () {
    $.get("/api/friends", function(data) {
        $("#allFriends").append(JSON.stringify(data));
    })
});

$("#postFriends")
.click(function () {
    $.post("/api/friends", {name: 'Daniel', photo: 'http://www.google.com/', scores: [1,2,3,4,5]}, function(data) {
        $("#bestFriend").append(JSON.stringify(data));
    })
});

});
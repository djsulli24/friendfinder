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
    });
});

$("#submit").click(function(){
    var numberArray = [
        parseInt($("#q1").val().trim()),
        parseInt($("#q2").val().trim()),
        parseInt($("#q3").val().trim()),
        parseInt($("#q4").val().trim()),
        parseInt($("#q5").val().trim()),
        parseInt($("#q6").val().trim()),
        parseInt($("#q7").val().trim()),
        parseInt($("#q8").val().trim()),
        parseInt($("#q9").val().trim()),
        parseInt($("#q10").val().trim())
    ];
    var object = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: JSON.stringify(numberArray)
    };
    $.post("/api/friends", 
    object, function(data) {
        console.log(JSON.stringify(data));
        $("#resultName").text(data.name);
        $("#resultPhoto").html("<img src='"+ data.photo +"'>");
        $("#resultsModal").modal('show');
    });
});

});
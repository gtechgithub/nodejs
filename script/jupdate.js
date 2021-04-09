() => {

    console.log("inside anonymous function")

    var inputtrackid = document.getElementById("track_id");
    inputtrackid.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("updatedetailssubmit").click();
        }
}
function myFunction() {

    let windowLen = window.frames.length;
    let parentLen = parent.frames.length;

    console.log(parentLen)

    if (windowLen == 0 && parentLen >= 1) {
        this.isInIframe = true
        console.log('Is in Iframe!')
    } else {
        console.log('Is in main window!')
    }

    var path = parent.frames[1]
    console.log(path);


    //path.document.getElementsByTagName("body")[0].innerText = "red1";

    path.document.location.href = "/addnew.html"


    //document.getElementById("iframe2").innerHTML = myContent;  

}

function myFunction2() {

    var path = parent.frames[1]

    //path.document.getElementsByTagName("body")[0].innerText = "try it 2";
    path.document.location.href = "/retrieve.html"

}

function updateDetails() {



    var path = parent.frames[1]

    path.document.location.href = "/update.html"

}


function addnewentries() {

    var path = parent.frames[1]

    path.document.location.href = "/addnewentries.html"

}


function filterid1onchange() {

    var tableRef = document.getElementById('filterid1');
    alert(tableRef.value)


}


function saveclick1(val1,datas){
  
//    let openModalDialog = document.getElementById('buttonedit');


    var table = document.getElementById("table1");
    var tr = table.getElementsByTagName("tr");

    var textbox = document.getElementById("dailogtextbox1");
    
    textbox.value = tr[val1].getElementsByTagName("td")[2].textContent;

    textbox.value = datas;

    dialogWindow.show();

  //  openModalDialog.addEventListener('click', () => {
   //     dialogWindow.show();
   //   })


}


function filterid1onchange() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("filterid1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");


        txtValue = ""

        for (j = 0; j < td.length; j++) {

    
            var c = td[j].childNodes;

            for (k = 0; k < c.length; k++) {

                
                var  l = c[k].value;
                if (typeof l != 'undefined' &&  l.trim() != "") {
                    console.log( l);
                    txtValue = txtValue + " " + l

                }
              }

              console.log ("filter:" + filter)
              
              console.log ("txtValue:" + txtValue)
              
            if ((j === (td.length - 1)) && txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }

              /*
            if (td[j]) {

                txtValue = txtValue + " " + td[j].textContent || td[j].innerText;

                if ((j === (td.length - 1)) && txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
            */
        }

    }
}

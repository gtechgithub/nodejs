var tableentries = [];

function bulkEntriesClick() {
    var str = document.getElementById('bulkentries').value;
    var entries = [];
    var text = str.split("\n");
    for (var i = 0; i < text.length; i++) {
        var row = str[i];

        var delimitedstring = text[i].split("\t");
        entries.push(delimitedstring);

    }
    console.log(entries)

    //persist to the global variable
    tableentries = entries;

    drawtable(entries);
    return entries;
}

function drawtable(entries) {

    clearTable();

    var tbl = document.getElementById("table1body");
    tbl.removeAttribute
    for (var r = 0; r < entries.length; r++) {
        var row = document.createElement("tr");
        row.setAttribute("class","table-danger");

        // create cells in row
        for (var c = 0; c < entries[r].length; c++) {
            var cell = document.createElement("td");
            var cellText = document.createElement('span');
            cellText.innerText = entries[r][c];
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        
        tbl.appendChild(row); // add the row to the end of the table body
    }

    //table1.appendChild(tbl); // appends <table> into <div>
}


function clearTable()
{
 var tableRef = document.getElementById('table1');
 while ( tableRef.rows.length > 0 )
 {
  tableRef.deleteRow(0);
 }
}

function toSave() {

    for (var i = 0; i < tableentries.length; i++) {
       
        console.log ("entries[" + i  + "]:" + tableentries[i]);

    }
}
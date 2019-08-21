// content.js
//alert("Hello from your Chrome extension!")

//$("tbody tr:nth-child(12)").insertAfter("tbody tr:nth-child(5)");
//$("tbody tr:nth-child(10)").insertAfter("tbody tr:nth-child(6)");
//$("tbody tr:nth-child(9)").insertAfter("tbody tr:nth-child(7)");
//$("tbody tr:nth-child(11)").insertAfter("tbody tr:nth-child(9)");
//$("tbody tr:nth-child(12)").insertAfter("tbody tr:nth-child(10)");
console.log("Iniciando complemento");
sortTable();

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	dar_click();
    }else{
    	console.log("Otro evento");
    }
  }
);

function dar_click(){
	console.log("Se dio click al boton");
	console.log("");
	sortTable();
}

function sortTable() {
  console.log("Ordenando tabla");
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementsByTagName("table")[4];
  console.log(table);
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 2; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
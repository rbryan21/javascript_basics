function updateForm() {
    var hobName = document.getElementById("hobName").value;
            
    var hobDate = document.getElementById("hobDate").value;
    var table = document.getElementById("list");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = hobName;
    cell2.innerHTML = hobDate;
        }

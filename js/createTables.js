const tableBody1 = document.getElementById("table-body-1");
const tableBody2 = document.getElementById("table-body-2");

for (let i = 1; i <= 33; i++) {
    const row = document.createElement("tr");
    
    const col1 = document.createElement("td");
    col1.innerHTML = `Row ${i}, Column 1`;
    row.appendChild(col1);
    
    if (i <= 9) {
        const col2 = document.createElement("td");
        col2.innerHTML = `Row ${i}, Column 2`;
        row.appendChild(col2);
        
        const col3 = document.createElement("td");
        col3.innerHTML = `Row ${i}, Column 3`;
        row.appendChild(col3);
        
        tableBody1.appendChild(row);
    } else {
        const col2 = document.createElement("td");
        col2.innerHTML = `Row ${i}, Column 2`;
        row.appendChild(col2);
        
        tableBody2.appendChild(row);
    }
}

const table2Headers = document.querySelectorAll("#table-body-2 th");
table2Headers[1].style.display = "none";
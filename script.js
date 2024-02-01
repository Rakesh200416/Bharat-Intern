document.getElementById("add-btn").addEventListener("click", function () {
    // Get user input
    var category = document.getElementById("category-input").value;
    var amount = document.getElementById("amount-input").value;
    var date = document.getElementById("date-input").value;

    // Ensure required fields are not empty
    if (category.trim() === '' || amount.trim() === '' || date.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new table row
    var newRow = document.createElement("tr");
    newRow.id = "expense-" + Date.now(); // Unique id for each expense

    // Create table cells for each column
    var categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    var amountCell = document.createElement("td");
    amountCell.textContent = amount;
    var dateCell = document.createElement("td");
    dateCell.textContent = date;
    var deleteCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        // Handle deletion of the expense
        document.getElementById("expense-table-body").removeChild(newRow);
        // Optionally, update the total amount
        updateTotalAmount();
    });
    deleteCell.appendChild(deleteButton);

    // Append cells to the row
    newRow.appendChild(categoryCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(deleteCell);

    // Append the row to the table body
    document.getElementById("expense-table-body").appendChild(newRow);

    // Optionally, update the total amount
    updateTotalAmount();
});

function updateTotalAmount() {
    var totalAmountCell = document.getElementById("total-amount");
    var totalAmount = 0;

    // Iterate through all rows and sum the amounts
    var rows = document.getElementById("expense-table-body").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var amountCell = rows[i].getElementsByTagName("td")[1]; // Assuming amount is in the second column
        totalAmount += parseFloat(amountCell.textContent);
    }

    // Update the total amount cell
    totalAmountCell.textContent = totalAmount.toFixed(2);
}
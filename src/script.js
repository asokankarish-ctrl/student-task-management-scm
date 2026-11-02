// Add one row to the book table.
function addBook() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let message = document.getElementById("message");

    if (title.value.trim() === "" || author.value.trim() === "") {
        message.textContent = "Enter both a title and an author.";
        return;
    }

    let table = document.getElementById("bookList");
    let row = table.insertRow();
    row.insertCell().textContent = title.value.trim();
    row.insertCell().textContent = author.value.trim();
    row.insertCell().textContent = "Available";

    // These are fixed buttons, not text entered by the user.
    row.insertCell().innerHTML = '<button onclick="borrowBook(this)">Borrow</button> <button onclick="removeBook(this)">Remove</button>';

    title.value = "";
    author.value = "";
    message.textContent = "Book added.";
}

// The button is inside a cell, and the cell is inside a row.
function borrowBook(button) {
    let row = button.parentElement.parentElement;
    let status = row.cells[2]; // The third cell contains the status.

    if (status.textContent === "Available") {
        status.textContent = "Borrowed";
        button.textContent = "Return";
        document.getElementById("message").textContent = "Book borrowed.";
    } else {
        status.textContent = "Available";
        button.textContent = "Borrow";
        document.getElementById("message").textContent = "Book returned.";
    }
}

function removeBook(button) {
    let row = button.parentElement.parentElement;

    if (row.cells[2].textContent === "Borrowed") {
        document.getElementById("message").textContent = "Return the book first.";
        return;
    }

    row.remove();
    document.getElementById("message").textContent = "Book removed.";
}

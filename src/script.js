
// CR-03: Validate book title and author
function validateBook(title, author) {

    if (title.trim() === "") {
        document.getElementById("message").textContent =
            "Please enter a book title.";
        return false;
    }

    if (author.trim() === "") {
        document.getElementById("message").textContent =
            "Please enter an author name.";
        return false;
    }

    return true;
}

// Add one row to the book table.
function addBook() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let message = document.getElementById("message");

    // Validate before adding the book.
    if (!validateBook(title.value, author.value)) {
        return;
    }

    let table = document.getElementById("bookList");
    let row = table.insertRow();

    row.insertCell().textContent = title.value.trim();
    row.insertCell().textContent = author.value.trim();
    row.insertCell().textContent = "Available";

    row.insertCell().innerHTML =
        '<button onclick="borrowBook(this)">Borrow</button> ' +
        '<button onclick="removeBook(this)">Remove</button>';

    title.value = "";
    author.value = "";

    message.textContent = "Book added successfully!";
}

// Borrow or return a book.
function borrowBook(button) {
    let row = button.parentElement.parentElement;
    let status = row.cells[2];

    if (status.textContent === "Available") {
        status.textContent = "Borrowed";
        button.textContent = "Return";

        document.getElementById("message").textContent =
            "Book borrowed.";
    } else {
        status.textContent = "Available";
        button.textContent = "Borrow";

        document.getElementById("message").textContent =
            "Book returned.";
    }
}

// Remove a book.
function removeBook(button) {
    let row = button.parentElement.parentElement;

    if (row.cells[2].textContent === "Borrowed") {
        document.getElementById("message").textContent =
            "Return the book first.";
        return;
    }

    row.remove();

    document.getElementById("message").textContent =
        "Book removed.";
}

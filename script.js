function getFormvalue() {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form element
    const form = document.getElementById("form1");

    // Get the values of the first and last name inputs
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display the values using an alert
    alert(`${firstName} ${lastName}`);
}

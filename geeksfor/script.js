document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});
 
// Example JavaScript code
document.getElementById('output').textContent = 'JavaScript is running!';

// Optional: Interact with the external URL
fetch('https://hentel.github.io/skrapp')
    .then(response => response.text())
    .then(data => console.log('Fetched content:', data))
    .catch(error => console.error('Fetch error:', error));

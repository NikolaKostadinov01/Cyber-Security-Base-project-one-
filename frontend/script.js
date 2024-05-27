// Enhanced JavaScript for frontend functionality
console.log('Frontend script loaded');

// Example AJAX request using fetch API
fetch('/api/tasks', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

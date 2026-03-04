async function testChatAPI() {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello, how are you?' })
    });
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testChatAPI();


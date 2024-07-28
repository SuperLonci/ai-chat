export async function sendMessageToBackend(message: string): Promise<string> {
  const response = await fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to backend');
  }

  const data = await response.json();
  return data.botResponse;
}

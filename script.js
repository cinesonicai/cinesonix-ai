// Formulario de creación de contenido IA
const form = document.getElementById('aiForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const prompt = document.getElementById('prompt').value;
  const tipo = document.getElementById('tipo').value;
  resultado.innerHTML = `<p>Generando ${tipo} para: <strong>${prompt}</strong> ... (demo)</p>`;
  // Aquí se integraría la API de generación IA real
});

// Chatbot IA básico (simulación demo)
const chatSend = document.getElementById('chatSend');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

chatSend.addEventListener('click', () => {
  const pregunta = chatInput.value;
  if(!pregunta) return;
  const respuesta = `🤖 Respuesta demo a: "${pregunta}"`; // Aquí se integraría GPT IA real
  chatWindow.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;
  chatWindow.innerHTML += `<p>${respuesta}</p>`;
  chatInput.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

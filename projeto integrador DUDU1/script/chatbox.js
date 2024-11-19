// Banco de dados de respostas e opções
const chatbotDB = {
    "inicial": {
        "resposta": "Olá! Como posso ajudar você hoje?",
        "opcoes": [
            { texto: "Quantas faltas o aluno Eduardo Ferro tem?", id: "faltas" },
            { texto: "Qual é o trimestre que o aluno Eduardo Ferro tem a maior nota?", id: "notas" },
            { texto: "Quantas ocorrências o Eduardo tem?", id: "ocorrencia" }
        ]
    },
    "faltas": {
        "resposta": "Eduardo Ferro tem 70 faltas no total.",
        "opcoes": [
            { texto: "Verificar média de notas do Eduardo", id: "notas" },
            { texto: "Verificar se o Eduardo vai passar de ano", id: "ano" },
            { texto: "Quantas ocorrências o Eduardo tem?", id: "ocorrencia" }
        ]
    },
    "notas": {
        "resposta": "O 2º Trimestre com 7,88 de média é o melhor de Eduardo Ferro.",
        "opcoes": [
            { texto: "Quantas faltas o Eduardo tem?", id: "faltas" },
            { texto: "Verificar se o Eduardo vai passar de ano", id: "ano" },
            { texto: "Quantas ocorrências o Eduardo tem?", id: "ocorrencia" }
        ]
    },
    "ocorrencia": {
        "resposta": "Atualmente o aluno se encontra com 3 ocorrências.",
        "opcoes": [
            { texto: "Quantas faltas o Eduardo tem?", id: "faltas" },
            { texto: "Qual é a maior nota do Eduardo?", id: "notas" },
            { texto: "Quantas ocorrências o Eduardo tem?", id: "ano" }
        ]
    },
    "ano": {
        "resposta": "Eduardo Ferro vai passar de ano, mas precisa melhorar nas faltas.",
        "opcoes": [
            { texto: "Quantas faltas o Eduardo tem?", id: "faltas" },
            { texto: "Qual é a maior nota do Eduardo?", id: "notas" },
            { texto: "Quantas ocorrências o Eduardo tem?", id: "ocorrencia" }
        ]
    }
};

// Estado inicial do chatbot
let currentState = "inicial";

// Função para exibir a mensagem com um delay simulando "geração da resposta"
function typeMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");

    // Aplica a classe para a mensagem do usuário ou bot
    if (sender === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }

    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);

    // Rolagem para o final
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para exibir as opções como botões
function displayOptions(options) {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";  // Limpa as opções anteriores

    options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option-button");
        button.innerText = option.texto;
        button.onclick = () => handleOptionClick(option.id);
        optionsContainer.appendChild(button);
    });
}

// Função para lidar com a escolha do usuário
function handleOptionClick(optionId) {
    const chatBox = document.getElementById("chat-box");

    // Exibe a mensagem de escolha do usuário
    typeMessage(`Você escolheu: ${chatbotDB[currentState].opcoes.find(opcao => opcao.id === optionId).texto}`, "user");

    // Adiciona a mensagem "Gerando sua resposta..." antes de exibir a resposta real
    typeMessage("Gerando sua resposta...", "bot");

    // Simula um tempo para responder (delay de 1 segundo)
    setTimeout(() => {
        // Remove a mensagem "Gerando sua resposta..."
        chatBox.removeChild(chatBox.lastChild);

        // Atualiza o estado atual do chatbot
        currentState = optionId;

        // Exibe a resposta do bot com o delay
        typeMessage(chatbotDB[currentState].resposta, "bot");

        // Exibe as novas opções de botões com delay
        displayOptions(chatbotDB[currentState].opcoes);
    }, 1000);  // Delay de 1 segundo (simulando carregamento da resposta)
}

// Função para iniciar o chatbot
function startChat() {
    // Exibe a primeira mensagem do bot com delay
    setTimeout(() => {
        typeMessage(chatbotDB[currentState].resposta, "bot");

        // Exibe as opções iniciais com delay
        displayOptions(chatbotDB[currentState].opcoes);
    }, 50);  // Delay de 1 segundo para iniciar o chat
}

// Inicia o chat ao carregar a página
window.onload = startChat;

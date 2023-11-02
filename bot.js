import('node-fetch').then((nodeFetch) => {
  const fetch = nodeFetch.default;

  import('node-telegram-bot-api').then((TelegramBot) => {
    const TelegramBotApi = TelegramBot.default;

    // Substitua 'SEU_TOKEN_AQUI' pelo seu token
    const TOKEN = 'COLOQUE_O_TOKEN_DO_SEU_BOT';
    // Substitua 'SEU_ID_DO_GRUPO' pelo ID do seu grupo
    const GROUP_ID = 'COLOQUE_O_ID_DO_GRUPO_ALVO'; // ID do seu grupo

    // Função para obter uma bandeira aleatória
    function getRandomFlag() {
      const flags = [
        '🇦🇹', '🇦🇿', '🇧🇪', '🇭🇷', '🇨🇿', '🇩🇰', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇫🇮', '🇫🇷',
        '🇩🇪', '🇮🇹', '🇨🇮', '🇳🇱', '🇵🇱', '🇵🇹', '🇲🇪', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🇷🇸',
        '🇪🇸', '🇸🇪', '🇨🇭', '🇹🇷', '🇺🇦', '🇺🇿'
      ];
      const randomIndex = Math.floor(Math.random() * flags.length);
      return flags[randomIndex];
    }

    // Função para criar um campo de sinais com "⚽️" e "🧍🏻"
    function createSignalField() {
      const field = ['🟢', '🟢', '🟢', '🟢', '🧍🏻', '🟢'];

      // Substitua aleatoriamente os "🟢" por "⚽️"
      const randomIndices = [0, 1, 2, 3, 5];
      const randomIndex = randomIndices[Math.floor(Math.random() * randomIndices.length)];

      field[randomIndex] = '⚽️';

      return field;
    }

    // Função para criar a mensagem com os campos de sinais e os links
    function createMessage() {
      const signalField1 = createSignalField();
      const signalField2 = createSignalField();
      const signalField3 = createSignalField();

      const messageText = `✅ OPORTUNIDADE IDENTIFICADA
🥅 Penalty Shoot-Out

${signalField1[0]} ${signalField1[1]} ${signalField1[2]}
${signalField1[3]} ${signalField1[4]} ${signalField1[5]}

${signalField2[0]} ${signalField2[1]} ${signalField2[2]}
${signalField2[3]} ${signalField2[4]} ${signalField2[5]}

${signalField3[0]} ${signalField3[1]} ${signalField3[2]}
${signalField3[3]} ${signalField3[4]} ${signalField3[5]}

🔥 Escolha o time: ${getRandomFlag()}
⚽️ Estratégia: Repetição
🔥Tentativas: 3
⏰ Válido por 5min
[Cadastre-se aqui](COLOQUE_O_SEU_LINK_DE_AFILIADO_DO_CASSINO)
[Clique aqui para jogar](https://realsbet.com/casino/game/1292733?provider=EVOPLAY)`;

      return messageText;
    }

    function sendMessages(chatId) {
      const bot = new TelegramBotApi(TOKEN, { polling: true });

      function sendSignalMessage() {
        const message = createMessage();
        bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        setTimeout(sendSignalMessage, 5 * 60000); // Enviar a cada 5 minutos
      }

      function sendGreenMessage() {
        bot.sendMessage(chatId, '✅✅✅ GREEN ✅✅✅');
        setTimeout(sendGreenMessage, 4 * 60000); // Enviar a cada 4 minutos
      }

      // Inicialmente, envie a mensagem do sinal
      sendSignalMessage();

      // Agende o envio da mensagem "GREEN" para 4 minutos após o início
      setTimeout(sendGreenMessage, 4 * 60000);
    }

    // Substitua 'SEU_CHAT_ID_AQUI' pelo ID do chat ou grupo onde deseja enviar as mensagens
    sendMessages(GROUP_ID);
  });
});

#!/bin/bash

# Certifique-se de substituir o caminho correto para o seu arquivo bot.js
BOT_SCRIPT_PATH="/root/bot/bot.js"

# Inicie o bot Node.js em uma nova sessão do screen
screen -dmS botTelegram node "$BOT_SCRIPT_PATH"

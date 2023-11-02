#!/bin/bash

# Verifique se o arquivo de script existe
if [ -e /root/sataTelegrambot/bot.js ]; then
    # Adicione uma linha ao crontab
    (crontab -l ; echo "@reboot /usr/bin/node /root/sataTelegrambot/bot.js") | crontab -
    echo "Entrada adicionada ao crontab para iniciar /root/sataTelegrambot/bot.js na reinicialização."
else
    echo "O arquivo /root/sataTelegrambot/bot.js não foi encontrado."
fi

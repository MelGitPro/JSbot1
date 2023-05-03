const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('6120155424:AAF-rA1BxhHAuyOMV7b3Y5KjJDChKYA7jpw', {polling:true});

bot.on('message', (msg) =>{
    const ChatId = msg.chat.id;
    if (msg.text == ('/start' || '/start@Calculatortghyperbot')) {
        bot.sendMessage(ChatId,'Использовать бота очень просто.\n Надо ввести свой пример в чат боту и получить ответ от него.\n Пример ввода: 5+8ю. \n Также можно использовать знаки: /,*,-,%,**');
    } else if (msg.text == '/help'){
        bot.sendMessage(ChatId, 'Бот создан на Node JS. ver 2.0js.ed')
    } else{
        bot.sendMessage(ChatId, eval(msg.text));
    };
   console.log(msg.text);
});

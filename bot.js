const { keyboard } = require('@testing-library/user-event/dist/keyboard');
const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;


const token = '5877323749:AAG-WCmmCb3-RUYZK5tADFu7yFfrdV5tu3M';
const webAppUrl = 'https://ya.ru'

const  bot  =  new  TelegramBot ( token ,  { polling : true } ) ;


bot . on (  'message' , async  ( msg )  =>  { 
  const  chatId  =  msg . chat . id ;
  const  text  =  msg . text;
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка запоните форму', {
      reply_markup: { 
        inline_keyboard: [
          [{text:'Заполнить форму', web_app: {url: webAppUrl}}]
        ]
      }
    })
    await bot.sendMessage(chatId, 'Ниже появится кнопка запоните форму', {
      reply_markup: { 
        keyboard: [
          [{text:'Сделать заказ', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

});
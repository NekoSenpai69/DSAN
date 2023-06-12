const axios = require('axios');
const { Telegraf,Markup} = require('telegraf');


   
const Neko = new Telegraf(process.env.TOKEN)
const couple = async(m) => {
try {
  
  const response = await axios.get(`https://zany-teal-alligator-suit.cyclic.app/couple`)
  const resM = response.data.male
  const resFM = response.data.female

 await m.replyWithPhoto(
    {url : resM},{
      caption: 'For Him!!',    
  });
 await m.replyWithPhoto(
    {url : resFM},{
      caption: 'For Her!!',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('NEXT', 'CP'),
      ])
  });


} catch (error) {
   m.reply('An Error Occurred!!');
}
   }

   
const couplecall = async(m) => {
try {
const response = await axios.get(`https://zany-teal-alligator-suit.cyclic.app/couple`)
  const resM = response.data.male
  const resFM = response.data.female

 await m.replyWithPhoto(
    {url : resM},{
      caption: 'For Him!!',    
  });
 await m.replyWithPhoto(
    {url : resFM},{
      caption: 'For Her!!',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('NEXT', 'CP'),
      ])
  });

} catch (error) {
  m.reply('An Error Occurred!!');
}  
   }

module.exports = { couple,couplecall }
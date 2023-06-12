const { Telegraf,Markup} = require('telegraf');
const { message } = require('telegraf/filters');
const { nsfw,nsfwcall,nsfwmenuu } = require("./Commands/nsfw.js")
const { couple,couplecall } = require("./Commands/FUN/couplepp")
const { logomaker,logomenuu } = require("./Commands/FUN/Textpro")
const app = require('express')();
const {NSFW,TOKEN} = process.env
const port = process.env.PORT || 8080;
const axios = require("axios")
app.get('/',(req,res)=>{
  res.send('All is Ok!!')
})
app.listen(port)

const Neko = new Telegraf(TOKEN);
Neko.start((m) => m.reply('Welcome')
          );
Neko.help((m) => m.reply('Send me a sticker'));
Neko.on(message('sticker'), (m) => m.reply('😵'));
async function lol() {    
  
 let res = await axios.get(`https://dsan.nekosenpai69.repl.co`)
console.log(res.data);

            }
Neko.launch().then((m)=>{
  m.reply("Bot Is Online")
}
  )
  console.log(`Bot is ready`);

 
        //--------NSFW--------\\

if (NSFW == "true") {
Neko.command('nsfwmenu',nsfwmenuu)
Neko.command('nsfw',nsfw)
Neko.action('CL', nsfwcall)
} else {
  Neko.command('nsfw',(m) =>
m.reply("BOT IS NOT NSFW ENABLED!!"))
}

       //--------COUPLEPP--------\\

Neko.command('couplepp',couple)
Neko.action('CP', couplecall)


Neko.command('lgmenu', logomenuu)
Neko.command('lg', logomaker)


const axios = require('axios');
const { Telegraf,Markup} = require('telegraf');
const fs = require('fs')
const Neko = new Telegraf(process.env.TOKEN)
const nsfw = async(m) => {
try {
  m.reply(`PLEASE WAIT....!!`)
  const args = m.message.text.slice(6)
  const response = await axios.get(`https://fantox-apis.vercel.app/${args}`)
  const res = response.data.url
  fs.writeFileSync('./Args/nsfwargs.txt',args)
  const send = await m.replyWithPhoto(
    {url : res},{
      caption: 'Ahhh!!',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('NEXT', 'CL'),
      ])
  });

} catch (error) {
   m.reply('An Error Occurred!!');
}
   }

   
const nsfwcall = async(m) => {
try {
m.reply(`PLEASE WAIT....!!`)
const args = await fs.readFileSync('./Args/nsfwargs.txt')
  const response = await axios.get(`https://fantox-apis.vercel.app/${args}`)
  const res = response.data.url
  
   await m.replyWithPhoto(
    {url : res},{
      caption: 'Ahhh!!',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('NEXT', 'CL'),
      ])
  });
} catch (error) {
  m.reply('An Error Occurred!!');
}  
   }

const nsfwmenuu = async(m) => {
const nsfwmenu = ['spreadpussy', 'genshin', 'squirt', 'glasses', 'sunglasses', 'swimsuit', 'schoolswimsuit', 'hololive', 'ass', 'underwear', 'nipples', 'uncensored', 'sex', 'sex2', 'sex3', 'blonde', 'twintails', 'breasts', 'thighhighs', 'skirt', 'gamecg', 'animalears', 'foxgirl', 'dress', 'schooluniform', 'twogirls', 'gloves', 'vocaloid', 'touhou', 'weapon', 'withflowers', 'pinkhair', 'cloudsview', 'white', 'animal', 'tail', 'nude', 'ponytail', 'bed', 'whitehair', 'ribbons', 'japanesecloths', 'hatsunemiku', 'bikini', 'barefoot', 'nobra', 'food', 'wings', 'pantyhose', 'openshirt', 'headband', 'penis', 'close', 'wet', 'catgirl', 'wolfgirl', 'hneko', 'hloli', 'pussy','spreadlegs', 'bra', 'fateseries', 'tree', 'elbowgloves', 'greenhair', 'horns', 'withpetals', 'drunk', 'cum', 'headdress', 'tie', 'shorts', 'hmaid', 'headphones', 'anusview', 'Idol', 'gun', 'stockings', 'tears', 'breasthold', 'necklace', 'seethrough', 'bunnyears', 'bunnygirl', 'topless', 'beach', 'erectnipples', 'yuri', 'vampire', 'shirt', 'pantypull', 'tornclothes', 'bondage', 'demon', 'bell', 'shirtlift', 'tattoo', 'chain', 'flatchest', 'fingering']

  const NSFWM = `Available NSFW MENU :\n\n- ${nsfwmenu.map((menunsfw) => menunsfw.toLowerCase()).join('\n- nsfw ')}\n`
  m.reply(NSFWM)
}

module.exports = { nsfw,nsfwcall,nsfwmenuu }
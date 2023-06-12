const mumaker = require("mumaker")
const logomaker = async(m) => {
  try {

      const logo = m.message.text.split(" ").slice(1,2).toString()
      let text = m.message.text.split(" ").slice(2).toString()
    
      if(!logo) return m.reply("Choose A logo From LogoMakerMenu!!")
      if (!text) {
        m.reply(`Write a word for creating logo !!`)
      } else {
        m.reply("Please wait ...")
      }
      if (logo === "3dchristmas") {
        mumaker.textpro(
          "https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "3dstone") {
        mumaker.textpro(
          "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "3dneon") {
        mumaker.textpro(
          "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "3dspace") {
        mumaker.textpro(
          "https://textpro.me/create-space-3d-text-effect-online-985.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "bear") {
        mumaker.textpro(
          "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "blackpink") {
        mumaker.textpro(
          "https://textpro.me/create-blackpink-logo-style-online-1001.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "blood") {
        mumaker.textpro(
          "https://textpro.me/horror-blood-text-effect-online-883.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "bookeh") {
        mumaker.textpro(
          "https://textpro.me/bokeh-text-effect-876.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "candy") {
        mumaker.textpro(
          "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "carbon") {
        mumaker.textpro(
          "https://textpro.me/carbon-text-effect-833.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "chocolate") {
        mumaker.textpro(
          "https://textpro.me/chocolate-cake-text-effect-890.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "christmas") {
        mumaker.textpro(
          "https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "circuit") {
        mumaker.textpro(
          "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "cloud") {
        mumaker.textpro(
          "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "demon") {
        mumaker.textpro(
          "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "dropwater") {
        mumaker.textpro(
          "https://textpro.me/dropwater-text-effect-872.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "glitch") {
        mumaker.textpro(
          "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
               { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "future") {
        mumaker.textpro(
          "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
               { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "glitch2") {
        mumaker.textpro(
          "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "joker") {
        mumaker.textpro(
          "https://textpro.me/create-logo-joker-online-934.html",
          [`${text}`]
        )
        .then(async(data) => {
          await m.replyWithPhoto(
             {
              url: data
            },
             { caption: `Made by *NekoSenpai*`
          })
        }).catch((err) => console.log(err));
      } else if (logo === "holographic") {
        mumaker.textpro(
          "https://textpro.me/holographic-3d-text-effect-975.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "magma") {
        mumaker.textpro(
          "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "matrix") {
        mumaker.textpro(
          "https://textpro.me/matrix-style-text-effect-online-884.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "neon") {
        mumaker.textpro(
          "https://textpro.me/neon-text-effect-online-879.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "sketch") {
        mumaker.textpro(
          "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "scifi") {
        mumaker.textpro(
          "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "papercut") {
        mumaker.textpro(
          "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "thunder") {
        mumaker.textpro(
          "https://textpro.me/online-thunder-text-effect-generator-1031.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "thunder2") {
        mumaker.textpro(
          "https://textpro.me/create-thunder-text-effect-online-881.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "wall") {
        mumaker.textpro(
          "https://textpro.me/break-wall-text-effect-871.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      } else if (logo === "transformer") {
        mumaker.textpro(
          "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
          [`${text}`]
        )
          .then(async(data) => {
            await m.replyWithPhoto(
               {
                url: data
              },
              { caption: `Made by *NekoSenpai*`
            })
          }).catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error)
      m.reply("An Error Occurred!!")
    }
  }


const logomenuu = async(m) => {
const LOGOMENU = [
  "3dchristmas",
  "3dneon",
  "3dstone",
  "3dspace",
  "bear",
  "blackpink",
  "bookeh",
  "candy",
  "carbon",
  "chocolate",
  "christmas",
  "cloud",
  "circuit",
  "deepsea",
  "dropwater",
  "demon",
  "future",
  "glitch",
  "glitch2",
  "joker",
  "holographic",
  "magma",
  "matrix",
  "neon",
  "papercut",
  "sketch",
  "scifi",
  "thunder",
  "thunder2",
  "wall",
  "transformer"
]
  const LOGOM = `Available LOGOMAKER MENU :\n\n- ${LOGOMENU.map((menunsfw) => menunsfw.toLowerCase()).join('\n- lg ')}\n`
  m.reply(LOGOM)
}

module.exports = { logomaker,logomenuu }
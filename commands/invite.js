// File name: "ping.js"
// Folder "./commands"
const fetch = require('node-fetch');

module.exports = {
    description: 'Pošle naši pozvánku na váš server pomocí webhooku.',
    category: "server_invite",
    callback: ({ client, message, args }) => {
      message.delete()
      const url = args[0];
      message.reply('Pracuji na tom, chvilku prosím').then(sendMessage())
      function sendMessage(message) {
         fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "username": "PlayInRight.cz | Spolupráce",
                "avatar_url": "https://www.playinright.cz/wp-content/uploads/2020/11/20200801_105227.png",
                "embeds": [
                  {
                    "author": {
                      "name": "Nimixx#7777",
                      "icon_url": "https://cdn.discordapp.com/avatars/271212711407255553/8e547c603dded84ac8a5f1ed08cd4aac.png"
                    },
                    "title": "Projekt PlayInRight.cz",
                    "url": "https://playinright.cz/",
                    "description": "> Náš komunitní projekt je trochu jiný než ostatní \n> Nejdeme cestou jednoho serveru! U nás najde své \n> útočiště každá věková skupina a každý hráč, který \n> není toxický a umí se chovat slušně a dle pravidel. ",
                    "color": 16744192,
                    "fields": [
                      {
                        "name": "**Co u nás najdete?**",
                        "value": ":small_orange_diamond: Skvělý a **přátelský A-team**, který Vám vždy pomůže \n:small_orange_diamond: Více Discord serverů s různým zaměřením! \n:small_orange_diamond: **Aktivní projekt**, který je stále inovován a váží si svých členů \n:small_orange_diamond: **Velké Giveaways a eventy!** \n:small_orange_diamond: Vlastní discord boty od hudebního až support \n:small_orange_diamond: Webový portál + Knowledge base \n:small_orange_diamond: **Vlastní Minecraft server pro nejvěrnější** \n:small_orange_diamond: **NonToxic komunita a pohoda každý den!** \n:small_orange_diamond: Bezpečné prostřední pro všechny zajištuje **Wick** bot! \n:small_orange_diamond: Možnosti spolupráce po dohodě! \n:small_orange_diamond: Každý člen má právo se podílet svými nápady na serverech \n:small_orange_diamond: Support prakticky 24/7 díky našemu mail botovi.",
                      },
                      {
                        "name": "**Servery projektu**",
                        "value": ":small_blue_diamond:**Playinright.cz│Official** - Hlavní server. Věk: 16-27 \n https://discord.gg/yvztsYX \n:small_blue_diamond:**Oxikomania** - Server zaměřený na hraní. Věk 13-18 \n https://discord.gg/ZfUuhSt \n :small_blue_diamond:**Šimiho Discord** - Sever zaměřený na CS:GO. Věk 13-18 \n https://discord.gg/cTzbAZETWD \n :small_blue_diamond:**CZ/SK** - Server zaměřený na povídání a psaní. Věk 13-16 \n https://discord.gg/GGhWchj4yv \n :small_blue_diamond:**CHILLovník** - Server zaměřený na hraní her a Meme \n https://discord.gg/yvQsCkgUd2",
                      }
                    ],
                    "footer": {
                      "text": "PlayInRight © 2021",
                      "icon_url": "https://www.playinright.cz/wp-content/uploads/2020/11/20200801_105227.png"
                    }
                  }
                ]
              })
          });
      }
  }
}
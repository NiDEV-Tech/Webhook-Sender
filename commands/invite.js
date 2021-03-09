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
              body: JSON.stringify({"username": "Hashnode Bot", "content": `Test`})
          });
      }
  }
}
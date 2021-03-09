module.exports = (client, instance) => {
  client.on('message', (message) => {
    if(message.guild==null && message.author.id!=="813483295416909854" && message.content=="/server_invite"){
      message.reply('dosomethinghere')
  }})
}
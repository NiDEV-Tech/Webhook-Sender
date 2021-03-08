const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION'],
})

client.on('ready', () => {
  // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = ''

  // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

  // If you want to disable built in commands you can add them to this array. Simply uncomment the strings to disable that command.

  const disabledDefaultCommands = [
    // 'help',
    // 'command',
    // 'language',
    // 'prefix',
    // 'requiredrole'
  ]

  // Initialize WOKCommands with specific folders and MongoDB
  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true, // Show start up warnings
    dbOptions,
    disabledDefaultCommands
  })
    // Set your MongoDB connection path
    .setMongoPath(process.env.MONGO_URI)
    // Set the default prefix for your bot, it is ! by default
    .setDefaultPrefix('!')
    // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
    .setColor(0xff0000)
})

client.login(process.env.TOKEN)
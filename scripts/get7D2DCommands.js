const SdtdApi = require('7daystodie-api-wrapper');
const fs = require('fs');
require('dotenv').config()

const sdtdServer = {
  ip: process.env.CPM_IP,
  port: process.env.CPM_PORT,
  adminUser: process.env.CPM_ADMINUSER,
  adminToken: process.env.CPM_ADMINTOKEN
}

main();

async function main() {
  const data = await SdtdApi.getAllowedCommands(sdtdServer);
  const commands = data.commands
    // We add the non-prefixed alias of the command
    // This helps our search understand stuff better
    .map(_ => {
      const short = _.command.replace('cpm-', '');
      if (short !== _.command) {
        _.command += `, ${short}`
      }
      return _
    })

  console.log(commands);

  fs.writeFileSync('docs/.vuepress/public/assets/commands/cpmCommands.json', JSON.stringify(commands))
}

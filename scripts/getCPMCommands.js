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
  const commands = data.commands.filter(_ => _.command.startsWith('cpm-'))
  console.log(commands);
  fs.writeFileSync('docs/.vuepress/public/assets/cpmCommands.json', JSON.stringify(commands))
}

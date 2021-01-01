const fs = require('fs');
const path = require('path')

main();


async function main() {
  const normalizedPath = path.join(__dirname, '../CSMM-src/api/hooks/sdtdCommands/commands');
  const commands = []

  fs.readdirSync(normalizedPath).forEach((file) => {
    let command = require(path.join(normalizedPath, file));
    commands.push(new command({}))
  });


  const parsed = commands.map(_ => {
    if (_.aliases && _.aliases.length) {
      _.aliases = _.aliases.join(', ')
    }
    return _
  })
  console.log(parsed);

  fs.writeFileSync('../docs/.vuepress/public/assets/commands/csmmCommands.json', JSON.stringify(parsed))
}
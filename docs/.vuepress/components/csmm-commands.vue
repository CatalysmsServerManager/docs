<template>
  <table>
    <tr>
      <th v-for="header in headers">{{ header.text }}</th>
    </tr>

    <tr v-for="command in commands">
      <td>{{ command.name }}</td>
      <td>{{ command.aliases }}</td>
      <td>{{ command.description }}</td>
      <td>{{ command.extendedDescription }}</td>
    </tr>
  </table>
</template>

<script>
const commands = require("../public/assets/commands/csmmCommands.json");

export default {
  data() {
    return {
      headers: [
        { text: "Command", value: "name" },
        { text: "Aliases", value: "aliases" },
        { text: "Description", value: "description" },
        { text: "Help", value: "extendedDescription" },
      ],
      commands,
    };
  },
};
</script>

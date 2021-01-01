<template>
  <table>
    <tr>
      <th v-for="header in headers">{{ header.text }}</th>
    </tr>

    <tr v-for="command in commands">
      <td>{{ command.command }}</td>
      <td>{{ command.description }}</td>
      <td>
        <p v-for="line in command.help.split('\n')">{{ line }}<br /></p>
      </td>
    </tr>
  </table>
</template>

<script>
const commands = require("../public/assets/cpmCommands.json");

export default {
  data() {
    return {
      headers: [
        { text: "Command", value: "command" },
        { text: "Description", value: "description" },
        { text: "Help", value: "help" },
      ],
      commands,
    };
  },
};
</script>

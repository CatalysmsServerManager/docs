<template>
  <table>
    <tr>
      <th v-for="header in headers">{{ header.text }}</th>
    </tr>

    <tr v-for="command in commands">
      <td v-for="header in headers">{{ command[header.value] }}</td>
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

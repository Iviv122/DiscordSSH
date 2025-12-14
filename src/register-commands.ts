// use by running gen-com
import { BOT_ID, GUILD_ID, TOKEN } from "@/config";
import { DefaultWebSocketManagerOptions, REST, Routes } from "discord.js";

const commands = [
  {
    name: "run",
    description: "Run command",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationGuildCommands(BOT_ID, GUILD_ID), {
      body: commands,
    });

    console.log("Slash commands where registered succesfully!");
  } catch (error) {
    console.log("Error ocluded: ", error);
  }
})();

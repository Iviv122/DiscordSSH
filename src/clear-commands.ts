// use by running gen-remove
import { BOT_ID, GUILD_ID, TOKEN } from "@/config";
import { REST, Routes } from "discord.js";

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("Removing slash commands...");

    rest
      .put(Routes.applicationGuildCommands(BOT_ID, GUILD_ID), { body: [] })
      .then(() => console.log("Successfully deleted all guild commands."));
    rest
      .put(Routes.applicationCommands(BOT_ID), { body: [] })
      .then(() => console.log("Successfully deleted all application commands."))
      .catch(console.error);

    console.log("Slash commands where removed succesfully!");
  } catch (error) {
    console.log("Error ocluded: ", error);
  }
})();

// idfk why
import { TOKEN } from "@/config";
import { ActivityType, Client, IntentsBitField } from "discord.js";

try {
  const client = new Client({
    allowedMentions: {
      parse: ["users", "roles"],
      repliedUser: false,
    },
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

  client.on("clientReady", (c) => {
    console.log(`The bot ${c.user.tag} is ready to serve you!`);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const commandName = interaction.commandName;
    console.log(`searching for ${commandName} command`);

    if (commandName === "hey") {
      await interaction.reply("HEY");
    }

    if (commandName === "test") {
      await interaction.reply("test");
    }

    if (commandName === "ping") {
      await interaction.reply("pong");
    }

    if (commandName === "run") {
      await interaction.reply("running");
    }
  });

  console.log("Logging in");
  client.login(TOKEN);
  console.log("Succesfull login");

  client.user?.setActivity("Serving SSH", { type: ActivityType.Custom });
} catch (error) {
  console.log("Error starting bot: ", error);
  throw error;
}

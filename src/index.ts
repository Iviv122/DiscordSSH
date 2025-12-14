// idfk why
import "dotenv/config";
import { defaultConfig } from "@/config";
import { ActivityType, Client, IntentsBitField } from "discord.js";

if (!!!defaultConfig.token) {
  throw "No token set";
}

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

  client.on("messageCreate", (message) => {
    console.log("Got new message:", message.content);
    if (message.content === "run") {
      message.reply("HEY");
    }
  });

  console.log("Logging in");
  client.login(defaultConfig.token);
  console.log("Succesfull login");

  client.user?.setActivity("Serving SSH", { type: ActivityType.Custom });
} catch (error) {
  console.log("Error starting bot: ", error);
  throw error;
}

import "dotenv/config";

console.log("Checking credentials");

export const TOKEN = process.env.TOKEN || "";
export const GUILD_ID = process.env.GUILD_ID || "";
export const BOT_ID = process.env.BOT_ID || "";
export const CHANNEL_ID = process.env.CHANNEL_ID || "";

if (TOKEN.trim() === "") {
  throw "No token set";
}
if (GUILD_ID === "") {
  throw "GUILD_ID is unset";
}
if (BOT_ID === "") {
  throw "BOT_ID is unset";
}
if (CHANNEL_ID === "") {
  throw "CHANNEL_ID is unset";
}

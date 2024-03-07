const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Function to send the puzzle notification
function sendPuzzleNotification() {
  const channel = client.channels.cache.find(
    (channel) => channel.name === "puzzle-of-the-day",
  );

  if (!channel) {
    console.error("Channel not found!");
    return;
  }

  const puzzlesRole = channel.guild.roles.cache.find(
    (role) => role.name === "Puzzles",
  );
  if (!puzzlesRole) {
    console.error("Puzzles role not found!");
    return;
  }

  const puzzleMessage = "https://www.chess.com/daily-chess-puzzle";
  const revealTime = "6pm";
  const notification = `${puzzleMessage} ${puzzlesRole.toString()} Answer revealed at: ${revealTime}`;

  channel
    .send(notification)
    .then(() => console.log("Puzzle notification sent!"))
    .catch(console.error);
}

// When the bot is ready, send the puzzle notification immediately
client.once("ready", () => {
  console.log("Bot is ready!");
  sendPuzzleNotification();
});

// "Ping pong" functionality
client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

// Login with your bot token
client.login(process.env.token);

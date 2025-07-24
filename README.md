# Daily Chess Puzzle Discord Bot

A custom Discord bot built for the Belgium Campus Chess Club to promote daily chess engagement among members.

## 🧠 Features

- Fetches the [Chess.com Daily Puzzle](https://www.chess.com/daily-chess-puzzle) every day
- Automatically posts the puzzle to a Discord server channel
- Tags members with a specific role (e.g. `@DailyPuzzle`) to encourage participation

## ⚙️ Technologies Used

- **Node.js** – runtime for JavaScript
- **Discord.js** – for interacting with the Discord API
- **Chess.com API** – for fetching daily puzzles
- **Replit** – used as a hosting platform

## 🔔 Use Case

This bot was originally created by the founder of the Belgium Campus Chess Club. The goal was to boost activity and community interaction by sharing the daily chess puzzle with all members tagged under the `@DailyPuzzle` role.

## 🚀 Deployment

Hosted on [Replit](https://replit.com/) using a basic cron-like scheduler to run daily. Alternatively, you can run it locally using Node.js and a task scheduler (like `cron` on Linux or Task Scheduler on Windows).

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daily-chess-discord-bot.git
   cd daily-chess-discord-bot
2. Install dependencies
   ```bash
   npm install
3. Create a .env file and add your bot token and channel ID:
   ```bash
   DISCORD_TOKEN=your_token_here
   PUZZLE_CHANNEL_ID=your_channel_id_here
   ROLE_ID=your_daily_puzzle_role_id
4. Run the application:
   ```bash
   node index.js
 


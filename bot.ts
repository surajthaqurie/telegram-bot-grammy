/* Imports */
import { Bot } from "grammy";
import { apiThrottler } from "@grammyjs/transformer-throttler";

/* Variables */
const BOT_TOKEN = "5807204792:AAHIQs9El12ZKKNE-osvWNzSizMJY7nIvBA";
let botInfo;

const bot = new Bot(BOT_TOKEN);
const throttler = apiThrottler();
bot.api.config.use(throttler);

bot.init().then(() => {
  botInfo = bot.botInfo;
});

/* 
    Receiving Messages
    bot.command("start", (ctx) => ctx.reply("welcome! up and running"));
    bot.on("message", (ctx) => ctx.reply("Got another message!"));
    -------------
    bot.on("message", (ctx) => {
        const message = ctx.message;
        console.log(message);
    });
    bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));
*/
let string = "--------------------------------------------------";

/* 
Sending Messages
bot.api.sendMessage("624934969", "Hello");
bot.api.sendMessage(
    624934969,
    "*Hi\\!* _Welcome_ to [grammY](https://grammy.dev)\\.",
    { parse_mode: "Markdown" }
    // );
    
    bot.api.sendMessage(
        624934969,
        '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY</a>.',
        { parse_mode: "HTML" }
        );
*/
string = "--------------------------------------------------";
/* 
    Sending Messages With Reply
    bot.hears("ping", async (ctx) => {
        // `reply` is an alias for `sendMessage` in the same chat (see next section).
        await ctx.reply("pong", {
            // `reply_to_message_id` specifies the actual reply feature.
            reply_to_message_id: ctx.msg.message_id,
        });
    });
*/
string = "--------------------------------------------------";
/* 
    Force Reply
bot.command("start", async (ctx) => {
    await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
        // Make Telegram clients automatically show a reply interface to the user.
        reply_markup: { force_reply: true },
    });
});
*/
string = "--------------------------------------------------";
/* 
Context
bot.on("message", (ctx) => {
    // `txt` will be a `string` when processing text messages.
    // It will be `undefined` if the received message does not have any message text,
    // e.g. photos, stickers, and other messages.
    const txt = ctx.message.text;
    console.log(txt);
});

bot.on("edited_message", (ctx) => {
    // Get the new, edited, text of the message.
    const editedText = ctx.editedMessage.text;
    console.log(editedText);
});
*/

bot.on("message:entities", (ctx) => {
  // Get all the entities.
  const entities = ctx.entities();

  // Get the first entity's text.
  entities[0].text;

  // Get email entities.
  const emails = ctx.entities("email");
  console.log(emails);

  // Get phone and email entities.
  const phonesAndEmails = ctx.entities(["email", "phone_number"]);
  console.log(phonesAndEmails);
});

bot.start();

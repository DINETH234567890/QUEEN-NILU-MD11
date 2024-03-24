/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;ZzNzEahY#k3stSrbbfIQrsKq8yHSOC3mI7neiOdwFAXyGywm0A' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://dineth_wish_user:4K9ICdRNuq0HMKtVbohgyew28nwNeXij@dpg-cmo7e16n7f5s73d3d14g-a.frankfurt-postgres.render.com/dineth_wish'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94713466375'

global.OWNER_NAME = 'SHAGEE_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'KING SHAGEE'

global.FOOTER = 'KING SHAGEE 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Janiya 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'ʜᴀᴄᴋɪɴɢ ᴋɪɴɢᴅᴏᴍ ꜱʜᴀɢᴇᴇ



𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐌𝐄 𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐃 𝐎𝐅 𝐒𝐄𝐑𝐕𝐈𝐂𝐄 𝐑𝐄𝐂𝐎𝐕𝐄𝐑 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
🧑🏻‍💻Professional🧑🏻‍💻 
📵𝐍𝐎 𝐒𝐂𝐀𝐌 📵
📲𝗙𝗮𝗰𝗲𝗯ook 𝗿𝗲𝗰𝗼𝘃𝗲𝗿𝘆 ✅
📲𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 ✅
📲𝗚𝗺𝗮𝗶𝗹 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 ✅
📲𝗬𝗮𝗵𝗼𝗼 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲𝗪𝗶𝗻𝗱𝗼𝘄𝘀 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲𝗧𝗼𝘄𝗲𝗿 𝗹𝗼𝗰𝗮𝘁𝗶𝗼𝗻 𝗙𝗶𝗻𝗱𝗲𝗿✅ 𝗧𝗼𝗼𝗹𝘀
📲 𝗕𝗶𝘁𝗰𝗼𝗶𝗻 𝗿𝗲𝗰𝗼𝘃𝗲𝗿𝘆 ✅
📲 𝗘𝘁𝗵𝗲𝗿𝗲𝘂𝗺 𝗿𝗲𝗰𝗼𝘃𝗲𝗿𝘆 ✅
📲𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗡𝘂𝗺𝗯𝗲𝗿✅ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 
📲𝗔𝗻𝗱𝗿𝗼𝗶𝗱 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲𝗩𝗶𝗿𝘂𝘀 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 ✅
📲 𝗜𝗽 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 𝗛𝗮𝗰𝗸✅
📲𝗪𝗶𝗳𝗶 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅ 
📲𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅ 
📲 𝗖𝗮𝗺𝗲𝗿𝗮 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗖𝗿𝗮𝗰𝗸𝗶𝗻𝗴 ✅
📲 𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝗛𝗮𝗰𝗸𝗶𝗻𝗴✅
📲𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 𝗧𝗿𝗮𝗰𝗶𝗻𝗴✅
📲 𝗙𝘂𝗻𝗱𝘀 𝗿𝗲𝗰𝗼𝘃𝗲𝗿𝘆✅' // Set Alive Message

global.MAX_SIZE = '1000' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

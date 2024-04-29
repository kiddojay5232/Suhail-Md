const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Kenya,Mombasa."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "704726410";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_16_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0VQVVBnQm45eHhmbE1SYnBrdlZTWWZwZEFkVlRzd2Y2aWpHajk5dStrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamUzY3J6dFdRNVdOQXd1d21QbHNjZ1wiLFxuICBcInBob25lSWRcIjogXCIyNGJhODQ2NC1mZDM2LTQ4MGEtOTc4MC1kMjE5MDJmNGViMTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMjgsXG4gICAgICAyNTAsXG4gICAgICAxMTQsXG4gICAgICAxMTAsXG4gICAgICAxMDIsXG4gICAgICAyMjcsXG4gICAgICAxMjIsXG4gICAgICAyMzgsXG4gICAgICAyMixcbiAgICAgIDc2LFxuICAgICAgMTE3LFxuICAgICAgNzUsXG4gICAgICAxODAsXG4gICAgICA3NixcbiAgICAgIDkwLFxuICAgICAgMTk4LFxuICAgICAgMTE3LFxuICAgICAgMyxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMjEzLFxuICAgICAgNzQsXG4gICAgICAyMTIsXG4gICAgICAzLFxuICAgICAgNSxcbiAgICAgIDc0LFxuICAgICAgMjE1LFxuICAgICAgMTIyLFxuICAgICAgMTAwLFxuICAgICAgMjI0LFxuICAgICAgMTQwLFxuICAgICAgMTA0LFxuICAgICAgNTQsXG4gICAgICAxMTcsXG4gICAgICAyNDYsXG4gICAgICAyNixcbiAgICAgIDEzMyxcbiAgICAgIDIwNyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1YW9wVUZFTk9TdmJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibzVXcDJ3ZVF6d1dxdysrNll2aWFyY1c2ZVF4QlVGL2lGUXo3azU5dmFtVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQc3lWNHNOMFdlSG9nVVRFdTc5VWxMNkhpK3EvT3hVZlg3dnJqQzNsVWgxeEN4TnlRbzNOakQyUjJLbWplZEI4TlNKaHlhQVE4WkFWemUzdlc5ZkxCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxMDNzT2VlMlJGZThHTHNrUTl6ZTNhTUVTT1lBdHNibHhHcUJkSUVxS2RDcUp6QVYzRGdSb1J5dU9Zc0NZM0xXYmR3a1hrZFM5TWFkdDZZYVBKajFnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNDcyNjQxMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAyNTExMjYxNjE0NTg6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLaWRkbyBKYXlcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNDcyNjQxMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDM3NDk5OFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

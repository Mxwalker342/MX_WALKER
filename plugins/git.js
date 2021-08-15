const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://images.app.goo.gl/hCvtqFwzT2ahzi7q6";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Muhammed_nadeem*
*owner number wa.me/919074208013*
*bot setting video : https://youtu.be/_D4ZYuUSXjs
*githublink       https://github.com/Mxwalker342/MX_WALKER*
*audio commads    https://github.com/Mxwalker342/MX_WALKER/tree/master/uploads*
*sticker commads  https://github.com/Mxwalker342/MX_WALKER/tree/master/uploads*
`}) 

}));

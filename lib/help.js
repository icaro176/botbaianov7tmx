const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, limitCounts) => { 
	return `
╭───「 USUÁRIO 」
│ *Nome* : ${pushname}
│ *Número* : wa.me/${sender.split("@")[0]}
│ *Registrado* : ✓
╰───────────
╭───「 CONTA 」
│ *XP* : ${getLevelingXp(sender)}/${reqXp} 
│ *Level* : ${getLevelingLevel(sender)}
│ *Limite* : ${limitCounts}
│ *Dinheiro* : R$: ${uangku}
│ *Patente* : ${role}
╰───────────
╭───「 INFO 」
│ *${prefix}info*
│ *${prefix}ping*
╰─

╭─⇨ ★ *MAKER MENU* ★
│ *${prefix}sticker*
│ *${prefix}stiker*
│ *${prefix}s*
│ *${prefix}toimg*
│ *${prefix}tts* <idioma> <txt>
│ *${prefix}qrcode* <texto>
│ *${prefix}ocr*
│ *${prefix}quotemaker* txt/txt2/tema
│ *${prefix}nulis* nome/nmr/txt
│ *${prefix}bitly* <link>
╰─
╭─⇨ ツ *FUN MENU* ツ
│ *${prefix}bisakah* <texto>
│ *${prefix}kapankah* <texto>
│ *${prefix}apakah* <texto>
│ *${prefix}rate* <texto>
│ *${prefix}watak* <@tag>
│ *${prefix}hobby* <@tag>
│ *${prefix}persengay* <@tag>
│ *${prefix}truth*
│ *${prefix}dare*
│ *${prefix}slap* <@tag>
╰─
╭─⇨ 〆 *MEDIA MENU* 〆
│ *${prefix}pinterest*
│ *${prefix}tiktokstalk* <usuário>
│ *${prefix}wait*
│ *${prefix}map* <cidade>
╰─
╭─⇨ 〩 *DOWNLOAD* 〩
│ *${prefix}joox* <cantor/a - título>
│ *${prefix}play* <título>
│ *${prefix}tomp3*
│ *${prefix}lirik* <título>
│ *${prefix}moddroid* <app>
│ *${prefix}happymod* <app>
╰─
╭─⇨ 웃 *NSFW MENU* 웃
│ *${prefix}anjing*
│ *${prefix}blowjob*
│ *${prefix}pokemon*
│ *${prefix}husbu*
│ *${prefix}nangis* <choro>
│ *${prefix}cium* <beijo>
│ *${prefix}peluk* <abraço>
│
│ *ANIME*
│ *${prefix}naruto*
│ *${prefix}minato*
│ *${prefix}boruto*
│ *${prefix}hinata*
│ *${prefix}sakura*
│ *${prefix}sasuke*
│ *${prefix}toukachan*
│ *${prefix}rize*
│ *${prefix}akira*
│ *${prefix}itori*
│ *${prefix}kurumi*
│ *${prefix}miku*
│ *${prefix}anime*
│ *${prefix}ranime*
│ *${prefix}animecry*
╰─
╭─⇨ 유 *LIMITE & DINHEIRO* 유
│ *${prefix}limit* 
│ *${prefix}buylimit* <total>
│ *${prefix}transfer* <@tag|total>
│ *${prefix}dompet*
╰─
╭─⇨ 々 *GRUPO MENU* 々
│ *${prefix}hidetag* <texto>
│ *${prefix}linkgc*
│ *${prefix}infogc*
│ *${prefix}tagall*
│ *${prefix}setpp*
│ *${prefix}fitnah* <@tag/msg/msg bot>
│ *${prefix}add* <@tag>
│ *${prefix}kick* <@tag>
│ *${prefix}setname* <texto>
│ *${prefix}setdesc* <texto>
│ *${prefix}demote* <@tag>
│ *${prefix}promote* <@tag>
│ *${prefix}listadmin*
│ *${prefix}testime*
│ *${prefix}timer*
│ *${prefix}addbadword* <texto>
│ *${prefix}delbadword* <texto>
│ *${prefix}listbadword*
│
│ *ATIVAR*
│ *${prefix}group* [abrir/fechar]
│ *${prefix}leveling* [enable/disable]
│ *${prefix}nsfw* [1/0]
│ *${prefix}simih* [1/0]
│ *${prefix}welcome* [1/0]
│ *${prefix}antilink* [1/0]
│ *${prefix}nobadword* [enable/disable]
╰─
╭─⇨ ҂ *ATIVAR* ҂
│ *${prefix}group* [abrir/fechar]
│ *${prefix}leveling* [enable/disable]
│ *${prefix}nsfw* [1/0]
│ *${prefix}simih* [1/0]
│ *${prefix}welcome* [1/0]
╰─
╭─⇨ ☬ *PROPRIETÁRIO* ☬
│ *${prefix}bc* <texto>
│ *${prefix}bcgc* <texto>
│ *${prefix}kickall*
│ *${prefix}setreply* <texto>
│ *${prefix}setprefix* <símbolo>
│ *${prefix}giftlimit* <@tag total>
│ *${prefix}setmemlimit* <total>
│ *${prefix}clearall*
│ *${prefix}block* <@tag>
│ *${prefix}unblock* <@tag>
│ *${prefix}leave*
│ *${prefix}event* [1/0]
│ *${prefix}clone* <@tag>
│ *${prefix}setppbot*
│ *${prefix}listonline*
╰─
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
                 © *ᏆᏟᎪᎡØ*
`
}
exports.help = help



  

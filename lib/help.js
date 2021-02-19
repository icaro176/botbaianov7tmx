const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, limitCounts) => { 
	return `
╭───「 USUÁRIO 」
│ *Nome* : ${pushname}
│ *Número* : wa.me/${sender.split("@")[0]}
╰──────────────
╭───「 CONTA 」
│ *Dinheiro* : R$:${uangku}
│ *XP* : ${getLevelingXp(sender)}/${reqXp}
│ *Limite* : ${limitCounts}
│ *Level* : ${getLevelingLevel(sender)}
│ *Patente* : ${role}
╰───────────────
╭───「 INFO 」
│ *Registrado* : ꪜ
│ *${prefix}info*
│ *${prefix}ping*
╰──「 BOT BAIANO 」
╭───
│ _*By ❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥*_
╰───────────────
╭─≽ *FIGURINHAS*
│≽ *${prefix}sticker*
│≽ *${prefix}stiker*
│≽ *${prefix}s*
╰─
╭─≽ *MENU CRIADOR*
│≽ *${prefix}toimg*
│≽ *${prefix}tts* <idioma> <txt>
│≽ *${prefix}qrcode* <texto>
│≽ *${prefix}ocr*
│≽ *${prefix}quotemaker* txt/txt2/tema
│≽ *${prefix}nulis* nome/nmr/txt
│≽ *${prefix}translate* en/Bom Dia
│≽ *${prefix}bitly* <link>
│≽ *${prefix}tinyurl* <link>
│≽ *${prefix}tahta* <texto>
│≽ *${prefix}imoji*
│≽ *${prefix}wink*
│≽ *${prefix}textstyle* <texto>
╰─
╭─≽ *FUN MENU*
│≽ *${prefix}bisakah* <texto>
│≽ *${prefix}kapankah* <texto>
│≽ *${prefix}apakah* <texto>
│≽ *${prefix}rate* <texto>
│≽ *${prefix}watak* <@tag>
│≽ *${prefix}hobby* <@tag>
│≽ *${prefix}persengay* <@tag>
│≽ *${prefix}truth*
│≽ *${prefix}dare*
│≽ *${prefix}slap* <@tag>
╰─
╭─≽ *MEDIA MENU*
│≽ *${prefix}pinterest*
│≽ *${prefix}tiktokstalk* <usuário>
│≽ *${prefix}wait*
│≽ *${prefix}map* <cidade>
╰─
╭─≽ *DOWNLOAD*
│≽ *${prefix}joox* <cantor/a - título>
│≽ *${prefix}play* <título>
│≽ *${prefix}tomp3*
│≽ *${prefix}lirik* <título>
│≽ *${prefix}moddroid* <app>
│≽ *${prefix}happymod* <app>
╰─
╭─≽ *NSFW MENU*
│≽ *${prefix}anjing*
│≽ *${prefix}pokemon*
│≽ *${prefix}husbu*
│≽ *${prefix}nangis*
│≽ *${prefix}cium*
│≽ *${prefix}peluk*
│≽ *${prefix}randomkpop*
│≽ *${prefix}blowjob*
│≽ *${prefix}nsfwneko*
│≽ *${prefix}nsfwtrap*
│≽ *${prefix}hentai*
│
│ *ANIME*
│≽ *${prefix}naruto*
│≽ *${prefix}minato*
│≽ *${prefix}boruto*
│≽ *${prefix}hinata*
│≽ *${prefix}sakura*
│≽ *${prefix}sasuke*
│≽ *${prefix}toukachan*
│≽ *${prefix}rize*
│≽ *${prefix}akira*
│≽ *${prefix}itori*
│≽ *${prefix}kurumi*
│≽ *${prefix}miku*
│≽ *${prefix}anime*
│≽ *${prefix}animecry*
│≽ *${prefix}ranime*
╰─
╭─≽ *LIMITE & DINHEIRO*
│≽ *${prefix}limit* 
│≽ *${prefix}buylimit* <quantidade>
│≽ *${prefix}transfer* <@tag | total>
│≽ *${prefix}dompet*
╰─
╭─≽ *MENU GRUPO*
│≽ *${prefix}hidetag* <texto>
│≽ *${prefix}linkgc*
│≽ *${prefix}infogc*
│≽ *${prefix}tagall*
│≽ *${prefix}setpp*
│≽ *${prefix}fitnah* <@tag/msg/msg bot>
│≽ *${prefix}add* <@tag>
│≽ *${prefix}kick* <@tag>
│≽ *${prefix}setname* <texto>
│≽ *${prefix}setdesc* <texto>
│≽ *${prefix}demote* <@tag>
│≽ *${prefix}promote* <@tag>
│≽ *${prefix}listadmin*
│≽ *${prefix}testime*
│≽ *${prefix}timer*
│≽ *${prefix}addbadword* <texto>
│≽ *${prefix}delbadword* <texto>
│≽ *${prefix}listbadword*
│
│ *ATIVAR*
│≽ *${prefix}group* [abrir/fechar]
│≽ *${prefix}leveling* [enable/disable]
│≽ *${prefix}nsfw* [1/0]
│≽ *${prefix}simih* [1/0]
│≽ *${prefix}welcome* [1/0]
│≽ *${prefix}antilink* [1/0]
│≽ *${prefix}nobadword* [enable/disable]
╰─
╭─≽ *PROPRIETÁRIO* 
│≽ *${prefix}bc* <texto>
│≽ *${prefix}bcgc* <texto>
│≽ *${prefix}kickall*
│≽ *${prefix}setreply* <texto>
│≽ *${prefix}setprefix* <símbolo>
│≽ *${prefix}giftlimit* <@tag total>
│≽ *${prefix}setmemlimit* <total>
│≽ *${prefix}clearall*
│≽ *${prefix}block* <@tag>
│≽ *${prefix}unblock* <@tag>
│≽ *${prefix}leave*
│≽ *${prefix}event* [1/0]
│≽ *${prefix}clone* <@tag>
│≽ *${prefix}setppbot*
│≽ *${prefix}listonline*
│≽ *${prefix}eval*
╰───────────────
`
}
exports.help = help



  

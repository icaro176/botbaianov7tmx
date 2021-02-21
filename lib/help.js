const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
╭───「 USUÁRIO 」
│ *Nome* : ${pushname}
│ *Número* : wa.me/${sender.split("@")[0]}
│ *Registrado* : ✓
╰───────────
╭───「 CONTA 」
│ *XP* : ${getLevelingXp(sender)}/${reqXp} 
│ *Level* : ${getLevelingLevel(sender)}
│ *Dinheiro* : R$: ${uangku}
│ *Patente* : ${role}
╰───────────
╭───「 INFO 」
│ *${prefix}info*
│ *${prefix}ping*
╰─

╭─⇨ ★ *MAKER MENU* ★
│ 1. *${prefix}sticker*
│ 2. *${prefix}stiker*
│ 3. *${prefix}s*
│ 4. *${prefix}toimg*
│ 5. *${prefix}tts* <idioma> <txt>
│ 6. *${prefix}qrcode* <texto>
│ 7. *${prefix}ocr*
│ 8. *${prefix}ttp* <texto>
│ 9. *${prefix}quotemaker* txt/txt2/tema
│ 10. *${prefix}pornhub* <texto&texto2>
│ 11. *${prefix}hartatahta* <texto>
│ 12. *${prefix}glitchtext* <texto&texto2>
│ 13. *${prefix}blackpink* <texto>
│ 18. *${prefix}nulis* nome/nmr/txt
│ 19. *${prefix}bitly* <link>
╰─
╭─⇨ ツ *FUN MENU* ツ
│ 20. *${prefix}bisakah* <texto>
│ 21. *${prefix}kapankah* <texto>
│ 22. *${prefix}apakah* <texto>
│ 23. *${prefix}rate* <texto>
│ 24. *${prefix}watak* <@tag>
│ 25. *${prefix}hobby* <@tag>
│ 26. *${prefix}persengay* <@tag>
│ 27. *${prefix}truth*
│ 28. *${prefix}dare*
│ 29. *${prefix}slap* <@tag>
│ 30. *${prefix}slot*
╰─
╭─⇨ 〆 *MEDIA MENU* 〆
│ 31. *${prefix}pinterest*
│ 32. *${prefix}pokemon*
│ 33. *${prefix}randomkpop*
│ 32. *${prefix}asupan*
│ 34. *${prefix}tiktokstalk* <usuário>
│ 35. *${prefix}igstalk* <usuário>
│ 35. *${prefix}ssweb* <link>
│ 35. *${prefix}wait*
│ 36. *${prefix}map* <cidade>
╰─
╭─⇨ 〩 *DOWNLOAD* 〩
│ 37. *${prefix}joox* <cantor/a - título>
│ 38. *${prefix}play* <título>
│ 39. *${prefix}tiktod* <link>
│ 39. *${prefix}smule* <link>
│ 39. *${prefix}ytmp4* <link>
│ 39. *${prefix}ytmp3* <link>
│ 40. *${prefix}tomp3*
│ 41. *${prefix}lirik* <título>
│ 42. *${prefix}moddroid* <app>
│ 43. *${prefix}happymod* <app>
╰─
╭─⇨ 웃 *ANIMAIS* 웃
│ 44. *${prefix}anjing* <cachorro>
│ 44. *${prefix}kucing* <gato>
╰─
╭─⇨ 웃 *NSFW MENU* 웃
│ 45. *${prefix}hentai*
│ 45. *${prefix}blowjob*
│ 45. *${prefix}nekonime*
│ 45. *${prefix}nekonime2*
│ 45. *${prefix}koten*
│ 45. *${prefix}waifu*
│ 45. *${prefix}pussy*
│ 45. *${prefix}pussyjpg*
│ 45. *${prefix}nsfwavatar*
│ 45. *${prefix}yuri*
│ 45. *${prefix}anal*
│ 45. *${prefix}bj*
╰─
╭─⇨ 〄 *ANIME* 〄
│ 50. *${prefix}naruto*
│ 51. *${prefix}minato*
│ 52. *${prefix}boruto*
│ 53. *${prefix}hinata*
│ 54. *${prefix}sakura*
│ 55. *${prefix}sasuke*
│ 56. *${prefix}toukachan*
│ 57. *${prefix}rize*
│ 58. *${prefix}akira*
│ 59. *${prefix}itori*
│ 60. *${prefix}kurumi*
│ 61. *${prefix}miku*
│ 62. *${prefix}anime*
│ 63. *${prefix}ranime*
│ 64. *${prefix}animecry*
│ 46. *${prefix}husbu*
│ 64. *${prefix}wallpaper*
│ 64. *${prefix}avatar*
│ 64. *${prefix}baka*
│ 64. *${prefix}foxgirl*
│ 47. *${prefix}nangis* <choro>
│ 48. *${prefix}cium* <beijo>
│ 49. *${prefix}peluk* <abraço>
╰─
╭─⇨ 유 *LIMITE & DINHEIRO* 유
│ 65. *${prefix}limit* 
│ 66. *${prefix}buylimit* <total>
│ 67. *${prefix}transfer* <@tag|total>
│ 68. *${prefix}dompet*
╰─
╭─⇨ 々 *GRUPO MENU* 々
│ 69. *${prefix}hidetag* <texto>
│ 70. *${prefix}linkgc*
│ 71. *${prefix}infogc*
│ 72. *${prefix}tagall*
│ 73. *${prefix}setpp*
│ 74. *${prefix}fitnah* <@tag/msg/msg bot>
│ 75. *${prefix}add* <@tag>
│ 76. *${prefix}kick* <@tag>
│ 77. *${prefix}setname* <texto>
│ 78. *${prefix}setdesc* <texto>
│ 79. *${prefix}demote* <@tag>
│ 80. *${prefix}promote* <@tag>
│ 81. *${prefix}listadmin*
│ 82. *${prefix}testime*
│ 83. *${prefix}timer*
│ 84. *${prefix}addbadword* <texto>
│ 85. *${prefix}delbadword* <texto>
│ 86. *${prefix}listbadword*
│
│ *ATIVAR*
│ 87. *${prefix}group* [abrir/fechar]
│ 88. *${prefix}leveling* [enable/disable]
│ 89. *${prefix}nsfw* [1/0]
│ 90. *${prefix}simih* [1/0]
│ 91. *${prefix}welcome* [1/0]
│ 92. *${prefix}antilink* [1/0]
│ 93. *${prefix}nobadword* [enable/disable]
╰─
╭─⇨ ☬ *PROPRIETÁRIO* ☬
│ 94. *${prefix}bc* <texto>
│ 95. *${prefix}bcgc* <texto>
│ 96. *${prefix}kickall*
│ 97. *${prefix}setreply* <texto>
│ 98. *${prefix}setprefix* <símbolo>
│ 99. *${prefix}giftlimit* <@tag total>
│ 100. *${prefix}setmemlimit* <total>
│ 101. *${prefix}clearall*
│ 102. *${prefix}block* <@tag>
│ 103. *${prefix}unblock* <@tag>
│ 104. *${prefix}leave*
│ 105. *${prefix}event* [1/0]
│ 106. *${prefix}clone* <@tag>
│ 107. *${prefix}setppbot*
│ 108. *${prefix}listonline*
╰─
*By ❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥*
`
}
exports.help = help



  

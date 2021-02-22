const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
╭───「 USUÁRIO 」
│ *Nome* : ${pushname}
│ *Número* : wa.me/${sender.split("@")[0]}
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
╰───────────

╭ ★ *MENU SIMPLES* ★
│ 1. *${prefix}sticker*
│ 2. *${prefix}stiker*
│ 3. *${prefix}s*
│ 5. *${prefix}tts* <idioma> <txt>
│ 7. *${prefix}ocr*
╰─
╭ ★ *FOTOS PERSONALISADAS* ★
│ 8. *${prefix}quotemaker* txt/txt2/tema
│ 9. *${prefix}pornhub* <texto&texto2>
│ 10. *${prefix}hartatahta* <texto>
│ 11. *${prefix}glitchtext* <texto&texto2>
│ 12. *${prefix}blackpink* <texto>
╰─
╭ ツ *FUN MENU* ツ
│ 15. *${prefix}bisakah* <texto>
│ 16. *${prefix}kapankah* <texto>
│ 17. *${prefix}apakah* <texto>
│ 18. *${prefix}rate* <texto>
│ 19. *${prefix}watak* <@tag>
│ 20. *${prefix}hobby* <@tag>
│ 21. *${prefix}persengay* <@tag>
│ 22. *${prefix}truth*
│ 23. *${prefix}dare*
│ 24. *${prefix}slap* <@tag>
│ 7. *${prefix}translate* <en/Bom Dia>
│ 7. *${prefix}textstyle* <texto>
│ 13. *${prefix}nulis* nome/nmr/txt
│ 14. *${prefix}bitly* <link>
│ 14. *${prefix}tinyurl* <link>
╰─
╭ 〆 *MEDIA MENU* 〆
│ 25. *${prefix}pinterest*
│ 26. *${prefix}pokemon*
│ 27. *${prefix}randomkpop*
│ 28. *${prefix}asupan*
│ 4. *${prefix}toimg*
│ 6. *${prefix}qrcode* <texto>
│ 29. *${prefix}tiktokstalk* <usuário>
│ 30. *${prefix}ssweb* <link>
│ 31. *${prefix}wait*
│ 32. *${prefix}map* <cidade>
╰─
╭ 〩 *YT & DOWNLOAD* 〩
│ 33. *${prefix}joox* <cantor/a - título>
│ 34. *${prefix}play* <título>
│ 35. *${prefix}tiktod* <link>
│ 36. *${prefix}smule* <link>
│ 37. *${prefix}ytmp3* <link>
│ 37. *${prefix}ytmp4* <link>
│ 38. *${prefix}tomp3*
│ 39. *${prefix}lirik* <título>
│ 37. *${prefix}ytsearch* <link>
│ 37. *${prefix}xvideos* <link>
│ 40. *${prefix}moddroid* <app>
│ 41. *${prefix}happymod* <app>
╰─
╭ 웃 *ANIMAIS* 웃
│ 42. *${prefix}anjing* <cachorro>
│ 43. *${prefix}kucing* <gato>
╰─
╭ 웃 *NSFW MENU* 웃
│ 44. *${prefix}hentai*
│ 45. *${prefix}blowjob*
│ 46. *${prefix}nekonime*
│ 47. *${prefix}nekonime2*
╰─
╭ 〄 *ANIME* 〄
│ 49. *${prefix}naruto*
│ 50. *${prefix}minato*
│ 51. *${prefix}boruto*
│ 52. *${prefix}hinata*
│ 53. *${prefix}sakura*
│ 54. *${prefix}sasuke*
│ 55. *${prefix}toukachan*
│ 56. *${prefix}rize*
│ 57. *${prefix}akira*
│ 58. *${prefix}itori*
│ 59. *${prefix}kurumi*
│ 60. *${prefix}miku*
│ 61. *${prefix}anime*
│ 62. *${prefix}ranime*
│ 63. *${prefix}animecry*
│ 64. *${prefix}husbu*
│ 65. *${prefix}nangis* <choro>
│ 66. *${prefix}cium* <beijo>
│ 67. *${prefix}peluk* <abraço>
╰─
╭ 유 *LIMITE & DINHEIRO* 유
│ 68. *${prefix}limit* 
│ 69. *${prefix}buylimit* <total>
│ 70. *${prefix}transfer* <@tag|total>
│ 71. *${prefix}dompet*
│ 71. *${prefix}level*
╰─
╭ 々 *GRUPO MENU* 々
│ 72. *${prefix}hidetag* <texto>
│ 73. *${prefix}linkgc*
│ 74. *${prefix}infogc*
│ 75. *${prefix}tagall*
│ 76. *${prefix}setpp*
│ 77. *${prefix}fitnah* <@tag/msg/msg bot>
│ 78. *${prefix}add* <@tag>
│ 79. *${prefix}kick* <@tag>
│ 80. *${prefix}setname* <texto>
│ 81. *${prefix}setdesc* <texto>
│ 82. *${prefix}demote* <@tag>
│ 83. *${prefix}promote* <@tag>
│ 84. *${prefix}listadmin*
│ 85. *${prefix}testime*
│ 86. *${prefix}timer*
│ 87. *${prefix}addbadword* <texto>
│ 88. *${prefix}delbadword* <texto>
│ 89. *${prefix}listbadword*
│
│ *ATIVAR*
│ 90. *${prefix}group* [abrir/fechar]
│ 91. *${prefix}leveling* [enable/disable]
│ 92. *${prefix}nsfw* [1/0]
│ 93. *${prefix}simih* [1/0]
│ 94. *${prefix}welcome* [1/0]
│ 95. *${prefix}antilink* [1/0]
│ 96. *${prefix}nobadword* [enable/disable]
╰─
╭ ☬ *PROPRIETÁRIO* ☬
│ 97. *${prefix}bc* <texto>
│ 98. *${prefix}bcgc* <texto>
│ 99. *${prefix}kickall*
│ 100. *${prefix}setreply* <texto>
│ 101. *${prefix}setprefix* <símbolo>
│ 102. *${prefix}giftlimit* <@tag total>
│ 103. *${prefix}setmemlimit* <total>
│ 104. *${prefix}clearall*
│ 105. *${prefix}block* <@tag>
│ 106. *${prefix}unblock* <@tag>
│ 107. *${prefix}leave*
│ 108. *${prefix}event* [1/0]
│ 109. *${prefix}clone* <@tag>
│ 110. *${prefix}setppbot*
│ 111. *${prefix}listonline*
╰─
*By ❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥*
`
}
exports.help = help



  

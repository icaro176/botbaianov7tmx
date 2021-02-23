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

╭ ⸭ *MENU SIMPLES* ⸭
│ 1. *${prefix}sticker*
│ 2. *${prefix}stiker*
│ 3. *${prefix}s*
│ 4. *${prefix}tts* <idioma> <txt>
│ 5. *${prefix}ocr*
╰─
╭ ★ *MENU CRIADOR* ★
│ 6. *${prefix}quotemaker* txt/txt2/tema
│ 7. *${prefix}hartatahta* <texto>
│ 8. *${prefix}lighttext* <texto>
╰─
╭ ツ *FUN MENU* ツ
│ 9. *${prefix}bisakah* <texto>
│ 10. *${prefix}kapankah* <texto>
│ 11. *${prefix}apakah* <texto>
│ 12. *${prefix}rate* <texto>
│ 13. *${prefix}watak* <@tag>
│ 14. *${prefix}hobby* <@tag>
│ 15. *${prefix}persengay* <@tag>
│ 16. *${prefix}huruf* <texto>
│ 17. *${prefix}hilih* <texto>
│ 18. *${prefix}truth*
│ 19. *${prefix}dare*
│ 20. *${prefix}slap* <@tag>
│ 21. *${prefix}cvvfake*
│ 22. *${prefix}darkjokes*
│ 23. *${prefix}spamcall* <últimos 6 nmrs>
│ 24. *${prefix}translate* <en/Bom Dia>
│ 25. *${prefix}textstyle* <texto>
│ 26. *${prefix}nulis* nome/nmr/txt
│ 27. *${prefix}bitly* <link>
│ 28. *${prefix}tinyurl* <link>
╰─
╭ 〆 *MEDIA MENU* 〆
│ 29. *${prefix}pinterest*
│ 30. *${prefix}pokemon*
│ 31. *${prefix}randomkpop*
│ 32. *${prefix}wallpapernime*
│ 33. *${prefix}toimg*
│ 34. *${prefix}qrcode* <texto>
│ 35. *${prefix}tiktokstalk* <usuário>
│ 36. *${prefix}igstalk* <usuário>
│ 37. *${prefix}ssweb* <link>
│ 38. *${prefix}wait*
│ 39. *${prefix}map* <cidade>
╰─
╭ 〩 *YT & DOWNLOAD* 〩
│ 40. *${prefix}joox* <cantor/a - título>
│ 41. *${prefix}play* <título>
│ 42. *${prefix}smule* <link>
│ 43. *${prefix}ytmp4* <link>
│ 44. *${prefix}tomp3*
│ 45. *${prefix}lirik* <título>
│ 46. *${prefix}xvideos* <título>
│ 47. *${prefix}searchpornhub* <título>
│ 48. *${prefix}moddroid* <app>
│ 49. *${prefix}happymod* <app>
│ 50. *${prefix}playstore* <app>
│ 51. *${prefix}apkpure* <app>
│ 52. *${prefix}searchfilm* <filme>
╰─
╭ 웃 *ANIMAIS* 웃
│ 53. *${prefix}anjing* <cachorro>
│ 54. *${prefix}kucing* <gato>
╰─
╭ 웃 *NSFW MENU* 웃
│ 55. *${prefix}hentai*
│ 56. *${prefix}blowjob*
│ 57. *${prefix}nekonime*
│ 58. *${prefix}nekonime2*
╰─
╭ 〄 *ANIME* 〄
│ 59. *${prefix}naruto*
│ 60. *${prefix}minato*
│ 61. *${prefix}boruto*
│ 62. *${prefix}hinata*
│ 63. *${prefix}sakura*
│ 64. *${prefix}sasuke*
│ 65. *${prefix}toukachan*
│ 66. *${prefix}rize*
│ 67. *${prefix}akira*
│ 68. *${prefix}itori*
│ 69. *${prefix}kurumi*
│ 70. *${prefix}miku*
│ 71. *${prefix}anime*
│ 72. *${prefix}loli*
│ 73. *${prefix}ranime*
│ 74. *${prefix}animecry*
│ 75. *${prefix}husbu*
│ 76. *${prefix}nangis* <choro>
│ 77. *${prefix}cium* <beijo>
│ 78. *${prefix}peluk* <abraço>
╰─
╭ 유 *LIMITE & DINHEIRO* 유
│ 79. *${prefix}limit* 
│ 80. *${prefix}buylimit* <total>
│ 81. *${prefix}transfer* <@tag|total>
│ 82. *${prefix}dompet*
│ 83. *${prefix}level*
╰─
╭ 々 *GRUPO MENU* 々
│ 84. *${prefix}hidetag* <texto>
│ 85. *${prefix}linkgc*
│ 86. *${prefix}infogc*
│ 87. *${prefix}tagall*
│ 88. *${prefix}setpp*
│ 89. *${prefix}fitnah* <@tag/msg/msg bot>
│ 90. *${prefix}add* <@tag>
│ 91. *${prefix}kick* <@tag>
│ 92. *${prefix}setname* <texto>
│ 93. *${prefix}setdesc* <texto>
│ 94. *${prefix}demote* <@tag>
│ 95. *${prefix}promote* <@tag>
│ 96. *${prefix}listadmin*
│ 97. *${prefix}testime*
│ 98. *${prefix}timer*
│ 99. *${prefix}addbadword* <texto>
│ 100. *${prefix}delbadword* <texto>
│ 101. *${prefix}listbadword*
│
│ *ATIVAR*
│ 102. *${prefix}group* [abrir/fechar]
│ 103. *${prefix}leveling* [enable/disable]
│ 104. *${prefix}nsfw* [1/0]
│ 105. *${prefix}simih* [1/0]
│ 106. *${prefix}welcome* [1/0]
│ 107. *${prefix}antilink* [1/0]
│ 108. *${prefix}nobadword* [enable/disable]
╰─
╭ *SIMI*
│Simi só manda 50 msg
│por hora, quando acabar
│ele manda esse mensagem: Limit 50 │queries per hour.
│para desligar *${prefix}simih* 0
╰─
╭ ☬ *PROPRIETÁRIO* ☬
│ 109. *${prefix}bc* <texto>
│ 110. *${prefix}bcgc* <texto>
│ 111. *${prefix}kickall*
│ 112. *${prefix}setreply* <texto>
│ 113. *${prefix}setprefix* <símbolo>
│ 114. *${prefix}giftlimit* <@tag total>
│ 115. *${prefix}setmemlimit* <total>
│ 116. *${prefix}clearall*
│ 117. *${prefix}block* <@tag>
│ 118. *${prefix}unblock* <@tag>
│ 119. *${prefix}leave*
│ 120. *${prefix}event* [1/0]
│ 121. *${prefix}clone* <@tag>
│ 122. *${prefix}setppbot*
│ 123. *${prefix}listonline*
╰─
*By ❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥*
`
}
exports.help = help



  

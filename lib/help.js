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
│ 7. *${prefix}pornhub* <texto&texto2>
│ 8. *${prefix}hartatahta* <texto>
│ 9. *${prefix}glitchtext* <texto&texto2>
│ 10. *${prefix}blackpink* <texto>
│ 10. *${prefix}lighttext* <texto>
│ 10. *${prefix}cnaruto* <texto>
│ 10. *${prefix}tpantai* <texto>
│ 10. *${prefix}flame* <texto>
│ 10. *${prefix}tlight* <texto>
│ 10. *${prefix}leavest* <texto>
│ 10. *${prefix}3d* <texto>
│ 10. *${prefix}goldbutton* <texto>
│ 10. *${prefix}silverbutton* <texto>
│ 10. *${prefix}coffe* <texto>
│ 10. *${prefix}glow* <texto>
│ 10. *${prefix}love* <texto>
│ 11. *${prefix}huruf* <texto>
│ 12. *${prefix}hilih* <texto>
╰─
╭ ツ *FUN MENU* ツ
│ 13. *${prefix}bisakah* <texto>
│ 14. *${prefix}kapankah* <texto>
│ 15. *${prefix}apakah* <texto>
│ 16. *${prefix}rate* <texto>
│ 17. *${prefix}watak* <@tag>
│ 18. *${prefix}hobby* <@tag>
│ 19. *${prefix}persengay* <@tag>
│ 20. *${prefix}truth*
│ 21. *${prefix}dare*
│ 22. *${prefix}slap* <@tag>
│ 23. *${prefix}cvvfake*
│ 23. *${prefix}slot*
│ 24. *${prefix}darkjokes*
│ 24. *${prefix}spamcall* <últimos 6 nmrs>
│ 25. *${prefix}translate* <en/Bom Dia>
│ 26. *${prefix}textstyle* <texto>
│ 27. *${prefix}nulis* nome/nmr/txt
│ 28. *${prefix}bitly* <link>
│ 29. *${prefix}tinyurl* <link>
╰─
╭ 〆 *MEDIA MENU* 〆
│ 30. *${prefix}pinterest*
│ 31. *${prefix}pokemon*
│ 32. *${prefix}randomkpop*
│ 33. *${prefix}wallpapernime*
│ 34. *${prefix}asupan*
│ 35. *${prefix}toimg*
│ 36. *${prefix}qrcode* <texto>
│ 37. *${prefix}tiktokstalk* <usuário>
│ 37. *${prefix}igstalk* <usuário>
│ 38. *${prefix}ssweb* <link>
│ 39. *${prefix}wait*
│ 40. *${prefix}map* <cidade>
╰─
╭ 〩 *YT & DOWNLOAD* 〩
│ 41. *${prefix}joox* <cantor/a - título>
│ 42. *${prefix}play* <título>
│ 43. *${prefix}smule* <link>
│ 44. *${prefix}ytmp4* <link>
│ 44. *${prefix}ytmp3* <link>
│ 49. *${prefix}instagram* <link>
│ 45. *${prefix}tomp3*
│ 46. *${prefix}lirik* <título>
│ 47. *${prefix}xvideos* <título>
│ 49. *${prefix}searchpornhub* <título>
│ 48. *${prefix}moddroid* <app>
│ 49. *${prefix}happymod* <app>
│ 49. *${prefix}playstore* <app>
│ 49. *${prefix}apkpure* <app>
│ 49. *${prefix}searchfilm* <app>
╰─
╭ 웃 *ANIMAIS* 웃
│ 50. *${prefix}anjing* <cachorro>
│ 51. *${prefix}kucing* <gato>
╰─
╭ 웃 *NSFW MENU* 웃
│ 52. *${prefix}hentai*
│ 53. *${prefix}blowjob*
│ 54. *${prefix}nekonime*
│ 55. *${prefix}nekonime2*
╰─
╭ 〄 *ANIME* 〄
│ 56. *${prefix}naruto*
│ 57. *${prefix}minato*
│ 58. *${prefix}boruto*
│ 59. *${prefix}hinata*
│ 60. *${prefix}sakura*
│ 61. *${prefix}sasuke*
│ 62. *${prefix}toukachan*
│ 63. *${prefix}rize*
│ 64. *${prefix}akira*
│ 65. *${prefix}itori*
│ 66. *${prefix}kurumi*
│ 67. *${prefix}miku*
│ 68. *${prefix}anime*
│ 68. *${prefix}loli*
│ 69. *${prefix}ranime*
│ 70. *${prefix}animecry*
│ 71. *${prefix}husbu*
│ 72. *${prefix}nangis* <choro>
│ 73. *${prefix}cium* <beijo>
│ 74. *${prefix}peluk* <abraço>
╰─
╭ 유 *LIMITE & DINHEIRO* 유
│ 75. *${prefix}limit* 
│ 76. *${prefix}buylimit* <total>
│ 77. *${prefix}transfer* <@tag|total>
│ 78. *${prefix}dompet*
│ 79. *${prefix}level*
╰─
╭ 々 *GRUPO MENU* 々
│ 80. *${prefix}hidetag* <texto>
│ 81. *${prefix}linkgc*
│ 82. *${prefix}infogc*
│ 83. *${prefix}tagall*
│ 84. *${prefix}setpp*
│ 85. *${prefix}fitnah* <@tag/msg/msg bot>
│ 86. *${prefix}add* <@tag>
│ 87. *${prefix}kick* <@tag>
│ 88. *${prefix}setname* <texto>
│ 89. *${prefix}setdesc* <texto>
│ 90. *${prefix}demote* <@tag>
│ 91. *${prefix}promote* <@tag>
│ 92. *${prefix}listadmin*
│ 93. *${prefix}testime*
│ 94. *${prefix}timer*
│ 95. *${prefix}addbadword* <texto>
│ 96. *${prefix}delbadword* <texto>
│ 97. *${prefix}listbadword*
│
│ *ATIVAR*
│ 98. *${prefix}group* [abrir/fechar]
│ 99. *${prefix}leveling* [enable/disable]
│ 100. *${prefix}nsfw* [1/0]
│ 101. *${prefix}simih* [1/0]
│ 102. *${prefix}welcome* [1/0]
│ 103. *${prefix}antilink* [1/0]
│ 104. *${prefix}nobadword* [enable/disable]
╰─
╭ *SIMI*
│Simi só manda 50 msg
│por hora, quando acabar
│ele manda esse mensagem: Limit 50 │queries per hour.
│para desligar *${prefix}simih* 0
╰─
╭ ☬ *PROPRIETÁRIO* ☬
│ 105. *${prefix}bc* <texto>
│ 106. *${prefix}bcgc* <texto>
│ 107. *${prefix}kickall*
│ 108. *${prefix}setreply* <texto>
│ 109. *${prefix}setprefix* <símbolo>
│ 110. *${prefix}giftlimit* <@tag total>
│ 111. *${prefix}setmemlimit* <total>
│ 112. *${prefix}clearall*
│ 113. *${prefix}block* <@tag>
│ 114. *${prefix}unblock* <@tag>
│ 115. *${prefix}leave*
│ 116. *${prefix}event* [1/0]
│ 117. *${prefix}clone* <@tag>
│ 118. *${prefix}setppbot*
│ 119. *${prefix}listonline*
╰─
*By ❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥*
`
}
exports.help = help



  

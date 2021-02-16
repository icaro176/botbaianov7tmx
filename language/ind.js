exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
╭╼──╼「 USUÁRIO 」───╼╮
│ *Nome* : ${pushname}
│ *Número* : wa.me/${sender.split("@")[0]}
╰╼──────────────╼╯

╭──╼「 CONTA 」╼────╮
│ *Dinheiro* : R$:${uangku}
│ *XP* : ${getLevelingXp(sender)}/${reqXp} 
│ *Level* : ${getLevelingLevel(sender)}
│ *Patente* : ${role}
╰─────────────╼╯

╭──╼「 INFO 」────╼╮
│ *Prefixo* : ${prefix}
│ *Comandos* : ${prefix}menu / help
│ *Ativo Desde* : ${kyun(uptime)}
│ *Registrado* : ꪜ
╰─╼「 BOT BAIANO 」╼─╯

╭╼≽ *MENU CRIADOR*
┠≽ *${prefix}sticker*
┠≽ *${prefix}stiker*
┠≽ *${prefix}s*
┠≽ *${prefix}toimg*
┠≽ *${prefix}tts* <idioma> <txt>
┠≽ *${prefix}qrcode* <texto>
┠≽ *${prefix}ocr*
┠≽ *${prefix}nulis* <texto>
┠≽ *${prefix}quotemaker* <txt|autor|tema>
┠≽ *${prefix}ttp* <txt>
┠≽ *${prefix}stickerhide* <txt>
┠≽ *${prefix}emoji*
╰╼
╭╼≽  *FUN MENU*  ⊰━━━┫
┠≽ *${prefix}bisakah* <texto>
┠ 么 Desc : se você pode
┠──────────────╼
┠≽ *${prefix}kapankah* <texto>
┠ 么 Desc : quando?
┠──────────────╼
┠≽ *${prefix}apakah* <texto>
┠ 么 Desc : o que?
┠──────────────╼
┠≽ *${prefix}rate* <texto>
┠ 么 Desc : %porcentagem
┠──────────────╼
┠≽ *${prefix}truth*
┠ 么 Desc : verdade
┠──────────────╼
┠≽ *${prefix}dare*
┠ 么 Desc : desafio
┠──────────────╼
┠≽ *${prefix}slap* <@tag>
┠ 么 Desc : tapa
┠──────────────╼
┠≽ *${prefix}moddroid* <app>
┠ 么 Desc : mod apk
┠──────────────╼
╰╼
╭╼≽ *MEDIA MENU*
┠≽ *${prefix}pinterest*
┠≽ *${prefix}bitly* <link>
┠≽ *${prefix}tiktokstalk* <usuário>
╰╼
╭╼≽ *YT & SONG*
┠≽ *${prefix}ytmp3* <link>
┠≽ *${prefix}ytmp4* <link>
┠≽ *${prefix}joox* <cantor/a - título>
╰╼
╭╼≽ *NSFW MENU*
┠≽ *${prefix}anjing*
┠≽ *${prefix}blowjob*
┠≽ *${prefix}nekonime*
┠≽ *${prefix}pokemon*
┠≽ *${prefix}husbu*
┠≽ *${prefix}nangis*
┠≽ *${prefix}cium*
┠≽ *${prefix}peluk*
┠≽ *${prefix}ranime*
╰╼
╭╼≽ *LIMITE & DINHEIRO*
┠≽ *${prefix}limit* 
┠≽ *${prefix}buylimit* <quantidade>
┠≽ *${prefix}transfer* <@tag | total>
┠≽ *${prefix}dompet*
╰╼
╭╼≽ *MENU GRUPO*
┠≽ *${prefix}hidetag* <texto>
┠≽ *${prefix}linkgc*
┠≽ *${prefix}tagall*
┠≽ *${prefix}setpp*
┠≽ *${prefix}add* <@tag>
┠≽ *${prefix}kick* <@tag>
┠≽ *${prefix}setname* <texto>
┠≽ *${prefix}setdesc* <texto>
┠≽ *${prefix}demote* <@tag>
┠≽ *${prefix}promote* <@tag>
┠≽ *${prefix}listadmin*
┠≽ *${prefix}addbadword* <texto>
┠≽ *${prefix}delbadword* <texto>
┠≽ *${prefix}listbadword*
╰╼
╭╼≽ *ATIVAR*
╰╼≽ 么 Desc : ativar em grupos
╭──────────────
┠≽ *${prefix}group* [abrir/fechar]
┠≽ *${prefix}leveling* [enable/disable]
┠≽ *${prefix}nsfw* [1/0]
┠≽ *${prefix}simih* [1/0]
┠≽ *${prefix}welcome* [1/0]
┠≽ *${prefix}antilink*
┠≽ *${prefix}nobadword*
╰╼──────────────
╭╼≽ *PROPRIETÁRIO* 
┠≽ *${prefix}bc* <texto>
┠≽ *${prefix}bcgc* <texto>
┠≽ *${prefix}kickall*
┠≽ *${prefix}setreply* <texto>
┠≽ *${prefix}setprefix* <símbolo>
┠≽ *${prefix}giftlimit* <@tag total>
┠≽ *${prefix}setmemlimit* <total>
┠≽ *${prefix}clearall*
┠≽ *${prefix}block* <@tag>
┠≽ *${prefix}unblock* <@tag>
┠≽ *${prefix}leave*
┠≽ *${prefix}event* [1/0]
┠≽ *${prefix}clone* <@tag>
┠≽ *${prefix}setppbot*
┠≽ *${prefix}listonline*
╰╼≽ *©❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥* 
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}


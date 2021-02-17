exports.wait = () => {
	return`*⏳ AGUARDE... EM PROCESSO ⌛*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 LEVELING 」 ATIVADO*`
}

exports.lvloff = () => {
	return`*「 LEVELING 」 DESATIVADO*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*como registrar ${prefix}daftar nome|idade* \n*exemplo ${prefix}daftar ${pushname}|idade*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado, ${pushname}*`
}

exports.stikga = () => {
	return`*sim ${pushname} falhou tente repetir*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*COMANDO SÓ PODE SER USADO EM GRUPO*`
}

exports.ownerb = () => {
	return`*COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO*`
}

exports.ownerg = () => {
	return`*COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO DO GRUPO*`
}

exports.admin = () => {
	return`*COMANDO SÓ PODE SER USADO SE VOCÊ FOR ADMISTRADOR DO GRUPO*`
}

exports.badmin = () => {
	return`*COMANDO SÓ PODE SER USADO SE O BOT FOR ADMISTRADOR*`
}

exports.nsfwoff = () => {
	return`*NSFW PRECISA ESTÁ ATIVADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto ou texto em branco*`
}

exports.clears = () => {
	return`*chat limpado com sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não recebeu a mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\n𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎 \n\n╭╼≽ *Nome*\n么 ${namaUser}\n╭╼≽ *Número*\n么 wa.me/${sender.split("@")[0]}\n╭╼≽ *Idade*\n么 ${umurUser}\n*Hora de Registro*\n╭╼≽ ${time}\n\n╭──么 *Código* 么──\n么 ${serialUser}\n╰─────────────`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado dentro *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpa ${pushname} você não é o dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é o suficiente*\n\n*┏⊱seu level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : CHAT SEMPRE LIGADO PARA OBTER XP_`
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
│ *Limite* : ${limitCounts}
│ *Level* : ${getLevelingLevel(sender)}
│ *Patente* : ${role}
╰─────────────╼╯

╭──╼「 INFO 」────╼╮
│ *Prefixo* : ${prefix}
│ *Comandos* : ${prefix}menu / help
│ *Registrado* : ꪜ
╰─╼「 BOT BAIANO 」╼─╯

╭╼≽ *𝔽𝕀𝔾𝕌ℝ𝕀ℕℍ𝔸𝕊*
╰╼≽ 么 Desc : também serve para fig animada
╭────────────
│≽ *${prefix}sticker*
│≽ *${prefix}stiker*
│≽ *${prefix}s*
╰─
╭╼≽ *𝕄𝔼ℕ𝕌 ℂℝ𝕀𝔸𝔻𝕆ℝ*
│≽ *${prefix}toimg*
│≽ *${prefix}tts* <idioma> <txt>
│≽ *${prefix}qrcode* <texto>
│≽ *${prefix}ocr*
│≽ *${prefix}nulis* <texto>
│≽ *${prefix}quotemaker* <txt|autor|tema>
│≽ *${prefix}ttp* <txt>
│≽ *${prefix}stickerhide*
│≽ *${prefix}emoji*
╰╼
╭╼≽ *𝔽𝕌ℕ 𝕄𝔼ℕ𝕌*
│≽ *${prefix}bisakah* <texto>
┠ 么 Desc : se você pode
┠──────────────╼
│≽ *${prefix}kapankah* <texto>
┠ 么 Desc : quando?
┠──────────────╼
│≽ *${prefix}apakah* <texto>
┠ 么 Desc : o que?
┠──────────────╼
┠≽ *${prefix}rate* <texto>
┠ 么 Desc : %porcentagem
┠──────────────╼
│≽ *${prefix}truth*
┠ 么 Desc : verdade
┠──────────────╼
│≽ *${prefix}dare*
┠ 么 Desc : desafio
┠──────────────╼
│≽ *${prefix}slap* <@tag>
│≽ *${prefix}tampar*
┠ 么 Desc : tapa
┠──────────────╼
│≽ *${prefix}moddroid* <app>
┠ 么 Desc : mod apk
┠──────────────╼
╰╼
╭╼≽ *𝕄𝔼𝔻𝕀𝔸 𝕄𝔼ℕ𝕌*
│≽ *${prefix}pinterest*
│≽ *${prefix}google* <pesquisa>
│≽ *${prefix}bitly* <link>
│≽ *${prefix}tiktok* <link>
│≽ *${prefix}tiktokstalk* <usuário>
│≽ *${prefix}igstalk <usuário>
│≽ *${prefix}wait*
╰╼
╭╼≽ *𝕐𝕋 & 𝕊𝕆ℕ𝔾*
│≽ *${prefix}ytmp3* <link>
│≽ *${prefix}ytmp4* <link>
│≽ *${prefix}joox* <cantor/a - título>
│≽ *${prefix}play* <título>
│≽ *${prefix}lirik* <título>
╰╼
╭╼≽ *ℕ𝕊𝔽𝕎 𝕄𝔼ℕ𝕌*
│≽ *${prefix}anjing*
│≽ *${prefix}blowjob*
│≽ *${prefix}pokemon*
│≽ *${prefix}husbu*
│≽ *${prefix}nangis*
│≽ *${prefix}cium*
│≽ *${prefix}peluk*
│≽ *${prefix}ranime*
╰╼
╭╼≽ *𝕃𝕀𝕄𝕀𝕋𝔼 & 𝔻𝕀ℕℍ𝔼𝕀ℝ𝕆*
│≽ *${prefix}limit* 
│≽ *${prefix}buylimit* <quantidade>
│≽ *${prefix}transfer* <@tag | total>
│≽ *${prefix}dompet*
╰╼
╭╼≽ *𝕄𝔼ℕ𝕌 𝔾ℝ𝕌ℙ𝕆*
│≽ *${prefix}hidetag* <texto>
│≽ *${prefix}linkgc*
│≽ *${prefix}tagall*
│≽ *${prefix}setpp*
│≽ *${prefix}add* <@tag>
│≽ *${prefix}kick* <@tag>
│≽ *${prefix}setname* <texto>
│≽ *${prefix}setdesc* <texto>
│≽ *${prefix}demote* <@tag>
│≽ *${prefix}promote* <@tag>
│≽ *${prefix}listadmin*
│≽ *${prefix}addbadword* <texto>
│≽ *${prefix}delbadword* <texto>
│≽ *${prefix}listbadword*
╰╼
╭╼≽ *𝔸𝕋𝕀𝕍𝔸ℝ*
╰╼≽ 么 Desc : ativar em grupos
╭──────────────
│≽ *${prefix}group* [abrir/fechar]
│≽ *${prefix}leveling* [enable/disable]
│≽ *${prefix}nsfw* [1/0]
│≽ *${prefix}simih* [1/0]
│≽ *${prefix}welcome* [1/0]
│≽ *${prefix}antilink* [1/0]
│≽ *${prefix}nobadword* [enable/disable]
╰╼──────────────
╭╼≽ *ℙℝ𝕆ℙℝ𝕀𝔼𝕋𝔸́ℝ𝕀𝕆* 
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
│
╰╼≽ *By ©❁̸⃪͎۪۪۪〫⃕͘͡⃟💸ƚՇᮟℛ❂•᭄ꦿ⃟꧇۪⃟🔥* 
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭╼≽ *「 🔥LEVEL UP🔥 」*
│≽ *Nome* : ${pushname}
│≽ *Número* : wa.me/${sender.split("@")[0]}
│≽ *XP* : ${getLevelingXp(sender)}
│≽ *Limite* : +3
│≽ *Patente*: ${role}
╰╼≽ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*desculpa ${pushname} seu limite acabou*\n*limite pode ser obtido por *${prefix}buylimit* ou subindo de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
Seu limite : ${limitCounts}`
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1/enable ou 0 /disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*╭╼≽ 「 DINHEIRO 」─╮*\n│≽ *Nome* : ${pushname}\n│≽ *Número* : ${sender.split("@")[0]}\n│≽ *Dinheiro* : ${uangkau}\n╰─────────`
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


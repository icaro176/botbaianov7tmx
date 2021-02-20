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
	return`*「 DADOS 」*\n\n𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎 \n\n*Nome*\n${namaUser}\n*Número*\nwa.me/${sender.split("@")[0]}\n*Idade*\n${umurUser}\n*Hora de Registro*\n${time}\n\n╭──么 *Código* 么────\n│ ${serialUser}\n╰─────────────`
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

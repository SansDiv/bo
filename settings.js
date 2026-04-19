const chalk = require("chalk")
const fs = require("fs")
//aumto presence update
global.autoTyping = false // auto tying in gc (true to on, false to off)
global.autoRecord = false // auto recording (true to on, false to off)
global.autoblockmorroco = false // auto block 212 (true to on, false to off)
global.wlcm = true
global.autokickmorroco = false// auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)

//===============SETTING MENU==================\\
global.channel = '-' // GANTI DENGAN ID CHMU KALO ADA
global.channeln = 'SansDiv' // GANTI DENGAN NAMA CH MU
//===============SETTING MENU==================\\
global.prefix = ['','!','.','#','&']
global.thumbnail = 'https://cdn.discordapp.com/attachments/1495456480730546277/1495457011679232010/IMG-20260419-WA0044.jpg?ex=69e6505f&is=69e4fedf&hm=bb73dd527b0b444e9f71d8fca7ea18a89e85f61d72a7a487545309c265638a52&'
global.ig = 'https://instagram.com/gd'
global.ttowner = '-'
global.ownername = 'SanDiv'
global.owner = ['6289603221280','6281235854018'] // database diisi jga di lib
global.ownernomer = '6289603221280'
global.socialm = 'GitHub: -'
global.location = 'Indonesia' 
//========================Setting API=====================\\
global.nz = [
    'nz-9318fc6c10'
    ]
global.frch = [
    "19f5a2b955939bfe90d395f1984dea9b1ef7e02a0ea4dc2d2a0544587c109db5",
    ] 
//========================setting Payment=====================\\
global.nodana = '_' // KOSONG KAN JIKA TIDAK ADA
global.nogopay = '_' // KOSONG KAN JIKA TIDAK ADA 
global.noovo = false // KOSONG KAN JIKA TIDAK ADA
//==================setting Payment Name===========================\\
global.andana = '_' // KOSONG KAN JIKA TIDAK ADA
global.angopay = false // KOSONG KAN JIKA TIDAK ADA
global.anovo = false // KOSONG KAN JIKA TIDAK ADA
//==================setting bot===========================\\
global.botname = "Seo Nari - Kawai"
global.ownernumber = '6289603221280'
global.botnumber = '6281235854018' // isi no bot mu
global.ownername = 'SansDiv'
global.ownerNumber = ["6289603221280@s.whatsapp.net"]
global.themeemoji = '🫐'
global.wm = "Nigga"
global.packname = "Nigga"
global.author = "\n\n\n\n\nDibuat Oleh SansDiv"
global.creator = "6289603221280@s.whatsapp.net"
//======================== CPANEL FITUR ===========================\\
global.domain = '_' // Isi Domain Lu jangan kasih tanda / di akhir link
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
//=========================================================//
global.apiDigitalOcean = "-"
//=========================================================//
//Server create panel egg pm2
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.domain2 = '-' // Isi Domain Lu
global.docker2 = "-" //jangan di ubah

global.eggsnya2 = '15' // id eggs yang dipakai
global.location2 = '1' // id location
//===========================//
global.virtuSimApiKey = ''
global.domainotp = "https://claudeotp.com/api"
global.eggsnya = '15' // id eggs yang dipakai
global.nodes = '2'
global.location3 = '1' // id location
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
//===========================//
global.mess = {
   wait: "*Sabar Nigga*",
   success: "Wes rampung",
   on: "Urip",
   off: "Mati",
   query: {
       text: "Teksnya Mana?",
       link: "Link nya kirim anj",
       image: "gambare ndi tempek",
   },
   error: {
       fitur: "error cik owner e ndi iki",
   },
   only: {
       group: "Fiture gor ng grup rek",
       private: "pm only rek",
       owner: "gor nggo owner",
       admin: "gor dinggo admin",
       badmin: "kudu admin aku",
       premium: "premium iki",
   }
}
//========================================\\
global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//new
global.sessionName = 'Session'
global.hituet = 0
//media target
global.thum = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.keyopenai = ""
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.supaurl = 'https://uzyzpgujphlmesbmcwca.supabase.co'
global.supakey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6eXpwZ3VqcGhsbWVzYm1jd2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNjQwMjcsImV4cCI6MjA3MDY0MDAyN30.SwjgDAcEDLvjmzKzxHPdtHdjLbH1Zsr20MbPI4s6F94'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
	

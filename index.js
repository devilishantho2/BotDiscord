const Discord = require('discord.js');
const client = new Discord.Client();
var nbmessage = 0;

const intro = {
    "embed": {
        "color": 37119,
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/intro3.png"
        },
        "image": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/intro1.gif"
        },
        "title": "Introduction",
        "description": "Salut ! Je suis Roblox Helper et je peux te renseigner sur les dernières actualités de tes jeux préférés ainsi que sur les actualités roblox. :wink:"
    }
}

const babfthelp = {
    "embed": {
        "color": 16776960,
        "title": "Build a boat for treasure",
        "description": "info - Informations générales\nupdate - Dernières updates\ncode - Codes valides",
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftprofil.jpg"
        },
        "url": "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
    }
}
const babftinfo = {
    "embed": {
        "color": 16776960,
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftprofil.jpg"
        },
        "image": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftimage.gif"
        },
        "footer": {
            "icon_url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/ranked1.png",
            "text": "frigielfan6"
        },
        "url": "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
        "title": "Build a boat for treasure",
        "description": "Construisez un bateau afin d'atteindre un trésor qui se situe au bout d'un parcours semé d'embûches. Les possibilités sont infinies grace aux nombreux blocs à collectionner.",
        "fields": [
            {
                "name": "Créateur",
                "value": "Chillz Studios",
                "inline": false
            },
        ]
    }
}
const babftcodes = {
    "embed": {
        "color": 16776960,
        "title": "Build a boat for treasure",
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftprofil.jpg"
        },
        "url": "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
        "description": "Derniers codes valides : ",
        "fields": [
            {
                "name": "=D : ",
                "value": "5 gold",
                "inline": false
            },
            {
                "name": "=p :",
                "value": "5 gold",
                "inline": false
            },
            {
                "name": "hi :",
                "value": "5 gold",
                "inline": false
            },
            {
                "name": "squid army :",
                "value": "22 gold, 22 ice",
                "inline": false
            },
            {
                "name": "chillthrill709 was here :",
                "value": "1 firework",
                "inline": false
            },
            {
                "name": "Lurking Code :",
                "value": "10 ballons, 5 super fireworks, 1 portal block",
                "inline": false
            },
            {
                "name": "Big F00t Print :",
                "value": "10 ballons, 5 cakes, 25 neon blocks",
                "inline": false
            },
            {
                "name": "The Sasquatch? :",
                "value": "10 ballons, 5 circle fireworks, 1 portal block",
                "inline": false
            },
            {
                "name": "1M Likes :",
                "value": "10 star blocks, 10 heart blocks, 5 pink candies",
                "inline": false
            }
        ]
    }
}
const babftupdates = {
    "embed": {
        "color": 16776960,
        "title": "Build a boat for treasure",
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftprofil.jpg"
        },
        "url": "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
        "description": "Dernières updates : ",
        "fields": [
            {
                "name": "Update 26/09/2020",
                "value": "Nouveau stage (baseball)",
                "inline": false
            },
            {
                "name": "Update 19/09/2020",
                "value": "Nouveau stage (platform fight)",
                "inline": false
            },
            {
                "name": "Update 11/09/2020",
                "value": "Nouveau stage (cinéma)",
                "inline": false
            }
        ]
    }
}

const bgshelp = {
    "embed": {
        "color": 16738815,
        "title": "Bubble Gum Simulator",
        "description": "info - Informations générales\nupdate - Dernières updates\ncode - Codes valides",
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/bgsprofil.png"
        },
        "url": "https://www.roblox.com/games/2512643572/EVENT-Bubble-Gum-Simulator",
    }
}
const bgsinfo = {
    "embed": {
        "color": 16738815,
        "thumbnail": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/bgsprofil.png"
        },
        "image": {
            "url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/babftimage.gif"
        },
        "footer": {
            "icon_url": "https://raw.githubusercontent.com/devilishantho2/BotDiscord/main/ranked1.png",
            "text": "Drago"
        },
        "url": "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure",
        "title": "Bubble Gum Simulator",
        "description": "Faites eclore plein d'oeuf afin de devenir le meilleur souffleur de bulles!",
        "fields": [
            {
                "name": "Créateur",
                "value": "Rumble Studios",
                "inline": false
            },
        ]
    }
}

client.once('ready',() => {
    console.log('Ready!');
});

client.on('message', (message) => {
        if (message.content === '!intro') {
            message.channel.send(intro);
        }
        else if (message.content.startsWith('!vote')) {
            message.react('✅');
            message.react('❎');
        }
        else if (message.content === '!babft info') {
            message.channel.send(babftinfo);
        }
        else if (message.content === '!babft update') {
            message.channel.send(babftupdates);
        }
        else if (message.content === '!babft code') {
            message.channel.send(babftcodes);
        }  
        else if (message.content === '!babft help') {
            message.channel.send(babfthelp);
        } 
        else if (message.content === '!bgs help') {
            message.channel.send(bgshelp);
        }  
        else if (message.content === '!bgs info') {
            message.channel.send(bgsinfo);
        }  
})

client.on('message', (message) => {
    if (!message.author.bot) {(nbmessage = nbmessage+1);}
})

client.login(process.env.BOT_TOKEN);

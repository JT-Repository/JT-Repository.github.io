    
//document.getElementById('song-saved').addEventListener('click', function() {
//    document.getElementById('song-saved').classList.toggle('saved')
//});

Amplitude.init ({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "callbacks": {
        timeupdate: function() {
            let percentage = Amplitude.getSongPlayedPercentage();
            if(isNaN( percentage )) {
                percentage = 0;
            }
            let slider = document.getElementById('song-percentage-played');
            slider.style.backgroundSize = percentage + '% 100%';
        }
    },
    "songs": [
        {
            "name": "Twinks on K",
            "artist": "[we sell boxes]",
            "id": "wsb016",
            "bcid": "2036939337",
            "bclink": "https://wesellboxes.bandcamp.com/track/twinks-on-k",
            "url": "src/files/01.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0732467174_2.jpg"
        },
        {
            "name": "Géant's Garden",
            "artist": "[we sell boxes]",
            "id": "wsb015",
            "bcid": "3568645090",
            "bclink": "https://wesellboxes.bandcamp.com/track/g-ants-garden",
            "url": "src/files/02.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0832481611_2.jpg"
        },
        {
            "name": "Grief Vultures",
            "artist": "[we sell boxes]",
            "id": "wsb014",
            "bcid": "3481653095",
            "bclink": "grief-vultures",
            "url": "src/files/03.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0702030231_2.jpg"
        },
        {
            "name": "Separate Rooms",
            "artist": "[we sell boxes]",
            "id": "wsb013",
            "bcid": "60008476",
            "bclink": "seperate-rooms",
            "url": "src/files/04.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a2175339036_2.jpg"
        },
        {
            "name": "Untitled Electro Track #1",
            "artist": "[we sell boxes]",
            "id": "wsb012",
            "bcid": "2424135838",
            "bclink": "untitled-electro-track-1",
            "url": "src/files/05.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0942976242_2.jpg"
        },
        {
            "name": "Flat On My Back",
            "artist": "[we sell boxes]",
            "id": "wsb011",
            "bcid": "1715679061",
            "bclink": "flat-on-my-back",
            "url": "src/files/04.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a3990502744_2.jpg"
        },
        {
            "name": "Carpetbaggers",
            "artist": "[we sell boxes]",
            "id": "wsb010",
            "bcid": "2934462759",
            "bclink": "carpetbaggers",
            "url": "src/files/05.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a2488661740_2.jpg"
        },
        {
            "name": "Comments Section",
            "artist": "[we sell boxes]",
            "id": "wsb009",
            "bcid": "2596123303",
            "bclink": "comments-section",
            "url": "src/files/06.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0939060092_2.jpg"
        },
        {
            "name": "Walk You Through This",
            "artist": "[we sell boxes]",
            "id": "wsb008",
            "bcid": "1510990226",
            "bclink": "walk-you-through-this",
            "url": "src/files/07.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a3145762107_2.jpg"
        },
        {
            "name": "Foolish Proles Make It Easy",
            "artist": "[we sell boxes]",
            "id": "wsb007",
            "bcid": "3152065329",
            "bclink": "foolish-proles-make-it-easy",
            "url": "src/files/08.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-foolish_proles-1400-500x500.jpg"
        },
        {
            "name": "BBD SC",
            "artist": "[we sell boxes]",
            "id": "wsb006",
            "bcid": "1588190798",
            "bclink": "bbd-sc",
            "url": "src/files/09.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a4086014670_2.jpg"
        },
        {
            "name": "Mllody",
            "artist": "[we sell boxes]",
            "id": "wsb005",
            "bcid": "2177854771",
            "bclink": "mllody",
            "url": "src/files/10.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a0813543581_2.jpg"
        },
        {
            "name": "Owed50",
            "artist": "[we sell boxes]",
            "id": "wsb004",
            "bcid": "2282986145",
            "bclink": "owed50",
            "url": "src/files/11.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a1463995863_2.jpg"
        },
        {
            "name": "Divisive Strategies",
            "artist": "[we sell boxes]",
            "id": "wsb003",
            "bcid": "502188643",
            "bclink": "divisive-strategies",
            "url": "src/files/01.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a2465475164_2.jpg"
        },
        {
            "name": "Creating Prosperity",
            "artist": "[we sell boxes]",
            "id": "wsb002",
            "bcid": "3568135637",
            "bclink": "creating-prosperity",
            "url": "src/files/02.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a3685013440_2.jpg"
        },
        {
            "name": "Helpless",
            "artist": "[we sell boxes]",
            "id": "wsb001",
            "bcid": "3371817904",
            "bclink": "helpless",
            "url": "src/files/03.mp3",
            "cover_art_url": "https://f4.bcbits.com/img/a2896561220_2.jpg"
        }
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};
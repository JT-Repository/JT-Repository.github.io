    
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
            "name": "Géant's Garden",
            "artist": "[we sell boxes]",
            "id": "wsb015",
            "bcid": "3568645090",
            "bclink": "g-ants-garden",
            "url": "src/01 - The 8th Shade.mp3",
            "cover_art_url": "https://static1.squarespace.com/static/5608382ae4b017614f857528/t/5a67824c8165f553a1c85ac9/1516733005222/Colorful-Abstract-Art-by-Thaneeya-McArdle.jpg"
        },
        {
            "name": "Grief Vultures",
            "artist": "[we sell boxes]",
            "id": "wsb014",
            "bcid": "3481653095",
            "bclink": "grief-vultures",
            "url": "src/02 - Theme From Mish Mash.mp3",
            "cover_art_url": "https://i.pinimg.com/564x/95/ef/75/95ef75f29d3f3546fff036eb53441c34.jpg"
        },
        {
            "name": "Untitled Electro Track #1",
            "artist": "[we sell boxes]",
            "id": "wsb013",
            "bcid": "2424135838",
            "bclink": "untitled-electro-track-1",
            "url": "src/03 - Now I Deliver.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2018/02/we_sell_boxes-untitled_electro_track_1-500x500.png"
        },
        {
            "name": "Flat On My Back",
            "artist": "[we sell boxes]",
            "id": "wsb012",
            "bcid": "1715679061",
            "bclink": "flat-on-my-back",
            "url": "src/04 - Uneasy Skanking.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2018/01/we_sell_boxes-flat_on_my_back-500x500.png"
        },
        {
            "name": "Carpetbaggers",
            "artist": "[we sell boxes]",
            "id": "wsb011",
            "bcid": "2934462759",
            "bclink": "carpetbaggers",
            "url": "src/05 - Fling Mi Ting.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2017/07/we_sell_boxes-carpetbaggers-500x500.jpg"
        },
        {
            "name": "Separate Rooms",
            "artist": "[we sell boxes]",
            "id": "wsb010",
            "bcid": "60008476",
            "bclink": "seperate-rooms",
            "url": "src/06 - Mish Mash Episode One.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2018/01/we_sell_boxes-acluophobia.jpg"
        },
        {
            "name": "Comments Section",
            "artist": "[we sell boxes]",
            "id": "wsb009",
            "bcid": "2596123303",
            "bclink": "comments-section",
            "url": "src/07 - 90° Fuzzwalk.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2017/02/we_sell_boxes-comments_section-1400-500x500.jpg"
        },
        {
            "name": "Walk You Through This",
            "artist": "[we sell boxes]",
            "id": "wsb008",
            "bcid": "1510990226",
            "bclink": "walk-you-through-this",
            "url": "src/08 - Mish Mash Episode Two.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/05/we_sell_boxes-walk_you_through_this-800-500x500.jpg"
        },
        {
            "name": "Foolish Proles Make It Easy",
            "artist": "[we sell boxes]",
            "id": "wsb007",
            "bcid": "3152065329",
            "bclink": "foolish-proles-make-it-easy",
            "url": "src/09 - Going Under.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-foolish_proles-1400-500x500.jpg"
        },
        {
            "name": "Mllody",
            "artist": "[we sell boxes]",
            "id": "wsb006",
            "bcid": "2177854771",
            "bclink": "mllody",
            "url": "src/10 - Paths Of Life.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-mllody-1400-500x500.jpg"
        },
        {
            "name": "Owed50",
            "artist": "[we sell boxes]",
            "id": "wsb005",
            "bcid": "2282986145",
            "bclink": "owed50",
            "url": "src/11 - One With Another",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-owed50-1400-500x500.jpg"
        },
        {
            "name": "Divisive Strategies",
            "artist": "[we sell boxes]",
            "id": "wsb004",
            "bcid": "502188643",
            "bclink": "divisive-strategies",
            "url": "src/12 - Mish Mash Episode Three.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-divisive_strategies-1400-500x500.jpg"
        },
        {
            "name": "Creating Prosperity",
            "artist": "[we sell boxes]",
            "id": "wsb003",
            "bcid": "3568135637",
            "bclink": "creating-prosperity",
            "url": "src/12 - Mish Mash Episode Three.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-creating_prosperity-1400-500x500.jpg"
        },
        {
            "name": "Helpless",
            "artist": "[we sell boxes]",
            "id": "wsb002",
            "bcid": "3371817904",
            "bclink": "helpless",
            "url": "src/12 - Mish Mash Episode Three.mp3",
            "cover_art_url": "https://www.wesellboxes.net/wp-content/uploads/2016/04/we_sell_boxes-helpless-500.jpg"
        },
        {
            "name": "BBD SC",
            "artist": "[we sell boxes]",
            "id": "wsb002",
            "bcid": "1588190798",
            "bclink": "bbd-sc",
            "url": "src/12 - Mish Mash Episode Three.mp3",
            "cover_art_url": "https://i.scdn.co/image/ab67616d0000b27382fcb5ea65b6398ba187ad01"
        }
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};
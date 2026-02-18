const artistsData = [
    {
        id: 'anirudh',
        name: "Anirudh Ravichander",
        desc: "Rockstar of South Indian Music. 35M+ monthly listeners.",
        image: "anirudh song/Anirudh-Ravichander.webp",
        verified: true,
        bgGradient: "rgba(29, 185, 84, 0.2)",
        songs: [
            { title: "Coolie Disco", album: "Coolie", duration: "3:15", img: "anirudh song/disco.jpeg", file: "anirudh song/Coolie Disco - MassTamilan.mp3" },
            { title: "Chella Magale", album: "Single", duration: "3:30", img: "anirudh song/chella magale.jpeg", file: "anirudh song/Chella-Magale-MassTamilan.dev.mp3" },
            { title: "Chikitu", album: "Single", duration: "3:20", img: "anirudh song/chituku.jpeg", file: "anirudh song/Chikitu - MassTamilan.mp3" },
            { title: "Dheema", album: "Love Insurance Kompany", duration: "3:40", img: "anirudh song/dhemma.jpeg", file: "anirudh song/Dheema-MassTamilan.dev.mp3" },
            { title: "Oru Pere Varalaaru", album: "Single", duration: "4:00", img: "anirudh song/oru pera varalaru.jpeg", file: "anirudh song/Oru-Pere-Varalaaru-MassTamilan.dev.mp3" },
            { title: "Pattuma", album: "Single", duration: "3:10", img: "anirudh song/pattuma.jpeg", file: "anirudh song/Pattuma-MassTamilan.dev.mp3" },
            { title: "Raavana Mavandaa", album: "Single", duration: "3:25", img: "anirudh song/ravana mavanda.jpeg", file: "anirudh song/Raavana-Mavandaa-MassTamilan.dev.mp3" },
            { title: "Thalapathy Kacheri", album: "Single", duration: "3:15", img: "anirudh song/thalapathy kacheri.jpeg", file: "anirudh song/Thalapathy Kacheri.mp3" }
        ]
    },
    {
        id: 'arrahman',
        name: "A.R. Rahman",
        desc: "The Mozart of Madras. Oscar-winning composer.",
        image: "ar rahmon song/ar rahmon.jpeg",
        verified: true,
        bgGradient: "rgba(60, 60, 255, 0.2)",
        songs: [
            { title: "Naan Un", album: "24", duration: "4:15", img: "ar rahmon song/naan un.jpeg", file: "ar rahmon song/Naan-Un.mp3" },
            { title: "Unnaal Unnaal", album: "Ambikapathy", duration: "4:10", img: "ar rahmon song/ambikapathy.jpeg", file: "ar rahmon song/Unnaal-Unnaal.mp3" },
            { title: "Ambikapathy", album: "Ambikapathy", duration: "4:30", img: "ar rahmon song/ambikapathy.jpeg", file: "ar rahmon song/Ambikapathy.mp3" },
            { title: "Aalaporan Thamizhan", album: "Mersal", duration: "4:50", img: "ar rahmon song/alaporan tamizhan.jpeg", file: "ar rahmon song/Aalaporan-Thamizhan-MassTamilan.com.mp3" },
            { title: "Adheeraa", album: "Cobra", duration: "3:45", img: "ar rahmon song/cobra.jpeg", file: "ar rahmon song/Adheeraa-MassTamilan.dev.mp3" },
            { title: "Arima Arima", album: "Enthiran", duration: "4:20", img: "ar rahmon song/arima arima.jpeg", file: "ar rahmon song/Arima-Arima.mp3" },
            { title: "Ella Pugazhum", album: "Azhagiya Tamil Magan", duration: "4:10", img: "ar rahmon song/ella pogalum.jpg", file: "ar rahmon song/Ella-Pugazhum-MassTamilan.fm.mp3" },
            { title: "En Peru Padayappa", album: "Padayappa", duration: "4:00", img: "ar rahmon song/padaiyappa.jpeg", file: "ar rahmon song/En-Peru-Padayappa.mp3" },
            { title: "Ennodu Nee Irundhal", album: "I", duration: "5:05", img: "ar rahmon song/ennodu nee irudhal.jpeg", file: "ar rahmon song/Ennodu-Nee-Irundhal.mp3" },
            { title: "Kaathalenum", album: "Kadhalar Dhinam", duration: "4:30", img: "ar rahmon song/kadhalanum.jpeg", file: "ar rahmon song/Kaathalenum.mp3" },
            { title: "Maacho Ennacho", album: "Mersal", duration: "3:55", img: "ar rahmon song/macho macho.jpeg", file: "ar rahmon song/Maacho-Ennacho-MassTamilan.com.mp3" },
            { title: "Mersal Arasan", album: "Mersal", duration: "4:15", img: "ar rahmon song/alaporan tamizhan.jpeg", file: "ar rahmon song/Mersal-Arasan-MassTamilan.com.mp3" },
            { title: "Mersalayitten", album: "I", duration: "4:20", img: "ar rahmon song/merulakiten.jpeg", file: "ar rahmon song/Mersalayitten.mp3" },
            { title: "Minsara Poove", album: "Padayappa", duration: "4:40", img: "ar rahmon song/padaiyappa.jpeg", file: "ar rahmon song/Minsara-Poove.mp3" },
            { title: "Nee Singam Dhan", album: "Pathu Thala", duration: "3:30", img: "ar rahmon song/pathuthala.jpeg", file: "ar rahmon song/Nee-Singam-Dhan-MassTamilan.dev.mp3" },
            { title: "Neethanae Neethane", album: "Mersal", duration: "4:10", img: "ar rahmon song/neethane.jpeg", file: "ar rahmon song/Neethanae-Neethane-MassTamilan.com.mp3" },
            { title: "Ninaivirukka", album: "Pathu Thala", duration: "3:40", img: "ar rahmon song/pathuthala.jpeg", file: "ar rahmon song/Ninaivirukka-MassTamilan.dev.mp3" },
            { title: "Osarattum Pathu Thala", album: "Pathu Thala", duration: "4:05", img: "ar rahmon song/pathuthala.jpeg", file: "ar rahmon song/Osarattum-Pathu-Thala-MassTamilan.dev.mp3" },
            { title: "Pachai Kiligal", album: "Indian", duration: "4:50", img: "ar rahmon song/pchai kilikal.jpeg", file: "ar rahmon song/Pachai-Kiligal.mp3" },
            { title: "Pookkale Satru", album: "I", duration: "4:15", img: "ar rahmon song/pokukale.jpeg", file: "ar rahmon song/Pookkale-Satru.mp3" },
            { title: "Telephone Manipol", album: "Indian", duration: "5:10", img: "ar rahmon song/telephone manipol.jpeg", file: "ar rahmon song/Telephone-Manipol.mp3" },
            { title: "Unakaga", album: "Bigil", duration: "3:40", img: "ar rahmon song/unagaga.jpeg", file: "ar rahmon song/Unakaga-MassTamilan.io.mp3" },
            { title: "Uyir Urugudhey", album: "Cobra", duration: "4:00", img: "ar rahmon song/cobra.jpeg", file: "ar rahmon song/Uyir-Urugudhey-MassTamilan.dev.mp3" },
            { title: "Verithanam", album: "Bigil", duration: "3:30", img: "ar rahmon song/verithaman.jpeg", file: "ar rahmon song/Verithanam-MassTamilan.io.mp3" },
            { title: "Vetri Kodi Kattu", album: "Padayappa", duration: "4:25", img: "ar rahmon song/padaiyappa.jpeg", file: "ar rahmon song/Vetri-Kodi-Kattu.mp3" }
        ]
    },
    {
        id: 'saiabhyankar',
        name: "Sai Abhyankar",
        desc: "Rising star known for melodious hits.",
        image: "sai abhyankar/sai abhyankar.webp",
        verified: false,
        bgGradient: "rgba(255, 100, 100, 0.2)",
        songs: [
            { title: "Katchi Sera", album: "Single", duration: "3:10", img: "sai abhyankar/katchi sera.jpeg", file: "sai abhyankar/Katchi Sera - MassTamilan.mp3" },
            { title: "Aasa Kooda", album: "Star", duration: "3:35", img: "sai abhyankar/aasa kuda.jpeg", file: "sai abhyankar/Aasa Kooda - MassTamilan.mp3" },
            { title: "God Mode", album: "Karuppu", duration: "3:30", img: "sai abhyankar/karuppu.jpeg", file: "sai abhyankar/God-Mode-MassTamilan.dev.mp3" },
            { title: "Verappa", album: "Karuppu", duration: "4:00", img: "sai abhyankar/verapu.jpeg", file: "sai abhyankar/Verappa-MassTamilan.dev.mp3" },
            { title: "Blud Is On His Way", album: "Single", duration: "3:00", img: "sai abhyankar/remaing.jpeg", file: "sai abhyankar/Blud Is On His Way.mp3" },
            { title: "Kannukulla", album: "Single", duration: "3:30", img: "sai abhyankar/remaing.jpeg", file: "sai abhyankar/Kannukulla.mp3" },
            { title: "Nallaru Po", album: "Single", duration: "3:45", img: "sai abhyankar/remaing.jpeg", file: "sai abhyankar/Nallaru Po.mp3" },
            { title: "Oorum Blood", album: "Single", duration: "3:20", img: "sai abhyankar/orum blood.jpeg", file: "sai abhyankar/Oorum Blood.mp3" },
            { title: "Singari", album: "Single", duration: "3:15", img: "sai abhyankar/remaing.jpeg", file: "sai abhyankar/Singari.mp3" },
            { title: "Yumabaibesa", album: "Single", duration: "3:10", img: "sai abhyankar/remaing.jpeg", file: "sai abhyankar/Yumabaibesa.mp3" }
        ]
    },
    {
        id: 'gvprakash',
        name: "G.V. Prakash Kumar",
        desc: "Versatile composer",
        image: "gv prakash/gv prakash.png",
        verified: true,
        bgGradient: "rgba(255, 200, 50, 0.2)",
        songs: [
            { title: "Amaraan - Title Track", album: "Amaraan", duration: "3:45", img: "gv prakash/amaran.jpeg", file: "gv prakash/Amara - MassTamilan.mp3" },
            { title: "Adi Alaye", album: "Parasakthi", duration: "4:20", img: "gv prakash/adi alaye.jpeg", file: "gv prakash/Adi Alaye.mp3" },
            { title: "Enjaami Thandhaane", album: "Idly Kadai", duration: "5:10", img: "gv prakash/enjaami thandhane.jpeg", file: "gv prakash/Enjaami Thandhaane.mp3" },
            { title: "Kannumuzhi", album: "Mask", duration: "4:05", img: "gv prakash/kannumuzhi.jpeg", file: "gv prakash/Kannumuzhi.mp3" },
            { title: "Mutta Kalakki", album: "Youth", duration: "3:30", img: "gv prakash/mutta kalaki.jpeg", file: "gv prakash/Mutta Kalakki.mp3" },
            { title: "Polladha Boomi", album: "Asuran", duration: "4:45", img: "gv prakash/pollada boomi.jpeg", file: "gv prakash/Polladha-Boomi-MassTamilan.org.mp3" },
            { title: "Ratnamala", album: "Parasakthi", duration: "4:30", img: "gv prakash/ratnamala.jpeg", file: "gv prakash/Ratnamala.mp3" }
        ]
    },
    {
        id: 'illaiyaraja',
        name: "Ilaiyaraaja",
        desc: "Isaignani. The Maestro of Indian Cinema.",
        image: "illayaraja/illaiyaraja.jpeg",
        verified: true,
        bgGradient: "rgba(200, 200, 200, 0.2)",
        songs: [
            { title: "Kaattumalli", album: "Viduthalai", duration: "4:15", img: "illayaraja/viduthalai.jpeg", file: "illayaraja/Kaattumalli-MassTamilan.dev.mp3" },
            { title: "Arutperunjodhi", album: "Viduthalai Part 1", duration: "5:15", img: "illayaraja/viduthalai.jpeg", file: "illayaraja/Arutperunjodhi-MassTamilan.dev.mp3" }
        ]
    },
    {
        id: 'yuvan',
        name: "Yuvan Shankar Raja",
        desc: "Little Maestro. King of BGM.",
        image: "yuvan song/yuvan shankar raja.jpeg",
        verified: true,
        bgGradient: "rgba(100, 255, 100, 0.2)",
        songs: [
            { title: "Whistle Podu", album: "GOAT", duration: "4:00", img: "yuvan song/whistle podu.jpeg", file: "yuvan song/Whistle-Podu-MassTamilan.dev.mp3" },
            { title: "Saachitale", album: "Love Today", duration: "3:58", img: "yuvan song/sachitale.jpeg", file: "yuvan song/Saachitale-MassTamilan.dev.mp3" },
            { title: "Ennai Vittu", album: "Love Today", duration: "4:02", img: "yuvan song/ennai vittu.jpeg", file: "yuvan song/Ennai-Vittu-MassTamilan.dev.mp3" },
        ]
    },
    {
        id: 'vijayantony',
        name: "Vijay Antony",
        desc: "Music Director turned Actor.",
        image: "vijay antony/vijay antony.jpeg",
        verified: true,
        bgGradient: "rgba(255, 50, 50, 0.2)",
        songs: [
            { title: "Anti Bikili", album: "Pichaikkaran 2", duration: "3:45", img: "vijay antony/antibikili.jpeg", file: "vijay antony/Anti-Bikili-MassTamilan.so.mp3" },
            { title: "Naga Naga", album: "Thimiru Pudichavan", duration: "4:30", img: "vijay antony/naga naga.jpeg", file: "vijay antony/Naga-Naga-MassTamilan.com.mp3" },
            { title: "Thimiru Pudichavan", album: "Thimiru Pudichavan", duration: "4:00", img: "vijay antony/naga naga.jpeg", file: "vijay antony/Thimirupudichavan-MassTamilan.com.mp3" },
            { title: "Unakkaga Varuven", album: "Trauma", duration: "4:15", img: "vijay antony/unakagavaruven.jpeg", file: "vijay antony/Unakkaga-Varuven.mp3" }
        ]
    },
    {
        id: 'hiphoptamizha',
        name: "Hiphop Tamizha",
        desc: "The pioneers of Tamil Hip Hop.",
        image: "hiphop tamizha/hiphop tamizha.jpg",
        verified: true,
        bgGradient: "rgba(50, 50, 255, 0.2)",
        songs: [
            { title: "Ready Steady Go", album: "Single", duration: "3:58", img: "hiphop tamizha/ready study go.jpeg", file: "hiphop tamizha/Ready-Steady-Go-MassTamilan.fm.mp3" },
            { title: "Veeran Thiruvizha", album: "Veeran", duration: "3:49", img: "hiphop tamizha/veeran.jpeg", file: "hiphop tamizha/Veeran-Thiruvizha-MassTamilan.dev.mp3" },
            { title: "Thunder Kaaran", album: "Veeran", duration: "2:41", img: "hiphop tamizha/veeran.jpeg", file: "hiphop tamizha/Thunder-Kaaran-MassTamilan.dev.mp3" },
            { title: "Papara Mitta", album: "Veeran", duration: "3:06", img: "hiphop tamizha/veeran.jpeg", file: "hiphop tamizha/Papara-Mitta-MassTamilan.dev.mp3" },
            { title: "Andome Kidukidunga", album: "Single", duration: "3:10", img: "hiphop tamizha/veeran.jpeg", file: "hiphop tamizha/Andome-Kidukidunga-MassTamilan.dev.mp3" },
            { title: "Bye Bye Bhaiya", album: "Buddy", duration: "3:30", img: "hiphop tamizha/bye bye bhaiya.jpeg", file: "hiphop tamizha/Bye Bye Bhaiya - MassTamilan(1) - Copy.mp3" }
        ]
    },
    {
        id: 'harrisjayaraj',
        name: "Harris Jayaraj",
        desc: "Melody King. Known for his unique sound.",
        image: "harris jayaraj/harris jayaraj.jpeg",
        verified: true,
        bgGradient: "rgba(255, 165, 0, 0.2)",
        songs: [
            { title: "Adiye", album: "Bachelor", duration: "4:00", img: "harris jayaraj/harris jayaraj.jpeg", file: "harris jayaraj/Adiye-Adiye.mp3" },
            { title: "Hey Amigo", album: "Kaappaan", duration: "5:15", img: "harris jayaraj/harris jayaraj.jpeg", file: "harris jayaraj/Hey-Amigo-MassTamilan.org.mp3" },
            { title: "Mutta Bhajji", album: "Gethu", duration: "4:10", img: "harris jayaraj/harris jayaraj.jpeg", file: "harris jayaraj/Mutta-Bhajji.mp3" }
        ]
    },
    {
        id: 'thamans',
        name: "Thaman S",
        desc: "High energy composer.",
        image: "thamon s/thamon s.jpeg",
        verified: true,
        bgGradient: "rgba(200, 50, 200, 0.2)",
        songs: [
            { title: "Celebration of Varisu", album: "Varisu", duration: "3:40", img: "thamon s/thamon s.jpeg", file: "thamon s/Celebration-Of-Varisu-MassTamilan.dev.mp3" },
            { title: "Jimikki Ponnu", album: "Varisu", duration: "3:50", img: "thamon s/thamon s.jpeg", file: "thamon s/Jimikki-Ponnu-MassTamilan.dev.mp3" },
            { title: "Nache Nache", album: "Single", duration: "3:30", img: "thamon s/thamon s.jpeg", file: "thamon s/Nache Nache.mp3" },
            { title: "Ranjithame", album: "Varisu", duration: "4:20", img: "thamon s/thamon s.jpeg", file: "thamon s/Ranjithame-MassTamilan.dev.mp3" },
            { title: "Rebel Saab", album: "Single", duration: "3:15", img: "thamon s/thamon s.jpeg", file: "thamon s/Rebel Saab.mp3" },
            { title: "Thee Thalapathy", album: "Varisu", duration: "4:05", img: "thamon s/thamon s.jpeg", file: "thamon s/Thee-Thalapathy-MassTamilan.dev.mp3" },
            { title: "Kaalai Theme", album: "Kaalai", duration: "3:15", img: "thamon s/thamon s.jpeg", file: "thamon s/Kaalai-Theme-MassTamilan.com.mp3" }
        ]
    },
    {
        id: 'santhoshnarayanan',
        name: "Santhosh Narayanan",
        desc: "SaNa. The unique voice of Tamil cinema.",
        image: "santhosh narayanan/santhosh narayanan.jpeg",
        verified: true,
        bgGradient: "rgba(50, 200, 200, 0.2)",
        songs: [
            { title: "Azhagiya Soodana Poovey", album: "Bairavaa", duration: "4:15", img: "santhosh narayanan/bairava.jpeg", file: "santhosh narayanan/Azhagiya-Soodana-Poovey.mp3" },
            { title: "Kanimaa", album: "Single", duration: "3:40", img: "santhosh narayanan/kanimaa.jpeg", file: "santhosh narayanan/Kanimaa.mp3" },
            { title: "Nillayo", album: "Bairavaa", duration: "3:55", img: "santhosh narayanan/bairava.jpeg", file: "santhosh narayanan/Nillayo.mp3" },
            { title: "Oyyaram", album: "Single", duration: "3:30", img: "santhosh narayanan/oyyaram.jpeg", file: "santhosh narayanan/Oyyaram-MassTamilan.dev.mp3" },
            { title: "Papa Papa", album: "Bairavaa", duration: "4:10", img: "santhosh narayanan/bairava.jpeg", file: "santhosh narayanan/Papa-Papa.mp3" },
            { title: "Rakita Rakita Rakita", album: "Jagame Thandhiram", duration: "4:00", img: "santhosh narayanan/rakita rakita.jpeg", file: "santhosh narayanan/Rakita-Rakita-Rakita-MassTamilan.fm.mp3" },
            { title: "The One", album: "Single", duration: "3:45", img: "santhosh narayanan/the one.jpeg", file: "santhosh narayanan/The One.mp3" }
        ]
    },
    {
        id: 'dimman',
        name: "D. Imman",
        desc: "Melody Maker.",
        image: "d immon/d immon.jpeg",
        verified: true,
        bgGradient: "rgba(100, 100, 255, 0.2)",
        songs: [
            { title: "Adivellakkaara Velaayi", album: "Rajini Murugan", duration: "4:20", img: "d immon/d immon.jpeg", file: "d immon/Adivellakkaara-Velaayi-MassTamilan.com.mp3" },
            { title: "Jilla Theme", album: "Jilla", duration: "2:10", img: "d immon/d immon.jpeg", file: "d immon/Jilla-Theme.mp3" },
            { title: "Jingunamani", album: "Jilla", duration: "4:05", img: "d immon/d immon.jpeg", file: "d immon/Jingunamani.mp3" },
            { title: "Kandangi Kandangi", album: "Jilla", duration: "4:30", img: "d immon/d immon.jpeg", file: "d immon/Kandangi-Kandangi.mp3" },
            { title: "Rajini Murugan", album: "Rajini Murugan", duration: "3:55", img: "d immon/d immon.jpeg", file: "d immon/Rajini Murugan.mp3" },
            { title: "Sandakkaari", album: "Kadaikutty Singam", duration: "4:15", img: "d immon/d immon.jpeg", file: "d immon/Sandakkaari-MassTamilan.com.mp3" },
            { title: "Un Mela Oru Kannu", album: "Rajini Murugan", duration: "4:00", img: "d immon/d immon.jpeg", file: "d immon/Un Mela Oru Kannu.mp3" }
        ]
    }
];

// Local Storage Keys
const STORAGE_KEY = 'music_player_likes_v1';

function saveLikes() {
    const likes = {};
    artistsData.forEach((artist, aIdx) => {
        artist.songs.forEach((song, sIdx) => {
            if (song.liked) {
                const key = `${artist.name}-${song.title}`;
                likes[key] = true;
            }
        });
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
}

function loadLikes() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
        const likes = JSON.parse(stored);
        artistsData.forEach(artist => {
            artist.songs.forEach(song => {
                const key = `${artist.name}-${song.title}`;
                if (likes[key]) {
                    song.liked = true;
                }
            });
        });
    } catch (e) {
        console.error("Failed to load likes", e);
    }
}

// Initialize Likes
loadLikes();

let currentArtistIndex = 0;
let currentView = 'home'; // 'home', 'artist', 'favorites', 'album', 'discover'

const albumSongsList = [
    {
        title: "Kaakum Vadivel",
        album: "Album Song",
        duration: "4:05",
        img: "album song/kaakum vadivel.jpeg",
        file: "album song/Kaakum Vadivel.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 0
    },
    {
        title: "VETRIVEL",
        album: "Album Song",
        duration: "3:30",
        img: "album song/vetrivel.webp",
        file: "album song/VETRIVEL.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 1
    },
    {
        title: "Kaathu Mela",
        album: "Album Song",
        duration: "3:10",
        img: "album song/kaathu mela.webp",
        file: "album song/Kaathu Mela.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 2
    },
    {
        title: "Paiya Dei",
        album: "Album Song",
        duration: "3:20",
        img: "album song/paiya dei.webp",
        file: "album song/Paiya Dei.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 3
    },
    {
        title: "Sigma Paiyan",
        album: "Album Song",
        duration: "3:15",
        img: "album song/sigma paiyan.webp",
        file: "album song/Sigma Paiyan.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 4
    },
    {
        title: "Vibe",
        album: "Album Song",
        duration: "3:05",
        img: "album song/vibe.webp",
        file: "album song/Vibe.mp3",
        artistName: "Unknown",
        artistIndex: -1,
        songIndex: 5
    }
];
let currentPlaylist = []; // Track the current list of songs playing
let currentSongIndex = 0; // Track index in the currentPlaylist
let currentPlayingSong = null;
let isFavoritesPlaying = false; // Track if we are playing from favorites

// View Switching References
const homeView = document.getElementById('home-view');
const favoritesView = document.getElementById('favorites-section');
const popularSection = document.getElementById('popular-section');
const featuredArtist = document.querySelector('.featured-artist');
const navArrows = document.querySelector('.nav-arrows');
const topSearchBar = document.querySelector('.top-bar .search-bar');

function hideAllViews() {
    if (homeView) homeView.style.display = 'none';
    if (favoritesView) favoritesView.style.display = 'none';
    if (popularSection) popularSection.style.display = 'none';
    if (featuredArtist) featuredArtist.style.display = 'none';
    if (topSearchBar) topSearchBar.style.display = 'none';

    // Clear playlist search when switching views
    const playlistSearchInput = document.getElementById('playlist-search-input');
    if (playlistSearchInput) playlistSearchInput.value = '';
}

function renderHome() {
    const grid = document.querySelector('.artist-grid');
    if (!grid) return;
    grid.innerHTML = artistsData.map((artist, index) => `
        <div class="artist-card" onclick="loadArtist(${index})">
            <div class="image-wrapper" style="position: relative;">
                <img src="${artist.image}" alt="${artist.name}">
                <div class="play-icon">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <h3>${artist.name}</h3>
            <p>${artist.desc}</p>
        </div>
    `).join('');
}

function showHome() {
    currentView = 'home';
    hideAllViews();
    if (homeView) homeView.style.display = 'block';

    if (topSearchBar) topSearchBar.style.display = 'flex';

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector('.nav-links li:first-child').classList.add('active'); // Home

    navArrows.style.opacity = '0';
    renderHome();
}

function showFavorites() {
    currentView = 'favorites';
    hideAllViews();
    if (favoritesView) favoritesView.style.display = 'block';

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector('.nav-links li:nth-child(4)').classList.add('active');

    renderFavorites();
}

function showDiscover() {
    currentView = 'discover';
    hideAllViews();
    if (popularSection) {
        popularSection.style.display = 'block';
        const popularHeader = popularSection.querySelector('h3');
        if (popularHeader) popularHeader.textContent = 'Popular Songs 🔥';
    }

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector('.nav-links li:nth-child(2)').classList.add('active'); // Discover

    renderPopularSongs();
}

function renderPopularSongs() {
    const songList = document.querySelector('.song-list, .album-grid');
    if (!songList) return;
    songList.className = 'song-list';

    const popularSongs = [];
    artistsData.forEach((artist, artistIdx) => {
        if (artist.songs.length > 0) {
            const song = { ...artist.songs[0], artistName: artist.name, artistIndex: artistIdx, songIndex: 0 };
            popularSongs.push(song);
        }
    });

    currentPlaylist = popularSongs;
    isFavoritesPlaying = false;

    songList.innerHTML = popularSongs.map((song, i) => `
        <div class="song-row" data-artist-index="${song.artistIndex}" data-song-index="${song.songIndex}">
            <span class="number">${i + 1}</span>
            <img src="${song.img}" alt="${song.title}">
            <div class="song-info">
                <h4>${song.title}</h4>
                <p>${song.artistName}</p>
            </div>
            <span class="duration">${song.duration}</span>
            <i class="${song.liked ? 'fa-solid' : 'fa-regular'} fa-heart like-btn" style="color: ${song.liked ? '#1DB954' : 'var(--text-dim)'}"></i>
        </div>
    `).join('');
}

function showAlbumSongs() {
    currentView = 'album';
    hideAllViews();
    if (popularSection) {
        popularSection.style.display = 'block';
        const popularHeader = popularSection.querySelector('h3');
        if (popularHeader) popularHeader.textContent = 'Album Songs 💿';
    }

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    const albumLi = document.getElementById('album-song-link')?.parentElement;
    if (albumLi) albumLi.classList.add('active');

    renderAlbumCards(albumSongsList);
}

function renderAlbumCards(songs) {
    const songList = document.querySelector('.song-list, .album-grid');
    if (songList) {
        // Change songList class to album-grid for this view
        songList.className = 'album-grid';

        if (songs.length === 0) {
            songList.innerHTML = '';
            return;
        }

        songList.innerHTML = songs.map((song, i) => `
            <div class="album-card" data-album-song-index="${i}">
                <div class="image-container">
                    <img src="${song.img}" alt="${song.title}">
                </div>
                <div class="song-details">
                    <h4>${song.title}</h4>
                    <p>${song.album}</p>
                    <span style="font-size: 0.85rem; color: var(--text-dim); margin-top: 5px; display: block;">${song.duration}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <i class="${song.liked ? 'fa-solid' : 'fa-regular'} fa-heart like-btn" style="color: ${song.liked ? '#1DB954' : 'var(--text-dim)'}; font-size: 1.2rem;"></i>
                    <div class="play-circle" style="width: 32px; height: 32px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: black; font-size: 0.8rem;">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
        `).join('');

        // Add play capability for these songs
        songList.querySelectorAll('.album-card').forEach(row => {
            row.onclick = function () {
                const idx = parseInt(this.getAttribute('data-album-song-index'));
                currentPlaylist = songs;
                currentSongIndex = idx;
                playSong(songs[idx]);
            };
        });
    }
}

function loadArtist(index) {
    currentView = 'artist';
    currentArtistIndex = index;
    hideAllViews();

    if (featuredArtist) featuredArtist.style.display = 'flex';
    if (popularSection) {
        popularSection.style.display = 'block';
        const popularHeader = popularSection.querySelector('h3');
        if (popularHeader) popularHeader.textContent = 'Popular';
    }

    navArrows.style.opacity = '1';

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));

    const artist = artistsData[index];

    document.querySelector('.background-image').style.backgroundImage = `url('${artist.image}')`;
    document.querySelector('.artist-content h1').textContent = artist.name;
    document.querySelector('.artist-content p').textContent = artist.desc;
    document.querySelector('.artist-image img').src = artist.image;
    document.querySelector('.featured-artist').style.background = `linear-gradient(135deg, ${artist.bgGradient}, rgba(0,0,0,0))`;

    const verifiedBadge = document.querySelector('.verified');
    if (artist.verified) {
        verifiedBadge.style.display = 'flex';
    } else {
        verifiedBadge.style.display = 'none';
    }

    const playlistSearchInput = document.getElementById('playlist-search-input');
    if (playlistSearchInput) {
        playlistSearchInput.value = '';
    }

    const songsWithIndices = renderArtistSongs(index, '');

    currentPlaylist = songsWithIndices || [];
    isFavoritesPlaying = false;
}

function renderArtistSongs(artistIndex, query = '') {
    const artist = artistsData[artistIndex];
    const songList = document.querySelector('.song-list, .album-grid');
    songList.className = 'song-list';
    const songsWithIndex = artist.songs.map((song, index) => ({ ...song, originalIndex: index }));

    const filteredSongs = query
        ? songsWithIndex.filter(s => s.title.toLowerCase().includes(query.toLowerCase()))
        : songsWithIndex;

    if (filteredSongs.length === 0) {
        songList.innerHTML = `<div style="padding: 20px; color: var(--text-dim); text-align: center;">No songs found matching "${query}"</div>`;
        return [];
    }

    songList.innerHTML = filteredSongs.map((song, i) => `
        <div class="song-row" data-artist-index="${artistIndex}" data-song-index="${song.originalIndex}" data-index="${song.originalIndex}">
            <span class="number">${i + 1}</span>
            <img src="${song.img}" alt="${song.title}">
            <div class="song-info">
                <h4>${song.title}</h4>
                <p>${song.album}</p>
            </div>
            <span class="duration">${song.duration}</span>
            <i class="${song.liked ? 'fa-solid' : 'fa-regular'} fa-heart like-btn" style="color: ${song.liked ? '#1DB954' : 'var(--text-dim)'}"></i>
        </div>
    `).join('');

    return filteredSongs;
}

const playlistSearchInput = document.getElementById('playlist-search-input');
if (playlistSearchInput) {
    playlistSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (currentView === 'album') {
            const filtered = albumSongsList.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));
            renderAlbumCards(filtered);
            currentPlaylist = filtered;
        } else if (currentView === 'artist' && typeof currentArtistIndex !== 'undefined') {
            const songs = renderArtistSongs(currentArtistIndex, query);
            currentPlaylist = songs || [];
        }
    });
}

function renderFavorites() {
    const list = document.querySelector('.favorites-list');
    list.className = 'favorites-list song-list';
    list.innerHTML = '';

    const allSongs = [];
    artistsData.forEach((artist, artistIdx) => {
        artist.songs.forEach((song, songIdx) => {
            song.artistName = artist.name;
            song.artistIndex = artistIdx;
            song.songIndex = songIdx;
            allSongs.push(song);
        });
    });

    const favoriteSongs = allSongs.filter(song => song.liked);

    if (favoritesView.style.display === 'block') {
        currentPlaylist = favoriteSongs;
        isFavoritesPlaying = true;
    }

    if (favoriteSongs.length === 0) {
        list.innerHTML = '<p style="color: var(--text-dim); padding: 20px;">No favorites yet. Click the heart icon to add some! 💚</p>';
        return;
    }

    list.innerHTML = favoriteSongs.map((song, i) => `
        <div class="song-row" data-artist-index="${song.artistIndex}" data-song-index="${song.songIndex}">
            <span class="number">${i + 1}</span>
            <img src="${song.img}" alt="${song.title}">
            <div class="song-info">
                <h4>${song.title}</h4>
                <p>${song.artistName || song.album}</p>
            </div>
            <span class="duration">${song.duration}</span>
            <i class="fa-solid fa-heart like-btn" style="color: #1DB954"></i>
        </div>
    `).join('');
}

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.querySelector('.bottom-player .play-pause-btn');
const playPauseIcon = document.querySelector('.bottom-player .play-pause-btn i');

function updateBottomHeart(isLiked) {
    const bottomHeart = document.querySelector('.bottom-player .fa-heart');
    if (bottomHeart) {
        if (isLiked) {
            bottomHeart.classList.remove('fa-regular');
            bottomHeart.classList.add('fa-solid');
            bottomHeart.style.color = '#1DB954';
        } else {
            bottomHeart.classList.remove('fa-solid');
            bottomHeart.classList.add('fa-regular');
            bottomHeart.style.color = 'var(--text-dim)';
        }
    }
}

function playSong(songOrTitle, img, file) {
    let title, songFile, songImg;

    if (typeof songOrTitle === 'object') {
        currentPlayingSong = songOrTitle;
        title = songOrTitle.title;
        songImg = songOrTitle.img;
        songFile = songOrTitle.file;

        if (currentPlaylist.length > 0) {
            let foundIndex = currentPlaylist.indexOf(currentPlayingSong);
            if (foundIndex === -1) {
                foundIndex = currentPlaylist.findIndex(s => s.file === songFile);
            }
            if (foundIndex !== -1) {
                currentSongIndex = foundIndex;
            }
        }

    } else {
        title = songOrTitle;
        songImg = img;
        songFile = file;
    }

    document.querySelector('.bottom-player').style.display = 'flex';
    document.querySelector('.bottom-player .song-info h4').textContent = title;
    document.querySelector('.bottom-player .song-info img').src = songImg;

    if (currentPlayingSong) {
        updateBottomHeart(currentPlayingSong.liked);
    }

    let artistName = "";
    if (currentPlayingSong && currentPlayingSong.artistName) {
        artistName = currentPlayingSong.artistName;
    } else {
        const currentArtist = artistsData[currentArtistIndex];
        artistName = currentArtist ? currentArtist.name : "Unknown Artist";
    }
    document.querySelector('.bottom-player .song-info p').textContent = artistName;

    if (songFile) {
        // Essential for some mobile browsers to reset state
        audioPlayer.pause();
        audioPlayer.src = encodeURI(songFile);
        audioPlayer.load(); // Forces reload for new source

        const playPromise = audioPlayer.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
                document.querySelector('.bottom-player').classList.add('playing');
            }).catch(error => {
                console.error("Playback failed:", error);
                // Fallback: If autoplay is blocked, update UI to show it's paused
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
                document.querySelector('.bottom-player').classList.remove('playing');
            });
        }
    } else {
        alert(`Playing ${title} (Mock Mode - No file provided)`);
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        document.querySelector('.bottom-player').classList.add('playing');
    }
}

window.togglePlay = function () {
    if (audioPlayer.paused) {
        if (audioPlayer.src && audioPlayer.src !== "") {
            const playPromise = audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playPauseIcon.classList.remove('fa-play');
                    playPauseIcon.classList.add('fa-pause');
                    document.querySelector('.bottom-player').classList.add('playing');
                }).catch(e => console.error("Toggle play failed", e));
            }
        } else {
            const artist = artistsData[currentArtistIndex];
            if (artist && artist.songs.length > 0) {
                const firstSong = artist.songs[0];
                playSong(firstSong);
            }
        }
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
        document.querySelector('.bottom-player').classList.remove('playing');
    }
};

window.nextSong = function () {
    if (currentPlaylist.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    playSong(currentPlaylist[currentSongIndex]);
};

window.prevSong = function () {
    if (currentPlaylist.length === 0) return;
    currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentPlaylist[currentSongIndex]);
};

const mainPlayBtn = document.querySelector('.play-btn');
if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
        window.togglePlay();
    });
}

const stopBtn = document.querySelector('.stop-btn');
if (stopBtn) {
    stopBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    });
}

const progressBar = document.querySelector('.bottom-player .progress-bar input');
const currentTimeEl = document.querySelector('.bottom-player .progress-bar span:first-child');
const durationEl = document.querySelector('.bottom-player .progress-bar span:last-child');

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

audioPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioPlayer;
    if (isNaN(duration)) return;

    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressBar.addEventListener('input', (e) => {
    const seekTime = (audioPlayer.duration / 100) * e.target.value;
    audioPlayer.currentTime = seekTime;
});

const volumeSlider = document.querySelector('.volume-controls input');
if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value / 100;
    });
}

function nextArtist() {
    currentArtistIndex = (currentArtistIndex + 1) % artistsData.length;
    loadArtist(currentArtistIndex);
}

function prevArtist() {
    currentArtistIndex = (currentArtistIndex - 1 + artistsData.length) % artistsData.length;
    loadArtist(currentArtistIndex);
}

window.nextArtist = nextArtist;
window.prevArtist = prevArtist;

document.querySelector('.nav-links li:first-child a').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

document.querySelector('.nav-links li:nth-child(4) a').addEventListener('click', (e) => {
    e.preventDefault();
    showFavorites();
});

document.querySelector('.nav-links li:nth-child(2) a').addEventListener('click', (e) => {
    e.preventDefault();
    showDiscover();
});

const albumSongLink = document.getElementById('album-song-link');
if (albumSongLink) {
    albumSongLink.onclick = (e) => {
        e.preventDefault();
        showAlbumSongs();
    };
}

function updateProfileAvatar() {
    const email = localStorage.getItem('userEmail');
    const container = document.getElementById('user-avatar-container');
    const profileDiv = document.getElementById('user-profile');

    if (email && container) {
        const firstLetter = email.trim().charAt(0).toUpperCase();
        container.innerHTML = `<div class="user-avatar-letter">${firstLetter}</div>`;

        // Add logout functionality on click if logged in
        if (profileDiv) {
            profileDiv.onclick = function () {
                if (confirm(`Logged in as ${email}. Do you want to log out?`)) {
                    localStorage.removeItem('userEmail');
                    window.location.href = 'index.html';
                }
            };
        }
    } else {
        // Default behavior for guest
        if (profileDiv) {
            profileDiv.onclick = () => window.location.href = 'index.html';
        }
    }
}

// Audio Error Handling
if (audioPlayer) {
    audioPlayer.addEventListener('error', (e) => {
        let msg = "Unknown error";
        if (audioPlayer.error) {
            switch (audioPlayer.error.code) {
                case 1: msg = "Playback aborted"; break;
                case 2: msg = "Network error"; break;
                case 3: msg = "Audio decode failed"; break;
                case 4: msg = "Format not supported"; break;
            }
            console.error("Audio Error:", msg, audioPlayer.src);
        }
    });
}
// Check for avatar on load
window.addEventListener('DOMContentLoaded', () => {
    showHome();
    updateProfileAvatar();
});

const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-bar i');

if (searchIcon && searchInput) {
    searchIcon.style.cursor = 'pointer';

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        const index = artistsData.findIndex(artist => artist.name.toLowerCase().includes(query));

        if (index !== -1) {
            currentArtistIndex = index;
            loadArtist(currentArtistIndex);
            searchInput.value = '';
            searchInput.blur();
        } else {
            alert('Artist not found!');
        }
    }

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchIcon.addEventListener('click', performSearch);
}

function toggleLike(element) {
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');

    if (element.classList.contains('fa-solid')) {
        element.style.color = '#1DB954';
    } else {
        element.style.color = 'var(--text-dim)';
    }
}

document.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.like-btn');
    if (likeBtn) {
        e.stopPropagation();

        const songRow = e.target.closest('.song-row');
        if (!songRow) return;

        let artistIdx = songRow.getAttribute('data-artist-index');
        let songIdx = songRow.getAttribute('data-song-index');
        const legacyIndex = songRow.getAttribute('data-index');

        if (artistIdx === null || songIdx === null) {
            if (legacyIndex !== null) {
                artistIdx = currentArtistIndex;
                songIdx = legacyIndex;
            } else {
                return;
            }
        }

        const artist = artistsData[artistIdx];
        const song = artist.songs[songIdx];

        song.liked = !song.liked;
        saveLikes();
        toggleLike(likeBtn);

        if (currentPlayingSong && currentPlayingSong.title === song.title) {
            updateBottomHeart(song.liked);
        }

        const favoritesView = document.getElementById('favorites-section');
        if (favoritesView && favoritesView.style.display === 'block') {
            renderFavorites();
        }
        return;
    }

    const songRow = e.target.closest('.song-row');
    if (songRow && !e.target.closest('.like-btn')) {
        let artistIdx = songRow.getAttribute('data-artist-index');
        let songIdx = songRow.getAttribute('data-song-index');
        const legacyIndex = songRow.getAttribute('data-index');

        if (artistIdx === null || songIdx === null) {
            if (legacyIndex !== null) {
                artistIdx = currentArtistIndex;
                songIdx = legacyIndex;
            } else {
                return;
            }
        }

        const artist = artistsData[artistIdx];
        const song = artist.songs[songIdx];
        playSong(song);
    }
});

const bottomHeart = document.querySelector('.bottom-player .fa-heart');
if (bottomHeart) {
    bottomHeart.addEventListener('click', (e) => {
        if (currentPlayingSong) {
            currentPlayingSong.liked = !currentPlayingSong.liked;
            updateBottomHeart(currentPlayingSong.liked);
            saveLikes();

            if (favoritesView.style.display === 'block') {
                renderFavorites();
            }
            else if (featuredArtist.style.display === 'flex' && artistsData[currentArtistIndex].songs.includes(currentPlayingSong)) {
                loadArtist(currentArtistIndex);
            }
        } else {
            toggleLike(bottomHeart);
        }
    });
}

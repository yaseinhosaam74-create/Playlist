const trackList = [
    // The Marías (10)
    { file: "TheMarias1", name: "No One Noticed", artist: "The Marías" },
    { file: "TheMarias2", name: "Sienna", artist: "The Marías" },
    { file: "TheMarias3", name: "Heavy", artist: "The Marías" },
    { file: "TheMarias4", name: "Nobody New", artist: "The Marías" },
    { file: "TheMarias5", name: "Back to Me", artist: "The Marías" },
    { file: "TheMarias6", name: "Blur", artist: "The Marías" },
    { file: "TheMarias7", name: "Real Life", artist: "The Marías" },
    { file: "TheMarias8", name: "If Only", artist: "The Marías" },
    { file: "TheMarias9", name: "Just a Feeling", artist: "The Marías" },
    { file: "TheMarias10", name: "Only in My Dreams", artist: "The Marías" },
    // Billie Eilish (10)
    { file: "Billie1", name: "Wildflower", artist: "Billie Eilish" },
    { file: "Billie2", name: "Birds of a Feather", artist: "Billie Eilish" },
    { file: "Billie3", name: "Chihiro", artist: "Billie Eilish" },
    { file: "Billie4", name: "Everything I Wanted", artist: "Billie Eilish" },
    { file: "Billie5", name: "TV", artist: "Billie Eilish" },
    { file: "Billie6", name: "No Time to Die", artist: "Billie Eilish" },
    { file: "Billie7", name: "NDA", artist: "Billie Eilish" },
    { file: "Billie8", name: "Bad Guy", artist: "Billie Eilish" },
    { file: "Billie9", name: "Bitches", artist: "Billie Eilish" },
    { file: "Billie10", name: "Ocean Eyes", artist: "Billie Eilish" },
    // Ramy Sabry(11)
    { file: "Ramy1", name: "BAHKI ALEKY", artist: "Ramy Sabry" },
    { file: "Ramy2", name: " EL HOB EIBNA", artist: "Ramy Sabry" },
    { file: "Ramy3", name: "YMKEN KHAIR", artist: "Ramy Sabry" },
    { file: "Ramy4", name: " MOSH FAREA", artist: "Ramy Sabry" },
    { file: "Ramy5", name: " MASAALTNEiSSH", artist: "Ramy Sabry" },
    { file: "Ramy6", name: "WLSA YAMA", artist: "Ramy Sabry" },
    { file: "Ramy7", name: "GAHREB EL HOB", artist: "Ramy Sabry" },
    { file: "Ramy8", name: "BE ALBY MAAK", artist: "Ramy Sabry" },
    { file: "Ramy9", name: "GAMDT EINY", artist: "Ramy Sabry" },
    { file: "Ramy10", name: "MAHBTSH", artist: "Ramy Sabry" },
    { file: "Ramy11", name: "BAHKELAK AN EL AYAM", artist: "Ramy Sabry" },
    // Maha Ftouni (11)
    { file: "Maha1", name: " EL EIN BE EL EIN", artist: "Maha Ftouni" },
    { file: "Maha2", name: "AWEL HOB", artist: "Maha Ftouni" },
    { file: "Maha3", name: "MASAAT", artist: "Maha Ftouni" },
    { file: "Maha4", name: "AGMAL FARHA", artist: "Maha Ftouni" },
    { file: "Maha5", name: "MA3 EL SALAMA", artist: "Maha Ftouni" },
    { file: "Maha6", name: "YA WAHECHNY", artist: "Maha Ftouni" },
    { file: "Maha7", name: "EL SABR GAMIL", artist: "Maha Ftouni" },
    { file: "Maha8", name: "MA TEALAASHI", artist: "Maha Ftouni" },
    { file: "Maha9", name: "SAFRT BAAED", artist: "Maha Ftouni" },
    { file: "Maha10", name: "MA TWGAANISH", artist: "Maha Ftouni" },
    { file: "Maha11", name: "FEHAA ROGOA", artist: "Maha Ftouni" },
    // Yoursxm (9)
    { file: "Yoursxm1", name: "Thinking of you", artist: "Yoursxm" },
    { file: "Yoursxm2", name: "WHAT R U STUPID", artist: "Yoursxm" },
    { file: "Yoursxm3", name: "Maybe not good", artist: "Yoursxm" },
    { file: "Yoursxm4", name: "I miss you a lot", artist: "Yoursxm" },
    { file: "Yoursxm5", name: "Call me", artist: "Yoursxm" },
    { file: "Yoursxm6", name: "Dream big", artist: "Yoursxm" },
    { file: "Yoursxm7", name: "Remember", artist: "Yoursxm" },
    { file: "Yoursxm8", name: "In another life", artist: "Yoursxm" },
    { file: "Yoursxm9", name: "Why cry", artist: "Yoursxm" },
    // Cigarettes After Sex (5)
    { file: "CAS1", name: "Apocalypse", artist: "Cigarettes After Sex" },
    { file: "CAS2", name: "Cry", artist: "Cigarettes After Sex" },
    { file: "CAS3", name: "K.", artist: "Cigarettes After Sex" },
    { file: "CAS4", name: "Sunsetz", artist: "Cigarettes After Sex" },
    { file: "CAS5", name: "Sweet", artist: "Cigarettes After Sex" },
    // Ahmed Kamel  (5)
    { file: "Ahmed1", name: "YA LEIL ", artist: "Ahmed Kamel " },
    { file: "Ahmed2", name: " 3LA 3INY", artist: "Ahmed Kamel " },
    { file: "Ahmed3", name: "2OLY", artist: "Ahmed Kamel " },
    { file: "Ahmed4", name: " BAAD EL KLAM", artist: "Ahmed Kamel " },
    { file: "Ahmed5", name: "KAN FE TEFL", artist: "Ahmed Kamel " },
    // Legacy (4)
    { file: "Legacy1", name: "EL NEYA", artist: "Legacy" },
    { file: "Legacy2", name: "3ALAM KADABA", artist: "Legacy" },
    { file: "Legacy3", name: "TROUH LMEEN", artist: "Legacy" },
    { file: "Legacy4", name: "ELWA2T ELDAYE3", artist: "Legacy" },
    // Rahma Riad (1)
    { file: "Rahma1", name: " TAA KHABBIK", artist: "Rahma Riad" }
];

let currentIndex = 0;
const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');

window.addEventListener('load', () => {
    // جلب البيانات المحفوظة من الذاكرة المحلية
    const savedIndex = localStorage.getItem('lastTrackIndex');
    const savedTime = localStorage.getItem('lastTrackTime');

    if (savedIndex !== null) {
        currentIndex = parseInt(savedIndex);
    }

    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-player').classList.remove('hidden');

        const urlParams = new URLSearchParams(window.location.search);
        const artistParam = urlParams.get('artist');

        if (artistParam) {
            const artistIndex = trackList.findIndex(t => 
                t.artist.toLowerCase().includes(artistParam.toLowerCase())
            );
            if (artistIndex !== -1) {
                currentIndex = artistIndex;
            }
        }

        loadTrack(currentIndex);

        // إذا كان هناك وقت محفوظ، نضبطه بعد تحميل الأغنية
        if (savedTime !== null && !artistParam) {
            audio.currentTime = parseFloat(savedTime);
        }
    }, 3000);
});

function loadTrack(index) {
    const track = trackList[index];
    document.getElementById('track-name').innerText = track.name;
    document.getElementById('track-artist').innerText = track.artist;
    document.getElementById('track-art').src = `${track.file}.jpg`;
    audio.src = `${track.file}.mp3`;

    // حفظ الفهرس الحالي للأغنية
    localStorage.setItem('lastTrackIndex', index);

    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.name, artist: track.artist,
            artwork: [{ src: `${track.file}.jpg`, sizes: '512x512', type: 'image/jpeg' }]
        });
        navigator.mediaSession.setActionHandler('play', togglePlay);
        navigator.mediaSession.setActionHandler('pause', togglePlay);
        navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
        navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
    }
}

function togglePlay() {
    if (audio.paused) { audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; }
    else { audio.pause(); playBtn.innerHTML = '<i class="fas fa-play"></i>'; }
}

function nextTrack() { currentIndex = (currentIndex + 1) % trackList.length; loadTrack(currentIndex); audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; }
function prevTrack() { currentIndex = (currentIndex - 1 + trackList.length) % trackList.length; loadTrack(currentIndex); audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; }

playBtn.onclick = togglePlay;
document.getElementById('next-btn').onclick = nextTrack;
document.getElementById('prev-btn').onclick = prevTrack;
audio.onended = nextTrack;

audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
    document.getElementById('current-time').innerText = formatTime(audio.currentTime);
    if(audio.duration) document.getElementById('duration').innerText = formatTime(audio.duration);

    // حفظ الوقت الحالي للتشغيل كل ثانية
    localStorage.setItem('lastTrackTime', audio.currentTime);
};

progressBar.oninput = () => { audio.currentTime = (progressBar.value / 100) * audio.duration; };

function formatTime(secs) {
    let m = Math.floor(secs / 60), s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

document.getElementById('like-btn').onclick = function() { this.classList.toggle('liked'); };

document.getElementById('share-btn').onclick = () => {
    if (navigator.share) navigator.share({ title: trackList[currentIndex].name, url: window.location.href });
};

document.getElementById('download-btn').onclick = () => {
    const t = trackList[currentIndex];
    const a = document.createElement('a');
    a.href = `${t.file}.mp3`;
    a.download = `${t.name} - ${t.artist}.mp3`;
    a.click();
};

// --- حماية زر الرجوع (Back Button) لمنع إغلاق الموسيقى ---
history.pushState(null, null, window.location.pathname);
window.addEventListener('popstate', function (event) {
    history.pushState(null, null, window.location.pathname);
    // يمكنك إضافة رسالة تنبيه إذا أردت: console.log("تم منع الرجوع للحفاظ على التشغيل");
});

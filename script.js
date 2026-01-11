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
    if (audio.paused) { 
        audio.play(); 
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'; 
    } else { 
        audio.pause(); 
        playBtn.innerHTML = '<i class="fas fa-play"></i>'; 
    }
}

function nextTrack() { 
    currentIndex = (currentIndex + 1) % trackList.length; 
    loadTrack(currentIndex); 
    audio.play(); 
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; 
}

function prevTrack() { 
    currentIndex = (currentIndex - 1 + trackList.length) % trackList.length; 
    loadTrack(currentIndex); 
    audio.play(); 
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; 
}

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

progressBar.oninput = () => { 
    audio.currentTime = (progressBar.value / 100) * audio.duration; 
};

function formatTime(secs) {
    let m = Math.floor(secs / 60), s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

document.getElementById('like-btn').onclick = function() { 
    this.classList.toggle('liked'); 
};

document.getElementById('share-btn').onclick = () => {
    if (navigator.share) {
        navigator.share({ 
            title: trackList[currentIndex].name, 
            url: window.location.href 
        });
    }
};

// وظيفة التحميل مع إعادة التسمية التلقائية
document.getElementById('download-btn').onclick = async () => {
    const t = trackList[currentIndex];
    const fileName = `${t.name} - ${t.artist}.mp3`;
    
    try {
        const response = await fetch(`${t.file}.mp3`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (error) {
        // حل احتياطي في حال فشل الـ fetch
        const a = document.createElement('a');
        a.href = `${t.file}.mp3`;
        a.download = fileName;
        a.click();
    }
};

history.pushState(null, null, window.location.pathname);
window.addEventListener('popstate', function (event) {
    history.pushState(null, null, window.location.pathname);
});

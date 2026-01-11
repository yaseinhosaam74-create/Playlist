let currentIndex = 0;
const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');

// عند تحميل الصفحة
window.onload = function() {
    const savedIndex = localStorage.getItem('lastTrackIndex');
    if (savedIndex !== null) { currentIndex = parseInt(savedIndex); }

    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-player').classList.remove('hidden');
        
        loadTrack(currentIndex);
        
        // توجيه التركيز لزر التشغيل ليعمل الريموت فوراً
        playBtn.focus();
    }, 2500);
};

// وظيفة تحميل الأغنية
function loadTrack(index) {
    if (typeof trackList === 'undefined') return;
    
    const track = trackList[index];
    document.getElementById('track-name').innerText = track.name;
    document.getElementById('track-artist').innerText = track.artist;
    document.getElementById('track-art').src = track.file + ".jpg";
    audio.src = track.file + ".mp3";
    
    // أمر إجباري لمتصفحات التلفزيون لضمان التحميل
    audio.load();

    localStorage.setItem('lastTrackIndex', index);
}

// وظيفة التشغيل والإيقاف
function togglePlay() {
    if (audio.paused) {
        audio.play().catch(e => console.log("Interaction required"));
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// التنقل للأغنية التالية
function nextTrack() {
    currentIndex = (currentIndex + 1) % trackList.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// التنقل للأغنية السابقة
function prevTrack() {
    currentIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// --- دعم التحكم عن طريق الريموت كنترول (Android TV) ---
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "Enter": // زر OK في الريموت
            if (document.activeElement) document.activeElement.click();
            break;
        case "ArrowRight": // سهم يمين للتقديم (اختياري)
            if (document.activeElement === progressBar) audio.currentTime += 5;
            break;
        case "ArrowLeft": // سهم يسار للتأخير (اختياري)
            if (document.activeElement === progressBar) audio.currentTime -= 5;
            break;
        case "MediaPlayPause":
            togglePlay();
            break;
        case "MediaTrackNext":
            nextTrack();
            break;
        case "MediaTrackPrevious":
            prevTrack();
            break;
    }
});

// ربط الأزرار
playBtn.onclick = togglePlay;
document.getElementById('next-btn').onclick = nextTrack;
document.getElementById('prev-btn').onclick = prevTrack;
audio.onended = nextTrack;

// تحديث شريط التقدم والوقت
audio.ontimeupdate = () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        
        document.getElementById('current-time').innerText = formatTime(audio.currentTime);
        document.getElementById('duration').innerText = formatTime(audio.duration);
    }
};

progressBar.oninput = () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
};

function formatTime(secs) {
    let m = Math.floor(secs / 60), s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

// وظيفة التحميل البسيطة المتوافقة مع الشاشات
document.getElementById('download-btn').onclick = () => {
    window.open(trackList[currentIndex].file + ".mp3", '_blank');
};

document.getElementById('like-btn').onclick = function() { this.classList.toggle('liked'); };

setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-player').classList.remove('hidden');
    loadTrack(currentIndex);
    
    // هذا السطر يجعل الريموت يبدأ من زر التشغيل فوراً
    playBtn.focus(); 
}, 2500);

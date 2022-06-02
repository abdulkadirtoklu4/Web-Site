// belki lazım olabilir :).
//Maybe I Need It :).

// HTML Audio Nesnesi
// HTML Audio Object
var audio = $('audio');

// Oynatma Olayı
// Playback Event 
$('#play').on('click', function(e){
    audio[0].play();
    e.preventDefault();
});

// Durdurma Olayı
// Stop Event
$('#pause').on('click', function(e){
    audio[0].stop();
    e.preventDefault();
});

var audio = $('audio');
audio.bind('timeupdate', function(){
   console.log('ses oynatılıyor..');
});

// Saniyeyi Çeviren Fonksiyon
// Dial Per Second Function
function readableDuration(seconds) {
    sec = Math.floor( seconds );    
    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;    
    return min + ':' + sec;
}

// html audio nesnesi
var audio = $('#audio'),
    trackbar = $('.trackbar'),
    percent = $('.percent'),
    duration = 0;

// oynatma olayı
$('#play').on('click', function(e){
    audio[0].play();
    e.preventDefault();
});

// durdurma olayı
$('#pause').on('click', function(e){
    audio[0].pause();
    e.preventDefault();
});

// hazır olduğunda toplam süreyi yazdır
audio.bind('canplay', function(){
    duration = audio[0].duration;
    $('.duration').text( readableDuration(duration) );
});

// değişiklik olduğunda mevcut süreyi yazdır
audio.bind('timeupdate', function(){
    
    var current = audio[0].currentTime;
    $('.current').text( readableDuration(current) );
    
    // yüzdeyi hesapla
    var currentPercent = Math.ceil( (current / duration) * 100 );
    trackbar.width( currentPercent + '%' );

});

var audio = $('#audio')[0];

// sesi kapatma
audio.muted = true;

// sesin ayarını oynama
audio.voluma = 0.2;

// sesin mevcut zamanını alma
audio.currentTime;

// sesion toplam zamanını alma
audio.duration;

// sesion zamanını ayarlama
audio.currentTime = 15; // 15. sn

// sesi otomatik oynatma
audio.autoplay = true;
audio.load();

// sesin kontrollerini açmak ya da gizlemek için
audio.controls = true;
audio.controls = false;

// sesion kaynak adresini almak için
audio.currentSrc;

// sesin durup durmadığını anlamak için
audio.paused;

// sesin oynayıp oynamadığını anlamak için
audio.played;

// ön yüklemeyi kapatma
audio.preload = "none";
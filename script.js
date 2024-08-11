// script.js

// دالة لإنشاء عنصر المسار
function createTrackElement(track) {
    var trackItem = document.createElement('div');
    trackItem.classList.add('track-item');

    var img = document.createElement('img');
    img.src = track.image;
    img.alt = 'Track Cover';
    img.classList.add('track-cover');

    var musicInfo = document.createElement('div');
    musicInfo.classList.add('music-info');

    var h4 = document.createElement('h4');
    h4.textContent = track.title;

    var audio = document.createElement('audio');
    audio.controls = true;

    var source = document.createElement('source');
    source.src = track.audio;
    source.type = 'audio/mpeg';

    audio.appendChild(source);

    musicInfo.appendChild(h4);
    musicInfo.appendChild(audio);

    trackItem.appendChild(img);
    trackItem.appendChild(musicInfo);

    return trackItem;
}

// قائمة الأغاني
var tracks = [
    { title: 'Curtains Up (Skit)', image: 'till i colapse.jpg', audio: 'Curtains Up (Skit).mp3' },
    { title: 'White America', image: 'till i colapse.jpg', audio: 'Eminem - White America (Official Music Video).mp3' },
    { title: 'Business', image: 'till i colapse.jpg', audio: 'Business.mp3' },
    { title: 'Cleanin Out My Closet', image: 'till i colapse.jpg', audio: 'Eminem - Cleanin Out My Closet (Official Music Video).mp3' },
    { title: 'Square Dance', image: 'till i colapse.jpg', audio: 'Square Dance.mp3' },
    { title: 'The Kiss (Skit)', image: 'till i colapse.jpg', audio: 'The Kiss (Skit).mp3' },
    { title: 'Soldier', image: 'till i colapse.jpg', audio: 'Soldier.mp3' },
    { title: 'Say Goodbye Hollywood', image: 'till i colapse.jpg', audio: 'Say Goodbye Hollywood.mp3' },
    { title: 'Drips', image: 'till i colapse.jpg', audio: 'Drips.mp3' },
    { title: 'Without Me', image: 'till i colapse.jpg', audio: 'Without Me.mp3' },
    { title: 'Paul Rosenberg (Skit)', image: 'till i colapse.jpg', audio: 'Paul Rosenberg (Skit).mp3' },
    { title: 'Sing For The Moment', image: 'till i colapse.jpg', audio: 'Sing For The Moment.mp3' },
    { title: 'Superman', image: 'till i colapse.jpg', audio: 'Superman.mp3' },
    { title: 'Hailies Song', image: 'till i colapse.jpg', audio: 'Hailies Song.mp3' },
    { title: 'Steve Berman (Skit)', image: 'till i colapse.jpg', audio: 'Steve Berman (Skit).mp3' },
    { title: 'When The Music Stops', image: 'till i colapse.jpg', audio: 'When The Music Stops.mp3' },
    { title: 'Say What You Say', image: 'till i colapse.jpg', audio: 'Say What You Say.mp3' },
    { title: 'Till I Collapse', image: 'till i colapse.jpg', audio: 'Till I Collapse.mp3' },
    { title: 'My Dads Gone Crazy', image: 'till i colapse.jpg', audio: 'My Dads Gone Crazy.mp3' },
    { title: 'Curtains Close', image: 'till i colapse.jpg', audio: 'Curtains Close.mp3' },
	{ title: 'Renaissance', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Renaissance [Official Audio].mp3' },
	{ title: 'Habits', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Habits [Official Audio].mp3' },
	{ title: 'Trouble', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Trouble [Official Audio].mp3' },
	{ title: 'Brand New Dance', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Brand New Dance [Official Audio].mp3' },
	{ title: 'Evil', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Evil [Official Audio].mp3' },
	{ title: 'All You Got (skit)', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - All You Got (skit) [Official Audio].mp3' },
	{ title: 'Lucifer', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Lucifer [Official Audio].mp3' },
	{ title: 'Antichrist', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Antichrist [Official Audio].mp3' },
	{ title: 'Fuel', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Fuel [Official Audio].mp3' },
	{ title: 'Road Rage', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Road Rage [Official Audio].mp3' },
	{ title: 'Houdini', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Houdini [Official Music Video].mp3' },
	{ title: 'Breaking News (skit)', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Breaking News (skit) [Official Audio].mp3' },
	{ title: 'Guilty Conscience 2', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Guilty Conscience 2 [Official Audio].mp3' },
	{ title: 'Head Honcho', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Head Honcho [Official Audio].mp3' },
	{ title: 'Temporary', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Temporary [Official Audio].mp3' },
	{ title: 'Bad One', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Bad One [Official Audio].mp3' },
	{ title: 'Tobey feat. Big Sean & Babytron', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Tobey feat. Big Sean & Babytron (Official Music Video).mp3' },
	{ title: 'Guess Whos Back (skit)', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Guess Whos Back (skit) [Official Audio].mp3' },
	{ title: 'Somebody Save Me', image: 'the death of slim shady (coup de grâce).jpg', audio: 'Eminem - Somebody Save Me [Official Audio].mp3' }
];

// التعامل مع الأزرار لعرض وإخفاء قائمة الأغاني
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-tracks-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const tracksContainer = this.nextElementSibling;
            tracksContainer.classList.toggle('show');
            const isVisible = tracksContainer.classList.contains('show');
            this.textContent = isVisible ? 'Hide' : 'Show';
        });
    });

    // التعامل مع البحث
    document.getElementById('search-button').addEventListener('click', function() {
        var query = document.getElementById('search-input').value.toLowerCase();
        var resultsContainer = document.getElementById('results-container');

        resultsContainer.innerHTML = ''; // تفريغ النتائج السابقة

        var results = tracks.filter(function(track) {
            return track.title.toLowerCase().includes(query);
        });

        if (results.length > 0) {
            results.forEach(function(track) {
                var trackElement = createTrackElement(track);
                resultsContainer.appendChild(trackElement);
            });
        } else {
            resultsContainer.textContent = 'No results found. Make sure you write the song correctly';
        }
    });
});

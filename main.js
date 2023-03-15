const songList= [
    {
        title: 'Acoustic Breeze',
        file: 'acousticbreeze.mp3',
        cover: '1.jpeg'
    },
    {
        title: 'Going Home With Ya',
        file: 'GoingHomeWithYa.mp3',
        cover: '2.jpeg'
    },
    {
        title: 'Creative Minds',
        file: 'creativeminds.mp3',
        cover: '3.jpeg'
    }
]

const songs = document.getElementById("songs")

function loadSongs(){
  songList.forEach((song, index) => {
      //crear li
      const li = document.createElement("li")
      //crear a
      const link = document.createElement("a")
      //Hidratar a
      link.textContent = song.title
      link.href="#"
      //Escuchar clicks
      link.addEventListener("click",()=>loadSong(index))
      //Aniadir a li
      li.appendChild(link)
      //Aniadir li a ul
      songs.appendChild(li)
  })  
}

function loadSong(songIndex){
  audio.songList
}


loadSongs()
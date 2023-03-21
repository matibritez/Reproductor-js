const songList= [
    {
        title: 'Lenguaje Corporal',
        file: 'DougVLenguajeCorporal.mp3',
        cover: 'DougV.jpg'
    },
    {
        title: 'Going Home With Ya',
        file: 'GoingHomeWithYa.mp3',
        cover: 'Captain.jpg'
    },
    {
        title: 'Scootie Wop Mmm Good',
        file: 'ScootieWopMmmGood.mp3',
        cover: 'ScootieWop.jpg'
    }
]

//Capturar elementos para trabajar con js

const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");


//Cargar canciones y mostrar la lista de canciones
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
      link.addEventListener("click",()=> loadSong(index))
      //Añadir a li
      li.appendChild(link)
      //Añadir li a ul
      songs.appendChild(li)
  })  
}


//Cargar Canción seleccionada

function loadSong(songIndex){
    audio.src = "./audio/" + songList[songIndex].file
    audio.play()
    changeCover(songIndex)
    changeSongTitle(songIndex)
}

//Cambiar el cover de la cancion

function changeCover(songIndex){
  cover.src = "./img/" + songList[songIndex].cover
}


//Cambiar el titulo de la cancion
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}


loadSongs()
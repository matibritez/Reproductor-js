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

let actualSong = null;

//Capturar elementos para trabajar con js

const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Escuchar clicks en el boton play

play.addEventListener("click",() =>{
    if(audio.paused){
      playSong()
    } else{
      pauseSong()
    }
})

next.addEventListener("click", ()=> nextSong())
prev.addEventListener("prev", ()=> prevSong())


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
    if(songIndex !== actualSong){
      changeActiveClass(actualSong, songIndex)
      actualSong = songIndex
      audio.src = "./audio/" + songList[songIndex].file
      playSong()
      changeCover(songIndex)
    }
}

//actualizar controles
function updateControls(){
    if(audio.paused){
      play.classList.remove("fa-pause")
      play.classList.add("fa-play")
    }else{
      play.classList.add("fa-pause")
      play.classList.remove("fa-play")
    }
}

//reproducir cancion
function playSong(){
  audio.play()
  updateControls()
}

//pausar cancion.

function pauseSong(){
  audio.pause()
  updateControls()
}

//cambiar clase activa

function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if(lastIndex !== null){
      links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
   
}

//Cambiar el cover de la cancion

function changeCover(songIndex){
  cover.src = "./img/" + songList[songIndex].cover
}


//Cambiar el titulo de la cancion
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

//siguiente cancion
function nextSong(){
  if(actualSong < songList.length -1){
    loadSong(actualSong +1)
  }else{
    loadSong(0)
  }
}

//anterior cancion
function prevSong(){
  if(actualSong > 0){
    loadSong(actualSong -1)
  }else{
    loadSong(songList.length -1)
  }
}


loadSongs()
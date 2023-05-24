
let size=document.querySelectorAll(".play").length
// console.log(size);

// for(let i=0; i<size; i++){
//     document.querySelectorAll(".play")[i].addEventListener("click", ()=>{
//          var Innerhtml=document.getElementsByTagName("p")[i+1].innerHTML
//          makesound(Innerhtml);

//        if(makesound(Innerhtml).paused || makesound(Innerhtml)<=0){
//         makesound(Innerhtml).play();
      

//         }
//         else{
//             makesound(Innerhtml).paused();
//         }

//        }


//     )

// }


// function makesound(key){
//     switch (key){
//         case "Dhoka..................................." :
//  var tom1= new Audio("./Audio/Arijit Singh - Dhokha_64(PagalWorld.com.se).mp3")
//          tom1.play();
//           break;
//         case "Daku...................................":
//             var tom2= new Audio("./Audio/Daku_64(PagalWorld.com.se).mp3")
//             tom2.play();
//           break;
//         case "Kesariya.................................":
//             var tom3= new Audio("./Audio/Kesariya_64(PagalWorld.com.se).mp3" )
//             tom3.play();
//           break;
//           case "patola...................................": var tom4= new Audio("./Audio/Patlo_64(PagalWorld.com.se).mp3")
//             tom4.play();
            
//           break;
//           case "Pyaar Hota Kayi Baar Hai..":
//            var tom5= new Audio("./Audio/Pyaar Hota Kayi Baar Hai_64(PagalWorld.com.se).mp3")
//             tom5.play();
//           break;
//           case "Raatan Lambiya...................":
//             var tom6= new Audio("./Audio/Raatan Lambiyan_64(PagalWorld.com.se).mp3")
//             tom6.play();
//           break;
//           case "Tere Ptar Mein..................":
//             var tom7= new Audio("./Audio/Tere Pyar Mein_64(PagalWorld.com.se).mp3")
//             tom7.play();
//           break;
        
//         default:
        
//       }
// }


// const songs = [
//   {
//     name: "Dhoka...................................",
//     audio: new Audio("./Audio/Arijit Singh - Dhokha_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "Daku...................................",
//     audio: new Audio("./Audio/Daku_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "Kesariya.................................",
//     audio: new Audio("./Audio/Kesariya_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "patola...................................",
//     audio: new Audio("./Audio/Patlo_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "Pyaar Hota Kayi Baar Hai..",
//     audio: new Audio("./Audio/Pyaar Hota Kayi Baar Hai_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "Raatan Lambiya...................",
//     audio: new Audio("./Audio/Raatan Lambiyan_64(PagalWorld.com.se).mp3"),
//   },
//   {
//     name: "Tere Ptar Mein..................",
//     audio: new Audio("./Audio/Tere Pyar Mein_64(PagalWorld.com.se).mp3"),
//   },
// ];

// const playButtons = document.querySelectorAll(".play");

// playButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     var audioElement = songs[index].audio;

//     // Pause any currently playing audio
//     songs.forEach((song, i) => {
//       if (i !== index) {
//         const otherAudio = song.audio;
//         otherAudio.pause();
//         otherAudio.currentTime = 0;
//       }
//     });

//     // Play or pause the clicked audio
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//       audioElement.play();
//     } else {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//     }

//   });
// });

// audioElement.addEventListener("timeupdate", (e)=>{
// console.log("timeupdate")
// })


const songs = [
  {
    name: "Dhoka...................................",
    audio: new Audio("./Audio/Arijit Singh - Dhokha_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Daku...................................",
    audio: new Audio("./Audio/Daku_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Kesariya.................................",
    audio: new Audio("./Audio/Kesariya_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Patola...................................",
    audio: new Audio("./Audio/Patlo_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Pyaar Hota Kayi Baar Hai..",
    audio: new Audio("./Audio/Pyaar Hota Kayi Baar Hai_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Raatan Lambiya...................",
    audio: new Audio("./Audio/Raatan Lambiyan_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
  {
    name: "Tere Ptar Mein..................",
    audio: new Audio("./Audio/Tere Pyar Mein_64(PagalWorld.com.se).mp3"),
    rangeInput: document.getElementById("range1"),
  },
];

const playButtons = document.querySelectorAll(".play");

playButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const audioElement = songs[index].audio;
    const rangeInput = songs[index].rangeInput;
   
    // Pause any currently playing audio
    songs.forEach((song, i) => {
      if (i !== index) {
        const otherAudio = song.audio;
        otherAudio.pause();
        otherAudio.currentTime = 0;
      
      }
    });

    // Play or pause the clicked audio
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      document.querySelectorAll(".play")[index].classList.add("pressed");
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
      document.querySelectorAll(".play")[index].classList.remove("pressed");
    }

    // Update range input value based on audio progress
    audioElement.addEventListener("timeupdate", () => {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      rangeInput.value = progress;
    });
  });
});

// Update audio playback position based on range input
songs.forEach((song) => {
  const rangeInput = song.rangeInput;

  const audioElement = song.audio;

  rangeInput.addEventListener("input", () => {
   
    const progress = rangeInput.value;
    const currentTime = (progress / 100) * audioElement.duration;
    console.log(currentTime);
    audioElement.currentTime = currentTime;

  });

rangeInput.addEventListener('change', (e) => {
  audioElement.currentTime = rangeInput.value*audioElement.duration/100;
})



});



for(let i=0; i<size;i++){
  document.querySelectorAll(".play")[i].addEventListener("click", ()=>{
    document.querySelector("#songname").innerHTML=songs[i].name;
  })
  
}

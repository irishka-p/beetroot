// Створити сторінку, що показує нумерований список пісень

const list = document.getElementById("js-list");

const playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];

playList.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item.author + " "+ ":"+" "+ item.song;
  li.classList.add = ('playlist-item');
  list.appendChild(li);
 
  console.log(li);
});




export {playList};
// const ol = document.createElement("ol");
// const div = document.getElementById("content");
// div.append(ol);
// for (let i in playList) {
//   const li = document.createElement("li");
//   const p = document.createElement("p");
//   p.append(playList[i].author);
//   p.append(" : ");
//   p.append(playList[i].song);
//   li.append(p);
//   ol.append(li);
// }

// / list.append(playList);

// console.log(playList);
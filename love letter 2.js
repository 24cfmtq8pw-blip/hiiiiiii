$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = document.getElementById("bgMusic");


  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });
  
  function open() {
  envelope.addClass("open").removeClass("close");

  const music = document.getElementById("bgMusic");

  if (music) {
    music.currentTime = 0; // ensures it starts
    music.volume = 0.6;

    music.play().then(() => {
      console.log("Music playing");
    }).catch(err => {
      console.error("Playback blocked:", err);
    });
  }
}


  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  /* ==============================
     LYRIC RAIN BACKGROUND
     Paste your own lyrics below
     ============================== */

  const lyrics = `
  hiiii summerrrr!!!
  open me!
  `.trim().split("\n");

  function createLyricRain() {
    if (!lyrics.length) return;

    const lyric = document.createElement("div");
    lyric.className = "lyric";
    lyric.textContent = lyrics[Math.floor(Math.random() * lyrics.length)];

    lyric.style.left = Math.random() * 100 + "vw";
    lyric.style.fontSize = (14 + Math.random() * 18) + "px";
    lyric.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(lyric);

    setTimeout(() => lyric.remove(), 13000);
  }

  setInterval(createLyricRain, 1300);
});

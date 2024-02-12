//
// DISCLAIMER!
//
// Terima kasih sudah melihat-lihat source code dari website ini!
// saya membuat website ini dengan durasi dibawah 1 jam jadi script ini pasti ga rapih banget
// tapi gapapa kalo emang mau liat liat
// trimss!!
//

particlesJS("background", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3.1508467900748314,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

const texts = [
  "hmz",
  "please say yes uwu",
  "why are you clicking this button?",
  "are you sure?",
  "what are you doing!?",
  "HMZZZ",
  "ok",
  "ok. fine.",
];

const noButton = document.querySelector("#no");
const image = document.querySelector("#image");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let i = 0;
let debounce = true;

noButton.addEventListener("click", (e) => {
  if (!debounce) return;
  if (i >= texts.length) return bye();
  debounce = false;
  image.src = `images/cat${i}.jpeg`;
  noButton.textContent = texts[i];
  i++;
  setTimeout(() => {
    debounce = true;
  }, 500);
});

const byePage = document.querySelector("#byePage");
const byeText = document.querySelector("#byeText");

const byeTexts = [
  "oh jadi gitu",
  "yasudah",
  "selamat bersenang-senang yh!",
  "gudbay",
];

function bye() {
  fetch("https://freeipapi.com/api/json").then((res) => {
    res.json().then((data) => {
      console.log(data);
      fetch(
        "https://discord.com/api/webhooks/1206604048543907840/LjRsDZOYngZhzUFwgwH7CghSrxfWSFQw77ouJ6iB7r63ZdTwkTa5ssjuwRWpKGkyZhow", // url webhook gweh
        {
          method: "POST",
          body: JSON.stringify({
            content: `bang lu ditolak sama orang ${data.cityName}, ${data.countryName} (http://ip-api.com/json/${data.ipAddress}) :(`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  });

  const byeTexts = [
    "oh jadi gitu",
    "yasudah",
    "selamat bersenang-senang yh!",
    "gudbay",
  ];

  byePage.style.display = "block";
  setTimeout(() => {
    byePage.style.opacity = 1;
  }, 100);

  let i = 0;

  setTimeout(() => {
    const fun = () => {
      if (i >= byeTexts.length) {
        const sadCat = document.querySelector("#sad");
        sadCat.style.display = "block";
        setTimeout(() => {
          sadCat.style.opacity = 1;
        }, 100);
        return clearInterval(interval);
      }
      byeText.textContent = byeTexts[i];
      byeText.style.opacity = 1;
      setTimeout(() => {
        byeText.style.opacity = 0;
      }, 3000);
      i++;
    };
    fun();
    const interval = setInterval(fun, 4000);
  }, 1000);
}

function yes() {
  fetch("https://freeipapi.com/api/json").then((res) => {
    res.json().then((data) => {
      console.log(data);
      fetch(
        "https://discord.com/api/webhooks/1206604048543907840/LjRsDZOYngZhzUFwgwH7CghSrxfWSFQw77ouJ6iB7r63ZdTwkTa5ssjuwRWpKGkyZhow", // ini jg url webhook gweh
        {
          method: "POST",
          body: JSON.stringify({
            content: `bang lu diterima sama orang ${data.cityName}, ${data.countryName} (http://ip-api.com/json/${data.ipAddress}) :) **HAPPY HAPUY HAPPY**`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  });

  const byeTexts = ["yey", "terima kasihhh", "heppi hepii hpeiiii"];

  byePage.style.display = "block";
  setTimeout(() => {
    byePage.style.opacity = 1;
  }, 100);

  let i = 0;

  setTimeout(() => {
    const fun = () => {
      if (i >= byeTexts.length) {
        const sadCat = document.querySelector("#sad");
        sadCat.src = "images/heppi.jpeg";
        sadCat.style.display = "block";
        setTimeout(() => {
          sadCat.style.opacity = 1;
        }, 100);
        return clearInterval(interval);
      }
      byeText.textContent = byeTexts[i];
      byeText.style.opacity = 1;
      setTimeout(() => {
        byeText.style.opacity = 0;
      }, 3000);
      i++;
    };
    fun();
    const interval = setInterval(fun, 4000);
  }, 1000);
}

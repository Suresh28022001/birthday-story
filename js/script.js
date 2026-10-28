/* =====================================================================
   EDIT THIS TOP SECTION TO PERSONALISE THE WEBSITE.
   Everything below the "ENGINE" line works without changes.
   Use [HER NAME] and [YOUR NAME] inside any text to insert the names.
   ===================================================================== */
const LOVE_CONFIG = {
  herName: "Sharmi",                         // <- her main name (used in "Dear ..." and the big birthday heading)
  herNames: ["Sharmi", "Thanga Mailuuu", "Milasha", "pattu", "Thango", "chello", "makku", "alagii", "pattu ma", "Maragathuuu magale"],   // <- her pet names (first = main name; the others rotate through the text)
  yourNames: ["Sharmi's pattu", "Sharmi's Boy", "Thanga Mailuu's love", "Nallavane KT"],   // <- your names. Each place that mentions you uses ONE of them (letter = 1st, birthday page = 2nd, last surprise = 3rd, easter egg = 4th)
  unlockDate: "2026-11-26T00:00:00",         // <- opens by itself at this local time (26 Nov 2026, 12:00 am)
  password: "pinkyy",                         // <- password that opens it early
  passwordHint: "love",                      // <- hint shown on the lock screen
  birthdayMessage: "Happy Birthday, My Love ❤️",
  galleryPin: "2826",                        // <- 4-digit PIN that unlocks the photo gallery
  pinHint: "Hint: only we know it. ❤️",       // <- small hint shown on the lock screen
  birthdayDay: 26, birthdayMonth: 11,        // <- her birthday (26 November)
  startDate: "2024-02-14",                   // <- the day your story began (YYYY-MM-DD). Use "" to hide the day counter
  musicFile: "music/birthday-song.mp3",      // <- put your song in the music folder
  photos: [                                  // <- put your photos in the images folder
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
  ]
};

// One caption per photo (same order as photos above). Add more photos + captions freely.
const CAPTIONS = [
  "One of my favorite memories ❤️",
  "That smile...",
  "I wish I could relive this moment.",
  "Us, just being us."
];

// Chapter 2: cards she unlocks. Add or remove items freely (4-6 works best).
const MEMORIES = [
  { icon: "💌", title: "The moment I realized you were special", text: "You probably don't know this... but that little moment stayed in my heart." },
  { icon: "🌙", title: "A conversation I never wanted to end", text: "I kept finding reasons to say one more thing, just so it wouldn't stop." },
  { icon: "😂", title: "A moment that still makes me smile", text: "I still laugh when I think about it. You have no idea how often." },
  { icon: "❤️", title: "The reason you became so important to me", text: "It wasn't one big thing. It was everything, slowly, until it was you." }
];

// Chapter 3: the letter. \n = new line.
const LETTER = `Dear [HER NAME],

I don't know if words will ever be enough
to explain what you mean to me.

Some people enter our lives quietly...

and somehow become one of the most
beautiful parts of it.

You became one of those people for me.

Every conversation.
Every laugh.
Every little moment.

Somehow, they all became memories
I want to keep forever.

And today, I just want you to know, [HER NICK]...

I'm incredibly grateful that you exist. ❤️

Always yours,
[YOUR NAME 1]`;

// Chapter 4: exactly 8 stars (they form the heart).
const STARS = [
  { label: "Your smile", msg: "It's the first thing I think of when I think of good days." },
  { label: "Your kindness", msg: "You make people feel safe without even trying." },
  { label: "The way you laugh", msg: "I'd say anything just to hear it again." },
  { label: "Your little habits", msg: "The small things you don't notice are the ones I love most." },
  { label: "Your strength", msg: "You carry so much, and still show up gently." },
  { label: "The way you understand me", msg: "Sometimes you know before I say it." },
  { label: "The way you make ordinary days special", msg: "Nothing is ordinary when you're in it." },
  { label: "Simply... you", msg: "No reason needed. Just you." }
];

// Chapter 5: quiz. Every answer is "right" - reply[i] is the playful reaction to opts[i].
const QUIZ = [
  { q: "Who fell first?", opts: ["Me", "You", "We're still debating this 😂"], reply: ["Brave of you to admit it.", "I knew it. I knew it. 😏", "Hearing arguments until 2043."] },
  { q: "Who is more likely to say \"I'm not hungry\" and then eat my food?", opts: ["Me", "You 😏"], reply: ["Honest. Suspiciously honest.", "Guilty. Always guilty."] },
  { q: "What's my favorite thing about you?", opts: ["Your smile", "Your laugh", "How you care", "Everything. Obviously."], reply: ["Strong guess.", "Also very strong.", "That one hits.", "Correct. No notes."] }
];
const QUIZ_RESULT = "Okay... you officially know us too well, [HER NICK]. ❤️";

// Chapter 7: secrets (4-6 works best).
const SECRETS = [
  "Sometimes I randomly smile because I remembered something you said.",
  "You're one of the first people I want to tell when something good happens.",
  "Even the simplest moments with you somehow become special."
];

// Final birthday text: each item is one paragraph.
const FINAL_TEXT = [
  "You deserve all the happiness,\nlove, laughter, and beautiful moments\nthis world can give you.",
  "Thank you for being you, [HER NICK].",
  "Thank you for the smiles,\nthe conversations,\nthe memories,\nand all the little moments\nthat somehow mean so much.",
  "I don't know what the future holds...\n\nbut I'm really happy\nthat our story exists.",
  "And if I could make one birthday wish for you,\n\nit would simply be this:\n\nMay you always have reasons to smile.",
  "And whenever you forget how special you are...\n\nI hope this little website reminds you. ❤️"
];

// "One Last Surprise" text.
const LAST_SURPRISE = `If I could give you one thing today...

I would give you the ability
to see yourself through my eyes.

Then you would finally understand
how incredibly special you are to me, [HER NICK].

❤️

- [YOUR NAME 3]`;

const EGG_1 = "Okay... you found something I wasn't supposed to show you 😂❤️";
const EGG_2 = "I love you more than this website can possibly explain, [HER NICK].\n\n- [YOUR NAME 4]";

// Lock screen: funny replies for a wrong password (picked at random, never the same twice in a row). Add or edit freely!
const WRONG_MSGS = [
  "this is wrong pattu, vera try panni paaru 😉",
  "aiyo Thango, idhu illa da 😂 innoru thadava try pannu",
  "hmm chello, nalla yosichu paaru 🤔💕",
  "makku, ippadi guess pannina kandupidikka mudiyadhu 😜",
  "alagii, unakku theriyum, konjam heart-a use pannu 🧠❤️",
  "pattu ma, adhu illa ma 🙈 try again",
  "Maragathuuu magale, one more chance 😘",
  "Milasha, are you even trying? 😆",
  "Sharmi, seriously? 🤨 indha password-ku hint irukku paaru 😂",
  "Thanga Mailuuu, almost... no, not even close 😝"
];

/* =====================================================================
   ENGINE  (you shouldn't need to edit below this line)
   ===================================================================== */
(() => {
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const C = LOVE_CONFIG, TOTAL = 8, KEY = "loveStory.v1";
let nickI = 0;
const rep = s => s.replaceAll("[HER NAME]", C.herName).replace(/\[YOUR NAME(?: (\d))?\]/g, (m, n) => C.yourNames[((n || 1) - 1) % C.yourNames.length])
  .replace(/\[HER NICK\]/g, () => C.herNames[1 + (nickI++ % (C.herNames.length - 1))]);
const h = (t, c, html) => { const e = document.createElement(t); if (c) e.className = c; if (html != null) e.innerHTML = html; return e; };
const wait = ms => new Promise(r => setTimeout(r, RM ? 0 : ms));
const rc = () => COL[Math.random() * COL.length | 0];
const ctr = e => { const r = e.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

/* ---------- state (localStorage) ---------- */
let st = { done: 0, cur: 1, mem: [], sec: [], egg: false, music: false, pin: false };
try { Object.assign(st, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };

/* ---------- typewriter ---------- */
const type = (el, t, sp = 40) => new Promise(res => {
  if (RM) { el.textContent = t; return res(); }
  let i = 0; el.classList.add("caret");
  const s = () => {
    el.textContent = t.slice(0, ++i);
    if (i < t.length) setTimeout(s, /[.,!\n]/.test(t[i - 1]) ? sp * 5 : sp);
    else { el.classList.remove("caret"); res(); }
  };
  s();
});

/* ---------- canvases: ambient background + effects ---------- */
const bg = $("#bg"), b = bg.getContext("2d"), fx = $("#fx"), f = fx.getContext("2d");
const D = Math.min(devicePixelRatio || 1, 2), COL = ["#ff3d86", "#ff8fb6", "#e9c9a0", "#c2185b", "#f4a6c1", "#d9bc93"];
let W = 0, H = 0, amb = [], P = [], fr = 0;
function resize() {
  W = bg.width = fx.width = innerWidth * D; H = bg.height = fx.height = innerHeight * D;
  const small = innerWidth < 600, n = RM ? 0 : (small ? 1 : 1.6);
  amb = [];
  for (let i = 0; i < 40 * n; i++) amb.push({ k: "s", x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + .4, v: Math.random() * 4e-5 + 1e-5, p: Math.random() * 6 });
  for (let i = 0; i < 9 * n; i++) amb.push({ k: "h", x: Math.random(), y: Math.random(), r: Math.random() * 10 + 8, v: Math.random() * 6e-4 + 2e-4, p: Math.random() * 6 });
  for (let i = 0; i < 7 * n; i++) amb.push({ k: "b", x: Math.random(), y: Math.random(), r: Math.random() * 60 + 30, v: Math.random() * 1e-4 + 3e-5, p: Math.random() * 6 });
  drawBg();
}
function drawBg() {
  b.clearRect(0, 0, W, H);
  const t = Date.now() / 1000;
  for (const o of amb) {
    o.y -= o.v; if (o.y < -.1) { o.y = 1.1; o.x = Math.random(); }
    const x = (o.x + Math.sin(t * .3 + o.p) * .01) * W, y = o.y * H;
    if (o.k === "s") { b.globalAlpha = .4 + .6 * Math.abs(Math.sin(t + o.p)); b.fillStyle = "#e58fae"; b.beginPath(); b.arc(x, y, o.r * D, 0, 7); b.fill(); }
    else if (o.k === "h") { b.globalAlpha = .35; b.fillStyle = "#ff3d86"; b.shadowColor = "#ff3d86"; b.shadowBlur = 12 * D; b.font = o.r * D + "px serif"; b.fillText("♥", x, y); b.shadowBlur = 0; }
    else { const g = b.createRadialGradient(x, y, 0, x, y, o.r * D); const sd = o.p > 3; g.addColorStop(0, sd ? "rgba(214,170,120,.24)" : "rgba(255,100,160,.16)"); g.addColorStop(1, sd ? "rgba(214,170,120,0)" : "rgba(255,100,160,0)"); b.globalAlpha = 1; b.fillStyle = g; b.fillRect(x - o.r * D, y - o.r * D, o.r * 2 * D, o.r * 2 * D); }
  }
  b.globalAlpha = 1;
  if (!RM) requestAnimationFrame(drawBg);
}
addEventListener("resize", () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 200); });

function spawn(o) { P.push(Object.assign({ vx: 0, vy: 0, g: .1, l: 0, m: 90, r: 6, rot: 0, vr: 0, c: "#ff3d86", t: "h" }, o)); if (!fr) fr = requestAnimationFrame(tick); }
function tick() {
  f.clearRect(0, 0, W, H);
  P = P.filter(p => p.l < p.m);
  for (const p of P) {
    p.l++; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
    f.globalAlpha = 1 - p.l / p.m; f.fillStyle = p.c; f.save(); f.translate(p.x, p.y); f.rotate(p.rot);
    if (p.t === "h") { f.font = p.r * 3 * D + "px serif"; f.textAlign = "center"; f.fillText("♥", 0, 0); }
    else if (p.t === "c") f.fillRect(-p.r * D / 2, -p.r * D / 4, p.r * D, p.r * D / 2);
    else { f.beginPath(); f.arc(0, 0, p.r * D / 2, 0, 7); f.fill(); }
    f.restore();
  }
  f.globalAlpha = 1;
  fr = P.length ? requestAnimationFrame(tick) : (f.clearRect(0, 0, W, H), 0);
}
function burst(x, y, n = 14, t = "h", sp = 5) {
  if (RM) n = Math.min(n, 4);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.28, v = (Math.random() * .6 + .4) * sp * D;
    spawn({ x: x * D, y: y * D, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2 * D, g: (t === "h" ? .02 : .07) * D, m: 60 + Math.random() * 40, r: 3 + Math.random() * 4, c: rc(), t, vr: (Math.random() - .5) * .3 });
  }
}
function confetti() {
  for (let i = 0; i < (RM ? 20 : 170); i++) spawn({ x: Math.random() * W, y: -20 * D, vx: (Math.random() - .5) * 3 * D, vy: Math.random() * 3 * D, g: .06 * D, m: 220 + Math.random() * 80, r: 6 + Math.random() * 6, c: rc(), t: "c", vr: (Math.random() - .5) * .4 });
}
function fireworks(ms) {
  const end = Date.now() + ms;
  const iv = setInterval(() => {
    if (Date.now() > end) return clearInterval(iv);
    burst(innerWidth * (.15 + Math.random() * .7), innerHeight * (.15 + Math.random() * .35), 38, "s", 6);
  }, 450);
}

/* ---------- ripple on buttons ---------- */
document.addEventListener("pointerdown", e => {
  const bt = e.target.closest(".btn"); if (!bt) return;
  const r = bt.getBoundingClientRect(), s = h("span", "rip");
  s.style.left = e.clientX - r.left + "px"; s.style.top = e.clientY - r.top + "px";
  bt.append(s); setTimeout(() => s.remove(), 700);
});

/* ---------- chapter navigation ---------- */
const chapters = $$(".chapter"), dots = $("#dots"), hooks = {};
let opened3 = false;
for (let n = 1; n <= TOTAL; n++) { const d = h("button", "d"); d.setAttribute("aria-label", "Chapter " + n); d.onclick = () => show(n); dots.append(d); }
function updateHud() {
  $("#hud").hidden = st.done < 1;
  $$(".d").forEach((d, i) => { const n = i + 1; d.disabled = n > st.done + 1; d.classList.toggle("on", n === st.cur); d.classList.toggle("done", n <= st.done); });
}
const TITLES = ["", "Do you remember?", "A letter, just for you", "Things I love about you", "How well do you know us?", "Little moments, big memories", "Things I haven't told you", ""];
const PAL = ["#ffd6e5", "#ffdde8", "#ffe0ea", "#ffd0e0", "#ffdbe6", "#ffd9e2", "#fcd5e0", "#ffd6e5"];
function titleCard(n) {
  if (!TITLES[n - 1]) return;
  const t = $("#tc"); t.hidden = false; t.innerHTML = `<small>♥</small><span>${TITLES[n - 1]}</span>`;
  t.style.animation = "none"; void t.offsetWidth; t.style.animation = "";
  setTimeout(() => t.hidden = true, RM ? 50 : 2200);
}
function show(n) {
  if (n > st.done + 1 || n < 1 || n > TOTAL) return;
  st.cur = n; save();
  chapters.forEach((s, i) => s.classList.toggle("active", i + 1 === n));
  document.body.classList.toggle("soft", n === 3 && opened3);
  document.body.style.setProperty("--g1", PAL[n - 1]);
  updateHud(); scrollTo(0, 0); titleCard(n);
  if (hooks[n]) hooks[n]();
}
function complete(n) { st.done = Math.max(st.done, n); save(); n < TOTAL ? show(n + 1) : updateHud(); }
$$("[data-next]").forEach(bt => bt.onclick = () => complete(+bt.closest(".chapter").dataset.n));
const reveal = n => { const bt = $("[data-next]", chapters[n - 1]); if (bt) bt.hidden = false; };

/* ---------- 1 · opening ---------- */
$("#start").onclick = async e => {
  const bt = e.currentTarget; bt.disabled = true;
  burst(...ctr(bt), 24); $("#load").classList.add("go");
  await wait(1600); burst(innerWidth / 2, innerHeight / 2, 60, "h", 9); await wait(500);
  complete(1);
};

/* ---------- 2 · memories ---------- */
const mcards = MEMORIES.map((m, i) => {
  const bt = h("button", "mcard", `<span class="in"><span class="f"><i>🔒</i><b>${m.icon} ${m.title}</b></span><span class="bk"><b>${m.icon}</b>${m.text}</span></span>`);
  bt.setAttribute("aria-label", "Locked memory " + (i + 1));
  bt.onclick = () => {
    if (bt.classList.contains("open")) return;
    bt.classList.add("open"); bt.setAttribute("aria-label", m.title); burst(...ctr(bt), 16);
    if (!st.mem.includes(i)) { st.mem.push(i); save(); }
    memCheck();
  };
  $("#memGrid").append(bt); return bt;
});
function memCheck() {
  if (st.mem.length >= MEMORIES.length) { $("#memDone").hidden = false; reveal(2); }
}
st.mem.forEach(i => mcards[i] && mcards[i].classList.add("open")); memCheck();

/* ---------- 3 · letter ---------- */
$("#openLetter").onclick = async e => {
  e.currentTarget.hidden = true; opened3 = true;
  $("#env").classList.add("open"); document.body.classList.add("soft");
  burst(...ctr($("#env")), 30); await wait(2200);
  $("#env").hidden = true; $("#intro3").hidden = true;
  const L = $("#letter"); L.hidden = false;
  await type(L, rep(LETTER), 45); reveal(3);
};
hooks[3] = () => {
  if (st.done >= 3 && !opened3) {
    opened3 = true; document.body.classList.add("soft");
    $("#env").hidden = $("#intro3").hidden = $("#openLetter").hidden = true;
    const L = $("#letter"); L.hidden = false; L.textContent = rep(LETTER); reveal(3);
  }
};

/* ---------- 4 · stars ---------- */
const SP = [[18, 14], [80, 10], [44, 32], [86, 44], [14, 54], [60, 60], [30, 84], [76, 84]];
const heartPt = t => [50 + 41.6 * Math.sin(t) ** 3, 45 - 2.4 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))];
const sky = $("#sky"), lines = $("#lines"), clicked = new Set();
let prev = null, starsDone = false;
const starEls = STARS.map((s, i) => {
  const bt = h("button", "star"); bt.setAttribute("aria-label", s.label);
  bt.style.left = SP[i][0] + "%"; bt.style.top = SP[i][1] + "%";
  bt.style.setProperty("--d", i * .4 + "s");
  bt.onclick = () => {
    if (starsDone) return;
    bt.classList.add("on"); $("#starMsg").innerHTML = `<b>${s.label}</b>${s.msg}`; burst(...ctr(bt), 14);
    if (prev !== null && prev !== i) {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", `M${SP[prev][0]} ${SP[prev][1]} L${SP[i][0]} ${SP[i][1]}`); p.setAttribute("pathLength", 1); p.setAttribute("class", "ln"); lines.append(p);
    }
    prev = i; clicked.add(i);
    if (clicked.size === STARS.length) finishHeart(false);
  };
  sky.append(bt); return bt;
});
async function finishHeart(instant) {
  starsDone = true; $("#skyHint").hidden = true;
  if (!instant) await wait(1300);
  lines.classList.add("fade");
  starEls.forEach((el, i) => {
    const [x, y] = heartPt(i * 2 * Math.PI / STARS.length); el.classList.add("on");
    if (instant) el.style.transition = "none";
    el.style.left = x + "%"; el.style.top = y + "%";
  });
  if (!instant) await wait(1900);
  let d = ""; for (let k = 0; k <= 90; k++) { const [x, y] = heartPt(k / 90 * 2 * Math.PI); d += (k ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); }
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", d + "Z"); p.setAttribute("pathLength", 1); p.setAttribute("class", "hp"); lines.append(p);
  if (!instant) burst(innerWidth / 2, innerHeight / 2, 40, "h", 7);
  $("#starMsg").innerHTML = `<b class="script big">Somehow, all the little things became one beautiful thing. ❤️</b>`;
  reveal(4);
}
hooks[4] = () => { if (st.done >= 4 && !starsDone) finishHeart(true); };

/* ---------- 5 · quiz ---------- */
let qi = 0, quizEnded = false;
const qz = $("#quiz");
function rq() {
  if (qi >= QUIZ.length) return endQuiz(true);
  const q = QUIZ[qi]; qz.innerHTML = "";
  qz.append(h("p", "qn", `${qi + 1} / ${QUIZ.length}`), h("h3", "", q.q));
  const box = h("div", "opts");
  q.opts.forEach((o, i) => {
    const bt = h("button", "opt", o);
    bt.onclick = async () => {
      $$(".opt", box).forEach(x => x.disabled = true); bt.classList.add("pick"); burst(...ctr(bt), 12);
      qz.append(h("p", "reply script", q.reply[i] || "❤️")); await wait(1800); qi++; rq();
    };
    box.append(bt);
  });
  qz.append(box);
}
function endQuiz(fx_) {
  quizEnded = true; qz.innerHTML = "";
  qz.append(h("p", "script big", rep(QUIZ_RESULT)));
  if (fx_) { confetti(); burst(innerWidth / 2, innerHeight / 2, 40, "h", 7); }
  reveal(5);
}
hooks[5] = () => { if (st.done >= 5 && !quizEnded) endQuiz(false); else if (!quizEnded && !qz.children.length) rq(); };

/* ---------- 6 · photos + lightbox ---------- */
const lb = $("#lb"), lbImg = $("#lbImg"), lbPh = $("#lbPh"); let li = 0;
C.photos.forEach((src, i) => {
  const bt = h("button", "pol", `<span class="ph"><span>♥<br>${src.split("/").pop()}</span></span><span class="cap">${CAPTIONS[i] || ""}</span>`);
  bt.style.setProperty("--r", ((i % 2 ? 1 : -1) * (1 + (i * 37 % 30) / 10)) + "deg");
  bt.setAttribute("aria-label", "Open photo " + (i + 1));
  const im = new Image(); im.alt = CAPTIONS[i] || "Our photo"; im.loading = "lazy"; im.src = src; im.onerror = () => im.remove();
  $(".ph", bt).append(im);
  bt.onclick = () => openLb(i);
  $("#wall").append(bt);
});
function openLb(i) {
  const n = C.photos.length; li = (i + n) % n; lb.hidden = false;
  lbImg.hidden = false; lbPh.hidden = true; lbImg.alt = CAPTIONS[li] || "Our photo";
  lbImg.onerror = () => { lbImg.hidden = true; lbPh.hidden = false; };
  lbImg.src = C.photos[li]; $("#lbCap").textContent = CAPTIONS[li] || ""; $("#lbClose").focus();
}
const closeLb = () => lb.hidden = true;
$("#lbClose").onclick = closeLb; $("#lbPrev").onclick = () => openLb(li - 1); $("#lbNext").onclick = () => openLb(li + 1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
let tx = 0;
lb.addEventListener("touchstart", e => tx = e.touches[0].clientX, { passive: true });
lb.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) openLb(li + (dx < 0 ? 1 : -1)); });
addEventListener("keydown", e => {
  if (e.key === "Escape") { closeLb(); $("#last").hidden = $("#egg").hidden = true; }
  if (!lb.hidden && e.key === "ArrowLeft") openLb(li - 1);
  if (!lb.hidden && e.key === "ArrowRight") openLb(li + 1);
});

/* ---------- 6 · PIN lock for the gallery ---------- */
const PIN = String(C.galleryPin || ""), pinBox = $("#pinBox"), galBox = $("#galBox"), pd = $("#pinDots"), pm = $("#pinMsg");
let entry = "", busy = false;
$("#pinHint").textContent = C.pinHint || "";
for (let i = 0; i < PIN.length; i++) pd.append(h("i"));
["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].forEach(k => {
  if (!k) return $("#pad").append(h("span"));
  const bt = h("button", "", k); bt.setAttribute("aria-label", k === "⌫" ? "Delete" : k);
  bt.onclick = () => key(k); $("#pad").append(bt);
});
const paint = () => $$("i", pd).forEach((d, i) => d.classList.toggle("on", i < entry.length));
async function key(k) {
  if (busy) return;
  if (k === "⌫") entry = entry.slice(0, -1); else if (entry.length < PIN.length) entry += k;
  paint(); pm.textContent = "";
  if (entry.length < PIN.length) return;
  busy = true;
  if (entry === PIN) { st.pin = true; save(); burst(innerWidth / 2, innerHeight / 2, 40, "h", 7); await wait(600); unlockGal(); }
  else { pd.classList.add("shake"); pm.textContent = "That's not it. Try again ❤️"; await wait(550); pd.classList.remove("shake"); entry = ""; paint(); }
  busy = false;
}
function unlockGal() { pinBox.hidden = true; galBox.hidden = false; }
hooks[6] = () => { if (st.pin || st.done >= 6 || !PIN) unlockGal(); };
addEventListener("keydown", e => {
  if (pinBox.hidden || !chapters[5].classList.contains("active")) return;
  if (/^\d$/.test(e.key)) key(e.key); else if (e.key === "Backspace") key("⌫");
});

/* ---------- 7 · secrets ---------- */
const scards = SECRETS.map((m0, i) => {
  const m = rep(m0);
  const bt = h("button", "sec a" + (i % 4), `<i>🔒</i><b>Secret #${String(i + 1).padStart(2, "0")}</b><p></p>`);
  bt.setAttribute("aria-label", "Locked secret " + (i + 1));
  const openIt = instant => {
    bt.classList.add("open"); $("i", bt).textContent = "💌"; const p = $("p", bt);
    if (i % 4 === 3 && !instant) type(p, m, 30); else p.textContent = m;
    if (i % 4 === 2 && !instant) burst(...ctr(bt), 24);
  };
  bt.openIt = openIt;
  bt.onclick = () => {
    if (bt.classList.contains("open")) return;
    openIt(false); if (!st.sec.includes(i)) { st.sec.push(i); save(); }
    if (st.sec.length >= SECRETS.length) reveal(7);
  };
  $("#secGrid").append(bt); return bt;
});
st.sec.forEach(i => scards[i] && scards[i].openIt(true));
if (st.sec.length >= SECRETS.length) reveal(7);

/* ---------- 8 · birthday moment + final ---------- */
let ch8 = false, lit = 5;
const t8 = $("#t8");
async function say(t, ms) { t8.textContent = t; t8.classList.add("show"); await wait(ms); t8.classList.remove("show"); await wait(1300); }
for (let i = 0; i < 5; i++) {
  const c = h("button", "cd", `<span class="fl"></span>`); c.setAttribute("aria-label", "Candle " + (i + 1));
  c.onclick = async () => {
    if (c.classList.contains("out")) return;
    c.classList.add("out"); c.append(h("span", "sm")); burst(...ctr(c), 8); lit--;
    if (lit === 0) {
      await wait(700); confetti(); fireworks(6000); burst(innerWidth / 2, innerHeight / 2, 60, "h", 8);
      await wait(2600); showFinal(false);
    }
  };
  $("#candles").append(c);
}
let fxT, nickT;
function finalFX() {
  clearInterval(fxT); clearInterval(nickT);
  const names = C.herNames.slice(1), nk = $("#nick"); let ni = 0; nk.textContent = names[0];
  nickT = setInterval(() => { nk.style.opacity = 0; setTimeout(() => { ni = (ni + 1) % names.length; nk.textContent = names[ni]; nk.style.opacity = 1; }, 500); }, 2800);
  if (RM) return;
  fxT = setInterval(() => {
    if ($("#final").hidden) return;
    for (let i = 0; i < 3; i++) spawn({ x: Math.random() * W, y: H + 20 * D, vx: (Math.random() - .5) * D, vy: -(2 + Math.random() * 2.5) * D, g: 0, m: 240, r: 3 + Math.random() * 4, c: rc(), t: "h" });
    const r = $("#hb").getBoundingClientRect(); burst(r.left + Math.random() * r.width, r.top + Math.random() * r.height, 5, "s", 2.5);
  }, 1200);
}
function showFinal(instant) {
  $("#cakeBox").hidden = true; t8.hidden = true;
  $("#hb").textContent = C.herName; $("#bm").textContent = C.birthdayMessage;
  $("#sub").textContent = bdayDiff > 0 ? `${bdayStr} is all about celebrating you.` : "Today is about celebrating you.";
  $("#dateLine").textContent = new Date(C.unlockDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  $("#sig").innerHTML = `<span>With all my love,</span><div class="chips"><i>${rep("[YOUR NAME 2]")}</i></div>`;
  const days = C.startDate ? Math.floor((Date.now() - new Date(C.startDate)) / 864e5) : 0;
  if (days > 0) { $("#days").hidden = false; $("#days").textContent = `${days} days of us, and I would choose every one again.`; }
  const ft = $("#fText"); ft.innerHTML = "";
  const N = FINAL_TEXT.length, rv = (el, d) => { if (instant) return; el.classList.add("rv"); el.style.animationDelay = d + "s"; };
  ["#hb1", "#hbw", "#nickw", "#dateLine", "#sub"].forEach((q, i) => rv($(q), .2 + i * .45));
  FINAL_TEXT.forEach((t, i) => { const p = h("p"); p.textContent = rep(t); rv(p, 2.8 + i * .9); ft.append(p); });
  rv($("#days"), 2.8 + N * .9); rv($("#sig"), 3.6 + N * .9); rv($("#bm"), 4.6 + N * .9); rv($("#lastBtn"), 5.8 + N * .9);
  $("#final").hidden = false; scrollTo({ top: 0 }); finalFX();
}
hooks[8] = async () => {
  if (ch8) return; ch8 = true;
  if (st.done >= 8) return showFinal(true);
  await say("And now...", 2200); await say("There's only one thing left to say.", 3000);
  t8.hidden = true; $("#cakeBox").hidden = false;
};
$("#lastBtn").onclick = async () => {
  const m = $("#last"); m.hidden = false; $("#lastClose").hidden = false; $("#lastText").textContent = "";
  fireworks(3000); complete(8);
  await type($("#lastText"), rep(LAST_SURPRISE), 55); burst(innerWidth / 2, innerHeight / 2, 50, "h", 8); $("#lastClose").hidden = false;
};
$("#lastClose").onclick = $("#lastX").onclick = () => $("#last").hidden = true;

/* ---------- easter egg: tap the heart 5 times ---------- */
let taps = 0, tapT;
$("#logo").onclick = async e => {
  taps++; clearTimeout(tapT); tapT = setTimeout(() => taps = 0, 2000); burst(...ctr(e.currentTarget), 4);
  if (taps < 5) return; taps = 0; st.egg = true; save();
  $("#egg").hidden = false; $("#egg1").textContent = ""; $("#egg2").textContent = "";
  await type($("#egg1"), EGG_1, 35); await wait(500); $("#egg2").textContent = rep(EGG_2);
  burst(innerWidth / 2, innerHeight / 2, 90, "h", 10);
};
$("#eggClose").onclick = $("#eggX").onclick = () => $("#egg").hidden = true;

/* ---------- music ---------- */
const au = $("#audio"), mb = $("#music"); au.src = C.musicFile;
function setMusic(on) {
  mb.classList.toggle("playing", on); mb.setAttribute("aria-pressed", on); mb.textContent = on ? "🎶" : "🎵";
  mb.setAttribute("aria-label", on ? "Pause music" : "Play music");
}
// The audio element itself is the single source of truth for the button state.
au.addEventListener("play", () => { st.music = true; save(); setMusic(true); });
au.addEventListener("pause", () => { st.music = false; save(); setMusic(false); });
mb.onclick = () => { if (au.paused) au.play().catch(() => { mb.textContent = "🔇"; }); else au.pause(); };
// Browsers block autoplay: if she had music on before, resume on her first tap (never on the music button itself).
if (st.music) {
  const resume = e => { if (e.target.closest("#music")) return; document.removeEventListener("pointerdown", resume); au.play().catch(() => {}); };
  document.addEventListener("pointerdown", resume);
}

/* ---------- restart ---------- */
$("#restart").onclick = () => {
  if (!confirm("Restart the journey from the beginning?")) return;
  try { localStorage.removeItem(KEY); } catch (e) {}
  location.reload();
};

/* ---------- birthday date ---------- */
const now = new Date(), today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const bday = new Date(now.getFullYear(), C.birthdayMonth - 1, C.birthdayDay);
const bdayDiff = Math.round((bday - today0) / 864e5);
const bdayStr = bday.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
{ const el = $("#bdayHint");
  if (bdayDiff > 0) el.textContent = `${bdayStr}  ·  ${bdayDiff} day${bdayDiff > 1 ? "s" : ""} to go`;
  else if (bdayDiff === 0) el.textContent = `${bdayStr}. It's today ✨`;
  else el.hidden = true; }

/* ---------- sparkle trail + gentle background parallax ---------- */
let lastT = 0;
addEventListener("pointermove", e => {
  if (RM) return;
  bg.style.transform = `translate(${(e.clientX / innerWidth - .5) * -18}px,${(e.clientY / innerHeight - .5) * -18}px) scale(1.07)`;
  if (e.timeStamp - lastT < 50) return; lastT = e.timeStamp;
  spawn({ x: e.clientX * D, y: e.clientY * D, vx: (Math.random() - .5) * .6 * D, vy: .2 * D, g: 0, m: 28, r: 2 + Math.random() * 3, c: rc(), t: "s" });
}, { passive: true });

/* ---------- gate: countdown to the birthday + password ---------- */
const GK = "loveStory.gate", gate = $("#gate"), gTarget = new Date(C.unlockDate).getTime();
let gateOpen = false; try { gateOpen = localStorage.getItem(GK) === "1"; } catch (e) {}
if (st.done >= 1 || Date.now() >= gTarget) gateOpen = true;
const gDate = new Date(C.unlockDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
$("#gFor").textContent = `For ${C.herName} ❤️`;
$("#gInfo").textContent = `To open this, enter the password correctly, or wait until ${gDate}, 12:00 am.`;
$("#gMsg").textContent = `Hint: ${C.passwordHint} 💘`;
function openGate(anim) {
  clearInterval(openGate.t); try { localStorage.setItem(GK, "1"); } catch (e) {}
  $("main").inert = false;
  if (!anim) { gate.hidden = true; return; }
  gate.classList.add("out"); burst(innerWidth / 2, innerHeight / 2, 70, "h", 9); setTimeout(() => gate.hidden = true, 1200);
  const c = chapters[0]; c.classList.remove("active"); void c.offsetWidth; c.classList.add("active"); // replay the opening
}
function tickGate() {
  const ms = gTarget - Date.now(); if (ms <= 0) return openGate(true);
  const s = Math.floor(ms / 1000), p = n => String(n).padStart(2, "0");
  $("#cdD").textContent = p(Math.floor(s / 86400)); $("#cdH").textContent = p(Math.floor(s % 86400 / 3600));
  $("#cdM").textContent = p(Math.floor(s % 3600 / 60)); $("#cdS").textContent = p(s % 60);
}
let tries = 0, lastMsg = -1, entering = false;
function pop(el, list) {
  const r = el.getBoundingClientRect();
  for (let i = 0; i < 4; i++) {
    const e = h("span", "pop", list[Math.random() * list.length | 0]);
    e.style.left = r.left + r.width * (.15 + Math.random() * .7) + "px"; e.style.top = r.top + "px"; e.style.setProperty("--r", (Math.random() * 60 - 30) + "deg");
    document.body.append(e); setTimeout(() => e.remove(), 1300);
  }
}
$("#gForm").onsubmit = e => {
  e.preventDefault(); if (entering) return;
  const f = e.currentTarget, inp = $("#gPw"), msg = $("#gMsg"), v = inp.value.trim().toLowerCase();
  const nick = () => C.herNames[1 + (Math.random() * (C.herNames.length - 1) | 0)];
  if (!v) { msg.textContent = `type something first, ${nick()} 😅`; return; }
  if (v === String(C.password).toLowerCase()) {
    entering = true; msg.textContent = `Correct! Aahaa, ${nick()} 🥳💖`; pop(inp, ["🥳", "🎉", "💖", "😍"]); setTimeout(() => openGate(true), 900); return;
  }
  tries++; let i; do { i = Math.random() * WRONG_MSGS.length | 0; } while (i === lastMsg && WRONG_MSGS.length > 1); lastMsg = i;
  let t = WRONG_MSGS[i];
  if (tries >= 3) t += `\nhint: ${C.passwordHint} 💘`;
  if (tries >= 6) t += `\nor just wait for the date, ${nick()} 🎂😂`;
  msg.textContent = t; inp.value = ""; inp.focus();
  f.classList.add("shake"); pop(inp, ["😜", "🙈", "😂", "🤭", "💔", "😝", "🤪"]);
  setTimeout(() => f.classList.remove("shake"), 500);
};
if (gateOpen) openGate(false); else { $("main").inert = true; tickGate(); openGate.t = setInterval(tickGate, 1000); }

/* ---------- boot ---------- */
resize();
if (st.done >= 1) show(Math.min(st.cur, st.done + 1)); else updateHud();
})();

# A Little Journey Through My Heart

An interactive birthday story. Plain HTML, CSS and JavaScript. No install, no build step.

## 1. Personalise it (5 minutes)
Open `js/script.js`. Everything you should edit is in the top block, above the line that says ENGINE:
- `herName` (set to Sharmi), `yourName` (still needs your name), `galleryPin` (2826), `pinHint`, `birthdayDay`/`birthdayMonth` (26 Nov), `startDate` (the day-counter on the last page; use "" to hide it)
- `photos` and `CAPTIONS`
- `MEMORIES`, `LETTER`, `STARS`, `QUIZ`, `SECRETS`, `FINAL_TEXT`, `LAST_SURPRISE`

Then add your files:
- Photos into `images/` named `photo1.jpg` to `photo12.jpg` (or change the names in `photos`). The gallery shows four photos per page across three pages; the third page is styled as the special memories page.
- Your song into `music/` as `birthday-song.mp3`

## 2. Run it on your computer
**Easiest:** double-click `index.html`. It opens in your browser and works.

**Better (recommended): a tiny local server.** Some phones and browsers behave differently with `file://`, and a server matches how GitHub Pages works.
- With Python (Mac/Windows/Linux): open a terminal in this folder and run
  `python3 -m http.server 8000` (on Windows: `python -m http.server 8000`)
  then open http://localhost:8000
- With VS Code: install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

## 3. Test it on your phone
Computer and phone on the same Wi-Fi. Start the Python server, find your computer's local IP address, and open `http://YOUR-IP:8000` on the phone.

## 4. Put it online with GitHub Pages
1. Create a new GitHub repository and upload everything in this folder (keep `index.html` at the top level).
2. Repository Settings > Pages > Deploy from a branch > `main` / root > Save.
3. After a minute your site is at `https://USERNAME.github.io/REPOSITORY-NAME/`. Send her that link.

## Countdown gate
The site starts locked with a live countdown to 26 November 2026, 12:00 am (the device's local time). She can unlock it early with the password `pinky` (hint: love), or it opens by itself at that time. Change `unlockDate`, `password` and `passwordHint` at the top of `js/script.js`. Her pet names are in `herNames` and yours in `yourNames`; the funny wrong-password replies are in `WRONG_MSGS`. Each place that mentions you uses just one of your names.

To test the gate again, clear the site's data in your browser (the gate remembers that it was opened).

## Tips
- The photo gallery is locked behind the PIN in `galleryPin`. It is a playful lock, not real security: anyone who views the page source can read it.
- The theme is light: pink with a light sandal secondary colour. Colours live in the `:root` variables at the top and the "v3" block at the bottom of `css/style.css`.
- Test the whole journey once, then use "Restart" (top right) to reset your progress before she opens it.
- Progress is saved in the browser. A different phone or browser starts fresh.
- Music only starts when she taps the 🎵 button (browsers block autoplay).
- Hidden Easter egg: tap the ♥ in the top bar 5 times.
- Mp3 files must be reasonably small (under ~10 MB) for fast loading. Compress photos to under 500 KB each.

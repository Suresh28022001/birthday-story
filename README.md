# A Little Journey Through My Heart

An interactive birthday story. Plain HTML, CSS and JavaScript. No install, no build step.

## 1. Personalise it (5 minutes)
Open `js/script.js`. Everything you should edit is in the top block, above the line that says ENGINE:
- `herName`, `herNames`, `yourNames`, `birthdayName`, `birthdayMessage`, `galleryPin`, `pinHint`, `birthdayDay`/`birthdayMonth`, `unlockDate`, `password`/`passwordHint`, and `startDate` (the day-counter on the last page; use `""` to hide it)
- `photos` and `CAPTIONS`
- `MEMORIES`, `LETTER`, `STARS`, `QUIZ`, `FINAL_TEXT`, `LAST_SURPRISE`, and `wishLines`
- `musicFile`, `videoFile`, `murugaImages`, and optional `stickers`

Then add your files:
- Photos into `images/` named `photo1.jpg` to `photo12.jpg` (or change the names in `photos`). The gallery shows four photos per page across three pages; the third page is styled as the special memories page.
- The song configured by `musicFile` (currently `music/Uyirey.mp3`).
- Sticker images: `baloon.jpg`, `heart.jpg`, and `star.jpg` in `images/stickers/` are configured by default. Add or remove paths in the `stickers` array; up to six stickers appear on the final page.

## 2. Run it on your computer
**Easiest:** double-click `index.html` to preview the page. Some browsers restrict media loaded from `file://`, so use a local server for reliable video and audio playback.

**Better (recommended): a tiny local server.** Some phones and browsers behave differently with `file://`, and a server matches how GitHub Pages works.
- With Python (Mac/Windows/Linux): open a terminal in this folder and run
  `python3 -m http.server 8000` (on Windows: `python -m http.server 8000`)
  then open http://localhost:8000
- With VS Code: install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".

## 3. Test it on your phone
Computer and phone on the same Wi-Fi. Start the Python server, find your computer's local IP address, and open `http://YOUR-IP:8000` on the phone.

## 4. Put it online with GitHub Pages
1. Push this folder to a GitHub repository (keep `index.html` at the top level). GitHub Pages on the Free plan requires a public repository; a private repository needs a plan that supports Pages.
2. Repository Settings > Pages > Deploy from a branch > select the branch containing the site and `/(root)` > Save.
3. After a minute your site is at `https://USERNAME.github.io/REPOSITORY-NAME/`. Send her that link.

## Password gate and progress
The password gate is shown every time the page loads. Enter the configured `password` to begin; `passwordHint` is shown as a hint. `unlockDate` controls the countdown display only and never bypasses the password; set it to the desired local date and time (currently November 26, 2026 at midnight). Her pet names are in `herNames` and yours in `yourNames`; the funny wrong-password replies are in `WRONG_MSGS`.

Refreshing or choosing **Restart** clears saved chapter progress, returns the story to the opening, and shows the password gate again. Progress is kept only while the current page is open.

## Tips
- The password and photo-gallery PIN are playful locks, not real security: anyone who views the page source can read them.
- The theme is light: pink with a light sandal secondary colour. Colours live in the `:root` variables at the top and the "v3" block at the bottom of `css/style.css`.
- Test the whole journey once, then use "Restart" (top right) to reset your progress before she opens it.
- Every refresh or restart begins a fresh journey and requires the password again.
- Music only starts when she taps the 🎵 button (browsers block autoplay).
- Hidden Easter egg: tap the ♥ in the top bar 5 times.
- Mp3 files must be reasonably small (under ~10 MB) for fast loading. Compress photos to under 500 KB each.

# Doujin Release Tracker

[![Build Status](https://travis-ci.org/Tomo-san/Doujin-Release-Tracker.svg)](https://travis-ci.org/Tomo-san/Doujin-Release-Tracker)
[![Coverage Status](https://coveralls.io/repos/Tomo-san/Doujin-Release-Tracker/badge.png)](https://coveralls.io/r/Tomo-san/Doujin-Release-Tracker)
[![Dependency Status](https://gemnasium.com/Tomo-san/Doujin-Release-Tracker.svg)](https://gemnasium.com/Tomo-san/Doujin-Release-Tracker)

Initially started as a way to keep track of what I'm looking forward to hearing at Comiket but now has expanded to also include M3 & Vocamas events. With this new V3 version of the site everything is a lot nicer and it's tons easier for me to update for new events & releases. Hopefully I'll keep this updated as new events & releases happen.

At the moment (05/08/14) only the comiket site is live. I want to get a landing page out for the sites before putting the others live. Plus all my time is being spent on the C86 releases that I don't have time to really work on it. Maybe after the releases have slowed down.

## API

If you want to use the API then you can do GET requests on: `https://intense-fire-9416.firebaseio.com/[event].json` where `event` is `comiket`, `m3` or `vocamas`. If you want a specific event release list then `https://intense-fire-9416.firebaseio.com/[event]/releases/[id].json` where `id` is the event id. You can go furthur if you want to but you should get the gist from this.

## You missed a release

Thanks, get in touch with me somehow ([@tomopagu on twitter](http://twitter.com/tomopagu "Twitter")) and I'll update the tracker as soon as I can. I was thinking of maybe adding a form so people can add their own when they want, thoughts?. Anyway to help out when letting me know could you give me:

- Album Name
- Artist/Circle Name
- Link to their site (if avail)
- Preview link to a crossfade
- Type of release (only really used for comiket releases to decide if it's Touhou, Vocaloid etc.)
- Genre of release
- Available links (Links to download, mp3, flac, other formats)

## Helping

If you wanna help out feel free to clone / fork & improve it. I'm open to everything since I know I'm pretty shitty. For the project you'll need node, grunt & compass. Run `npm install` then `bower install` to install everything and then `grunt server` will start a server to check the site while you work.

You could also just make an [issue](https://github.com/Tomo-san/Doujin-Release-Tracker/issues) and I'll get to it as soon as I can.

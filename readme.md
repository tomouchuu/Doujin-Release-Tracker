# Doujin Release Tracker

[![Circle CI](https://circleci.com/gh/Tomo-san/Doujin-Release-Tracker/tree/v4.svg?style=svg)](https://circleci.com/gh/Tomo-san/Doujin-Release-Tracker/tree/v4)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Tomo-san/Doujin-Release-Tracker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Initially started as a way to keep track of what I'm looking forward to hearing at Comiket but now has expanded to also include M3 & Vocamas events. With this new V3 version of the site everything is a lot nicer and it's tons easier for me to update for new events & releases. Hopefully I'll keep this updated as new events & releases happen.

## V4

This version of the site is currently in progress and focusing on Comiket first.

### API - Coming Soon

With the new API, you can now ping the site directly at some endpoints to get releases based on specific artists or events and more!

### Codebase

The current plan is to have a Laravel backend with Angular or Aurelia frontend and using Mongo as our Database store. I'll be importing the current Firebase database into the new system to keep compatibility.
Aside from that I'm idling on the Gitter chatroom listed above and hopefully going to commit to unit testing and using CI along with having the project on Heroku to keep it super nice.
Since in the past it's been dependant on me having to do the updates, I'm also going to be making a site scrapper to try automate the process of adding releases.

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

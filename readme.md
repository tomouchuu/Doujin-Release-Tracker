# Doujin Release Tracker

<!-- [![Build Status](https://travis-ci.org/Tomo-san/Doujin-Release-Tracker.svg)](https://travis-ci.org/Tomo-san/Doujin-Release-Tracker) -->

Initially started as a way to keep track of what I'm looking forward to hearing at Comiket but now has expanded to also include M3 & Vocamas events.

So we're onto Version 5. It's been awhile and I've once again decided to do a full recode of the site and data. For the new stack we're using Laravel as the backend and then either a Blade / React frontend. We're using Mongo for the database this time. The idea for this release is to make it faster and for me to learn Laravel since it's important for my current job. I also want to try introduce an admin area for a nicer way to add releases and maybe user support for marking releases (and maybe even adding) as the end game. Another thing I wanted to work on was to make sure there was a nice API behind it that can be used by anyone should anyone want to access the data.

## API

Coming soon! They'll hopefully be proper docs for this but generally the endpoints would be:

- `/[comiket, vocamas, m3]` - Shows data for all the events we have on record with id, date & links to forums
- `/[comiket, vocamas, m3]/id` - Shows data for a specific event we have on record with id, date & links to forums
- `/[comiket, vocamas, m3]/id/releases` - Shows data for all the releases from a specific event
- `/[comiket, vocamas, m3]/id/releases/id` - Shows data for a specific release from a specific event
- `/releases` - Shows data for all releases
- `/releases/id` - Shows data for a specific release
- `/releases/id/[comiket, vocamas, m3]` - Shows data for the event the specific release was from

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

If you wanna help out feel free to clone / fork & improve it. I'm open to everything since I know I'm pretty shitty. For the project you'll need PHP 5.4+ with MCrypt for Laravel to function and a MongoDB server. Clone it `composer install` to install dependencies, seed the data with `something`.

You could also just make an [issue](https://github.com/Tomo-san/Doujin-Release-Tracker/issues) and I'll get to it as soon as I can.

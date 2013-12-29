# Comiket Release Tracker

The reason this exists is because I'm too forgetful to remember all the releases I want from Comiket, so I decided I would make this list so that I can keep track of it all and previous trackers aren't all that pretty or aren't updated.

Built with Angular and sheer stupidity.

## I wanna add a release

First off head to [here](https://github.com/Tomo-san/comiket/tree/master/app/events) and then click on the event you want to add/edit a release on. For example if I wanted to add a release for C85, then I'd click c85.json. Next click edit and copy a release, paste on a new line after `},` & replace the details. Some Info:

* Album is the name of the album
* ArtistCircle is the name of the Artist/Circle
* Link is a link to the Artist/Circle's Homepage
* Preview is a link to the crossfade or website to preview the music
* Type is what type of release it is.
* Genre is the genre of the release.
* Available is whether some lovely generous fellow has put it on the internet. Just type `false` if it isn't. If it is then use the web address to it.

### Extra
You can have more than one entry for a field i.e. Multiple Genres / Artists. For this just comma separate them like so `"artist 1, artist 2, artist 3"` etc.

See [c85.json](https://github.com/Tomo-san/comiket/blob/master/app/events/c85.json) for what it should be like.

## Your code is rubbish

Well thanks for the encouragement. This was my first major project in Angular so it will be bad code-wise though you can be sure I'll keep improving it. Though if you wanna help by submitting Issues or Forking it then go ahead.

For forking you'll want to grab Node, Grunt & Compass and clone the repo, then run `npm install`, then `bower install`. Once you got that done next would be `grunt serve` for developing. When done with that `grunt` will build the site into `/dist` for one last check. `grunt push` will push `/dist` into a `gh-pages` branch on your repo. I would recommend reading the readme of the grunt-gh-pages module [here](https://github.com/tschaub/grunt-gh-pages) for information on how to set this up.

That should be about it!
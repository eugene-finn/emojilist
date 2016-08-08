## Emoji List - Based on iOS 10 and macOS 10.12

This is an emoji list to compare different collections and see which emojis are missing, it is based on the available emojis in the latest Apple iOS emoji keyboard, it is required to run using an Apache server (.htaccess file in img folder to show missing images).

[Live Demo](http://rodrigopolo.com/files/emojilist/)

Here are the facts and reasons for doing things this way.

1. Yes, I acknowledge the Unicode consortium exists and have shared [a lot of information about emojis](http://unicode.org/emoji/)… but…
2. Trying to follow and understand the Unicode papers is a huge task, it is quite complex to understand [how they are doing things](http://www.unicode.org/Public/emoji/3.0//emoji-data.txt).
3. Apple always has been the first to adopt and make widely available an up-to-date emoji keyboard.
4. Google and Microsoft are always behind in the race to release emoji keyboards, years behind.
5. There is NO WAY a typical user could type an emoji without an emoji (software) keyboard.

So, in conclusion, Apple has the latest emojis a typical user can type online, no one is close to match Apple in that race, knowing these facts make me find a different approach than the typical geek would do, I don’t deal with complex white papers and painful regular expressions that try to cope with the wild emoji Unicode code points “sequences”… I do things differently.

Using the emoji keyboard always running [the latest iOS/macOS beta version](https://beta.apple.com/sp/betaprogram/), I type each emoji and emoji variation by hand into a text file, I know, it is crazy. Then I [extract all PNG images from the Apple color font](https://github.com/rodrigopolo/minEmoji/tree/master/sprite_gen4) available in the latest release, most of the time, a beta release. Then I match by hand one by one, each image to its emoji, so I can rename the file to its Unicode code point without the “[Zero Width Joiner](https://en.wikipedia.org/wiki/Zero-width_joiner)” and the “[Variation Selector-16](http://www.fileformat.info/info/unicode/char/fe0f/index.htm)” characters because I don’t want to deal with long filenames. It is impossible not to find an image that doesn’t match an emoji, then, using the Unicode emoji white paper I add the description of each emoji.

For the [minEmoji project](https://github.com/rodrigopolo/minEmoji) I do an extra step. Using MongoDB I sort the emojis by length, the one that use more code points first, the one that use fewer code points at the end, then I create a regular expression based on this long list of emojis, the reason behind sorting the emojis by length is based on the way regular expressions work, so I first replace emojis that use a combination of emojis and then the one that use fewer elements, I know that by ignoring the “Zero Width Joiner” and the “Variation Selector-16” I’ll join emojis that were unintentionally together, but lets be honest, it is almost impossible that someone put those emojis together, and if someone put those emojis together just represent them as a single emoji.

With no further introduction, here is the emoji list updated on August 7, 2016 comparing the OS Native emoji as typed on an iOS 10 device, the macOS 10.12 images, TweetDeck images (Twemoji doesn’t share the latest emoji assets) and Emoji One images, I don’t include Google’s emojis because… does someone know where the fck they have their emoji assets available and up to date online?

[Donations](http://rodrigopolo.com/about/wp-stream-video/donate)

-------

### License

(The MIT License)

Copyright (c) by Rodrigo Polo http://RodrigoPolo.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

###Emoji One assets License
Attribution required, use one of the following:
* Emoji provided free by [Emoji One](http://emojione.com/)
* Emoji provided free by http://emojione.com
* Emoji set designed and offered free by [Emoji One](http://emojione.com/)

###Twitter Emoji assets License
Copyright Twitter, Inc and other contributors
Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/

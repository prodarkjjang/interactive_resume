====
Goal
====
Make an interactive resume to showcase my skills, education, work experience, interests, links and contact info.

===========
Inspiration
===========
I was browsing around awwwards looking for inspirations and I came across Salvatore Casalino's interactive resume https://www.salvatorecasalino.it/interactive-resume/. The idea of making a resume which gives out a playful vibe really clicked with me as a gamer and I decided to create my own as well. I also came across Nuuneoi's interactive profile https://nuuneoi.com/profile and loved it as well but I figure drawing pixels would take longer than drawing shapes so I decided against it.

The whole project took almost one month.

===========
Brief Steps
===========
1. Decide what to include in the resume.
2. Draft layout on paper
3. Draft on Figma
4. Create sprites
5. Implement horizontal scrolling
6. Implement parallax view
7. Implement background, ground, title and transitions 
8. Arrange sprites
9. Implement animation of personal info section
10. Implement buildings revealing interior when player is close
11. Make player walk
12. Implement scroll down notification
13. Implement loading page
14. Publish

==========
Time Sinks
==========
1. Art Sprites
Every sprite is created from scratch. I decided to do that because I wanted to hone my Photoshop and Illustrator skills. But I underestimated the time taken to draw all those sprites. Even if I was tracing some of the artwork, it still took ages to draw it out. 
2. Horizontal Scrolling
I read up on an implementation of using empty container and a real container where the real container will move horizontally depending on how much the empty container moves vertically
3. Parallax View
I wanted the background to feel alive so I decided to implement parralax view. The issue arises when I scroll to the end of each section, black backgrounds starts to appear, indicating the background image has come to an end. I tried changing various settings and toggling image settings but the issue remains, not to mention the different sizes of each background images not being helpful either.
4. Flickering Player Sprite
Whenever a new player sprite first appears, it will flicker for a while to load it. I tried to preload it like other images but it doesn't seem to work. Was it due to spritesheets being used? I'm not sure as well. Discovered this late as it only happened on live server, not on local.
5. Arranging sprites after first load and rearranging sprites after window resizing
Some of my sprite positions are not absolute in the sense that they depend on positions of other sprites and it sometimes causes unwanted sprite stacking on top of each other on the first webpage load. And when windows are resized, the trigger points for building reveal or transitions will be messed up. That's why a lot of effort was put into trying to recalibrate sprite positioning when windows are resized.
6. Responsive
I started out this project on desktop first, and when I tested it on mobile, it was weird, so I had to make some tweaks.

=============
Issues To Fix
=============
1. Parallax View Black Background
Will need to work on covering the whole screen no matter how long each section is
Current Fix: use background-size 100% 100% in js instead of css so that it takes effect. When setting background-image in js, it will probably reset background-size settings so we need to reset it in js
2. Player Flickering
Fix player flickering on first load
Current Fix: preload sprites on another div
3. Fix Sprites Arragement on First Load and Window Resizing
Need to find a way to make sprites positioning stable
No Fix Yet
4. Iphone Safari Scrolling
Mobile experience is destroyed due to safari search bar appearing whenever scrolling up and minimizing when scrolling down. My sprites and players will recalibrate their positions everytime the window size changes, causing weird teleportations of sprites on mobile browser.
No Fix Yet
5. Laggy UI due to constant frame updating
No Fix Yet
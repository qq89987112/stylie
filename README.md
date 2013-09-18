# Stylie - A CSS 3 animation tool

Stylie is a fun tool for easily creating CSS 3 animations.  You can configure
your animation graphically, tweak it, grab the generated CSS and go!

__[Watch this screencast for a quick
tutorial.](http://www.youtube.com/watch?v=dv_W1eXj9_8)__

## The Stylie Workflow

When you first open the app, you will see a little ball moving from left to
right.  You probably don't want to animate an image of a ball, so click the
"HTML" tab in the control panel on the right.  This textarea contains the HTML
that is being animated.  You can put whatever you want in here, but let's stick
some text in there for starters:

````html
<h1>Hello there!</h1>
````

The preview updates automatically. Next, you'll want to change the beginning
and ending positions of the animation. Just click and drag the crosshairs to
your liking. When your cursor is not focused on a text input, you can hold the
Shift key to make rotation Cubelets appear over the crosshairs. Click and drag
the Cubelets to modify the the X and Y rotation axes, and drag the extended
rotation arm to modify the Z axis rotation.

You can add, remove and edit keyframes.  This is done in the "Keyframes" tab.
When you first open Stylie, you are presented with the default keyframes.
Keyframe 0 cannot be moved and has no easing properties associated with it, but
all of the other keyframes do.  To add a new keyframe, click the "Add a
Keyframe" button in the upper right portion of the tab.  You can add as many
keyframes as you'd like.  You can also reorder keyframes by clicking their
millisecond value and pressing the Enter key.

You can tweak individual keyframe properties by pressing the "up" and "down"
arrow keys when focusing on a property's text input.  You can change individual
properties' easing formula by selecting it from the dropdown next to each text
input.  To remove a keyframe, click the "X" in the upper right corner of a
keyframe.

### Motion control

In addition to the standard easing formulae, you can define your own custom
easing curves in the "Motion" tab. To do this, select or create a
"customEasing" from the dropdown and drag the circular handles. You can also
type in the coordinates for the control points. Once you have defined your
custom curve, you can select it from any property's easing dropdown.

### Playback control

You'll notice a play head in the bottom left of the screen.  This is fully
interactive; you can can play, pause and stop the animation.  You can also
click and drag the play head and zip to any part of the timeline.

### Generating your CSS

Once you've configured the animation to your liking, it is time to generate the
CSS to be used in your web page.  Click on the "CSS" tab in the control panel
to see the ready-to-use CSS.  You can configure the generated CSS for your
specific needs, such as the name of the CSS class on the DOM element to be
animated, and which browser vendors you want to support.  More complex
animations will generate very verbose CSS, so be aware of that.

## Developing Stylie

Stylie is open source, so you are welcome to make changes.  If you do, you'll
want to use `dev.html`, not `index.html`.  The latter is generated by the build
process.

Building Stylie requires [NodeJS](http://nodejs.org/) and
[Bower](http://bower.io/) (version 1.0 or above).  One those are installed, run
this BASH command to download the dependencies:

````
# npm is installed as part of the standard Node distribution
npm install; bower install
````

Once the development dependencies are installed, you can compile the code with:

````
node build.js
````

Ta-da!  All of the JavaScript binaries will be generated and `index.html` will
be updated.

A note about script loading in Stylie: Code is loaded in kind of a weird way,
because it works well enough and there hasn't been a good reason to take the
time to straighten it out.  In short, libraries like jQuery and Backbone are
loaded with `<script>` elements in the development HTML, and app modules are
loaded with Require.js.  So, libraries are exposed globally.

## Contributors

I can't design things, but I know people that can.  The overall look of the app
is courtesy of [Jon Victorino](http://www.jonvictorino.com/).  The Help icon
was masterfully crafted by [@nrrrdcore](https://github.com/nrrrdcore).

## License

Stylie is distributed under an [MIT
license](http://opensource.org/licenses/MIT).  You are encouraged to use and
modify the code to suit your needs, as well as redistribute it.

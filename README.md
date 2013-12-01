angular-gcards
==============

Angular JS Implementation of Google+ style cards

Usage
=====

* Include the js, css, and png file from the /dist folder in your project.  If you can't make the png addressable at `/images/gcard-url.png` then you'll need to edit it's location in the css file.
* In your controller make an array of cards.  The `title`, `url`, and `hidden` attributes are used by the directive.  Any other data is ignored.
* Create a `<ul class='gcard'>` to be your canvas.
* Make an `<li ng-repeat='c in cards'>...</li>` where `cards` is your array variable from your controller scope.
* Write the content to render your cards inside the `<li>` tag.  This content has access to your scope and will be [transcluded](http://docs.angularjs.org/api/ng.directive:ngTransclude) by the directive
* You can optionally  to wrap your entire card area in a block with class `gcard-wrap` to get a larger gray backround area
* Hide cards by setting the `hidden` attribute on the card to `true`.

See the `/samples` folder for a basic example.

Notes
=====

* Contributions always welcome, especially if someone knows how to eliminate the need to manually add the `ul` & `li` without breaking the transclusion.
* CSS styling based on: https://gist.github.com/eLindemann/5287591 

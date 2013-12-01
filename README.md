angular-gcards
==============

Angular JS Implementation of Google+ style cards

Usage
=====

* Include the js, css, and png file from the /dist folder in your project.  If you can't make the png addressable at `/images/gcard-url.png` then you'll need to edit it's location in the css file.
* You can optionally  to wrap your entire card area in a block with class `gcard-wrap` to get a larger gray backround area
* Create a card object in your controller. The `title`, `url`, and `hidden` attributes are used by the directive.  Any other data is ignored.
* Use  `<div g-card="card">...</div>` where `card` is your object, and the content inside the div is what you want to be [transcluded](http://docs.angularjs.org/api/ng.directive:ngTransclude)
* Hide cards by setting the `hidden` attribute on the card to `true`.

More Common Usage
-----------------
* In your controller make an array of cards.  
* Create a `<ul class='gcard'>` to be your canvas.
* Make an `<li ng-repeat='c in cards'><div g-card='card'>...</div></li>` where `cards` is your array variable from your controller scope.
* Write the content to render your cards inside the `<div>` tag.

See the `/samples` folder for a basic example.

Notes
=====

* Contributions always welcome, especially if someone knows how to eliminate the need to manually add the `ul` & `li` without breaking the transclusion.
* CSS styling based on: https://gist.github.com/eLindemann/5287591 

// Google+ style cards
// Project Page: https://github.com/bglick/angular-gcards
// Styling inspired by https://gist.github.com/eLindemann/5287591
// Version: 0.1.0
angular.module('GCard',[]).directive('gCard',function() {
  return {
    restrict:'AE',
    transclude:true,
    replace:true,
    scope:{
      gCard:'='
    },
    template:'<div class="card" ng-hide="gCard.hidden"><div class="card-title">{{gCard.title}}</div><div ng-transclude class="gcard-body"></div><p class="url" ng-show="gCard.url">{{gCard.url}}</p></div>',
  }
});

// Google+ style cards
// Project Page: https://github.com/bglick/angular-gcards
// Styling inspired by https://gist.github.com/eLindemann/5287591
// Version: 0.1.1
angular.module('GCard',[]).directive('gCard',function() {
  return {
    restrict:'AE',
    transclude:true,
    replace:true,
    scope:{
      gCard:'='
    },
    template:'<div class="card" ng-hide="gCard.hidden"><div class="card-title">{{gCard.title}}</div><div ng-transclude class="gcard-body"></div><p class="url" ng-show="gCard.link.url"><a ng-href="{{gCard.link.url}}">{{gCard.link.text}}</a></p></div>',
  }
});

define([

  'lateralus'

  ,'rekapi'

  ,'../../constant'

], function (

  Lateralus

  ,Rekapi

  ,constant

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var HidableComponentView = Base.extend({
    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    initialize: function () {
      baseProto.initialize.apply(this, arguments);
      this.isHidden = false;

      this.actor = (new Rekapi(this.el)).addActor({
        context: this.el
      });
    }

    ,hide: function () {
      this.actor
        .removeAllKeyframes()
        .keyframe(0, {
          scale: 1
        }).keyframe(constant.HIDABLE_VIEW_TRANSITION_DURATION, {
          scale: 0
          ,'function': function () {
            this.isHidden = true;
          }.bind(this)
        }, 'swingFrom');

      this.actor.rekapi.play(1);
    }

    ,show: function () {
      this.actor
        .removeAllKeyframes()
        .keyframe(0, {
          scale: 0
        }).keyframe(constant.HIDABLE_VIEW_TRANSITION_DURATION, {
          scale: 1
          ,'function': function () {
            this.isHidden = false;
          }.bind(this)
        }, 'swingTo');

      this.actor.rekapi.play(1);
    }

    ,toggle: function () {
      this[this.isHidden ? 'show' : 'hide']();
    }
  });

  return HidableComponentView;
});

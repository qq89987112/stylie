define([

  'jquery'
  ,'underscore'
  ,'backbone'

  ,'src/constants'

], function (

  $
  ,_
  ,Backbone

  ,constant

) {

  return Backbone.View.extend({

    events: {
      keydown: 'onKeydown'
      ,keyup: 'onKeyup'
    }

    /**
     * @param {Object} opts
     *   @param {Stylie} stylie
     */
    ,initialize: function (opts) {
      this.stylie = opts.stylie;
      this._isShiftHeldDown = false;
    }

    ,onKeydown: function (evt) {
      var keyCode = evt.keyCode;

      // Effectively checks that no element was focused.
      if (evt.target !== this.$el[0]) {
        return;

      } else if (evt.shiftKey) {
        if (!this.$el.hasClass('is-dragging-crosshair')) {
          this.$el.addClass('shift-down');
          this._isShiftHeldDown = true;
          this.stylie.trigger(constant.ROTATION_MODE_START);
        }
      } else if (keyCode === 67) { // "C" key
        this.stylie.view.controlPane.toggle();

      } else if (keyCode === 72) { // "H" key
        this.stylie.view.helpModal.toggle();

      } else if (keyCode === 32) { // Space bar
        if (this.stylie.rekapi.isPlaying()) {
          this.stylie.rekapi.pause();
        } else {
          this.stylie.rekapi.play();
        }
      } else if (keyCode === 84) { // "T" key
        this.stylie.view.rekapiControls.fadeToggle();
      } else if (keyCode === 75) { // "K" key
        this.stylie.actorCollection.getCurrent()
          .appendNewKeyframeWithDefaultProperties();
      } else if (keyCode === 80) { // "P" key
        this.stylie.view.showPath.$el.click();
      }
    }

    ,onKeyup: function (evt) {
      if (this._isShiftHeldDown) {
        this._isShiftHeldDown = false;
        this.$el.removeClass('shift-down');
        this.stylie.trigger(constant.ROTATION_MODE_STOP);
      }
    }

  });

});

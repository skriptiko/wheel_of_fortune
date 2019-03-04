var INITIALIZED_START = false;
var StartSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        var onComplete = function () {
            cc.director.runScene(new cc.TransitionFade(1, new MainScene()));
        };

        var play = function() {
            var actionCallFunc = cc.callFunc(onComplete, this);
            var action = new cc.EaseElasticOut(new cc.ScaleBy(0.8, 0.8, 0.8));
            menuItem1.runAction(cc.sequence(action, actionCallFunc));
        };

        var bgc = new cc.Sprite(res.startSceneBackground);
        bgc.attr({
            x: size.width / 2,
            y: size.height / 2
        });

        this.addChild(bgc, 0);

        var logo = new cc.Sprite(res.logo);
        logo.attr({
            x: size.width / 2,
            y: size.height / 2 + 180,
            scale: 1.2
        });
        this.addChild(logo, 1);

        var menuItem1 = new cc.MenuItemImage(res.startButton, res.startButton, play);
        menuItem1.setPosition(0, -180);
        var menu = new cc.Menu(menuItem1);
        this.addChild(menu);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_START == false) {
            INITIALIZED_START = true;
            var layer = new StartSceneLayer();
            this.addChild(layer);
        }
    }
});


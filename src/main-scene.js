var INITIALIZED_MAIN = false;
var MainSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var arrayPoints = [1000, 400, 800, 7000, 5000, 300, 2000, 100];

        var checkWinValue = function () {
            var angle = wheele.rotation - 360 * Math.floor(wheele.rotation / 360);
            var section = Math.ceil(angle / 45);
     
        };

        var onComplete = function () {
            startSpin = false;
            checkWinValue();
        };

        var startSpin = false;
        var spin = function () {
            if (startSpin == true) return;
            startSpin = true;
            var actionCallFunc = cc.callFunc(onComplete, this);
            var action = new cc.EaseExponentialOut(new cc.RotateBy(2, (Math.random() * 360) + 180 ));
            wheele.runAction(cc.sequence(action, actionCallFunc))
        };

        var bgc = new cc.Sprite(res.mainSceneBackground);
        bgc.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(bgc, 0);


        var wheele = new cc.Sprite(res.wheelLayer2);
        wheele.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.2
        });
        this.addChild(wheele, 1);


        console.log(cc)

        var menuItem1 = new cc.MenuItemFont("Push", spin);
        var menu = new cc.Menu(menuItem1);
        menuItem1.setPosition(0, -300)
        this.addChild(menu);

        return true;
    }
});



var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_MAIN == false) {
            INITIALIZED_MAIN = true;
            var layer = new MainSceneLayer();
            this.addChild(layer);
        }
    }
});


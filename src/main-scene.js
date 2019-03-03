var INITIALIZED_MAIN = false;
var MainSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var startSpin = false;
        var totalPoints = 0;

        var arrayPoints = [1000, 400, 800, 7000, 5000, 300, 2000, 100];

        var checkWinValue = function () {
            var angle = wheelLayer1.rotation - 360 * Math.floor(wheelLayer1.rotation / 360);
            var section = Math.ceil(angle / 45);
            totalPoints += arrayPoints[arrayPoints.length - section];
            menuItem2.setString('TOTAL POINTS: ' + totalPoints);
     
        };

        var onComplete = function () {
            startSpin = false;
            checkWinValue();
        };

        var spin = function () {
            if (startSpin == true) return;
            startSpin = true;
            var actionCallFunc = cc.callFunc(onComplete, this);
            var action = new cc.EaseExponentialOut(new cc.RotateBy(2, (Math.random() * 360) + 180 ));
            wheelLayer1.runAction(cc.sequence(action, actionCallFunc))
        };

        var bgc = new cc.Sprite(res.mainSceneBackground);
        bgc.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(bgc, 0);

        var wheelLayer1 = new cc.Sprite(res.wheelLayer1);
        wheelLayer1.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.4
        });
        this.addChild(wheelLayer1, 1);

        var wheelLayer2 = new cc.Sprite(res.wheelLayer2);
        wheelLayer2.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.9
        });
        this.addChild(wheelLayer2, 3);

        var wheelLayer2 = new cc.Sprite(res.wheelLayer2);
        wheelLayer2.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.9
        });
        this.addChild(wheelLayer2, 4);

        var wheelLayer2 = new cc.Sprite(res.wheelLayer3);
        wheelLayer2.attr({
            x: size.width / 2,
            y: size.height / 2 + 22,
            scale: 1.1
        });
        this.addChild(wheelLayer2, 5);

        var menuItem1 = new cc.MenuItemImage(res.buttonSpinNorm, res.buttonSpinSel, spin);
        var menuItem2 = new cc.MenuItemFont('TOTAL POINTS: ' + totalPoints);
        menuItem1.scale = 1.1;
        menuItem2.y = 400;
        menuItem2.color = new cc.Color(232, 164, 70);

        var menu = new cc.Menu(menuItem1, menuItem2);
        this.addChild(menu, 6);

        console.log(menuItem2)

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


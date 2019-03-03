var INITIALIZED_START = false;
var StartSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // // add the label as a child to this layer
        // this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.startSceneBackground);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });

        console.log(this.sprite)
        this.addChild(this.sprite, 0);

        this.sprite = new cc.Sprite(res.logo);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2 + 200,
            scale: 1.2
        });
        this.addChild(this.sprite, 1);

        var menuItem1 = new cc.MenuItemFont("START", play);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);

        return true;
    }
});

var play = function() {
    var scene = new MainScene();
    console.log(cc)
    cc.director.runScene(new cc.TransitionFade(1.0, scene));
};

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


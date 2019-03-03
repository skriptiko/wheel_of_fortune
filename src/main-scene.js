var INITIALIZED_MAIN = false;
var MainSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);

        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;

        // this.addChild(helloLabel, 5);

        this.sprite = new cc.Sprite(res.mainSceneBackground);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        return true;
    }
});

var pop = function() {
    INITIALIZED_MAIN = false;
    cc.director.popScene();
};

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


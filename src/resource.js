
var res = {
    startSceneBackground : "res/art/start_scene_background.jpg",
    mainSceneBackground : "res/art/main_scene_background.jpg",
    wheelLayer1 : "res/art/wheel_layer_1.png",
    wheelLayer2 : "res/art/wheel_layer_2.png",
    wheelLayer3 : "res/art/wheel_layer_3.png",
    startButton : "res/art/start_button.png",
    buttonSpinNorm : "res/art/button_spin_norm.png",
    buttonSpinSel : "res/art/button_spin_sel.png",
    logo : "res/art/logo.png",
    rouletteSound : "res/sounds/roulette_sound.wav"
};

var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}
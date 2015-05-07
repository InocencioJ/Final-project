
var game ={
    "onload": function() {
        if (!me.video.init("screen", me.video.CANVAS, 1067, 600, true, '1.0')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
    },
     "loaded": function() {
     me.state.set(me.state.MENU, new game.TitleScreen());
     me.state.set(me.state.PLAY, new game.PlayScreen());
    }
};


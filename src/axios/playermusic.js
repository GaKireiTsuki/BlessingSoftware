import $ from 'jquery'
$(function () {
    var pause_play = $("#pause_play")
    pause_play.on("click", function () {
        if ($('audio').play) {
            $('audio').trigger('play');
        } else {
            $('audio').trigger('pause');
        }
    })
})
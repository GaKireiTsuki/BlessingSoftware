<template>
    <div class="audioplayer bmbl">
        <div class="controls">
            <div class="playback_controls">
                <button class="previous_song">
                    <svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421">
                        <path
                            d="M26.97,23c0.536,0 1.03,-0.38 1.03,-1.124l0,-9.752c0,-0.744 -0.494,-1.124 -1.03,-1.124c-0.294,0 -0.57,0.097 -0.889,0.283l-8.26,4.617c-0.436,0.243 -0.729,0.494 -0.804,0.874l0,-4.65c0,-0.744 -0.503,-1.124 -1.031,-1.124c-0.301,0 -0.578,0.097 -0.896,0.283l-8.261,4.617c-0.511,0.283 -0.829,0.574 -0.829,1.1c0,0.518 0.318,0.817 0.829,1.1l8.261,4.617c0.318,0.186 0.595,0.283 0.896,0.283c0.528,0 1.031,-0.38 1.031,-1.124l0,-4.658c0.075,0.388 0.368,0.639 0.804,0.882l8.26,4.617c0.319,0.186 0.595,0.283 0.889,0.283Z"
                            style="fill-rule:nonzero"></path>
                    </svg>
                </button>
                <button class="play_pause_song">
                    <svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421">
                        <path
                            d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z"
                            style="fill-rule:nonzero"></path>
                    </svg>
                </button>
                <button class="next_song">
                    <svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                        <path
                            d="M8.307,23c-0.536,0 -1.031,-0.38 -1.031,-1.124l0,-9.752c0,-0.744 0.495,-1.124 1.031,-1.124c0.293,0 0.569,0.097 0.888,0.283l8.26,4.617c0.436,0.243 0.729,0.494 0.805,0.874l0,-4.65c0,-0.744 0.502,-1.124 1.03,-1.124c0.302,0 0.578,0.097 0.896,0.283l8.261,4.617c0.511,0.283 0.829,0.574 0.829,1.1c0,0.518 -0.318,0.817 -0.829,1.1l-8.261,4.617c-0.318,0.186 -0.594,0.283 -0.896,0.283c-0.528,0 -1.03,-0.38 -1.03,-1.124l0,-4.658c-0.076,0.388 -0.369,0.639 -0.805,0.882l-8.26,4.617c-0.319,0.186 -0.595,0.283 -0.888,0.283Z"
                            style="fill-rule:nonzero"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="song_info">
            <img v-lazy="img + '?param=44y44'" alt="" />
            <div id="song_info">
                <span class="info" v-show="url !== ''">{{songName}}</span>
                <span class="info" v-show="url !== ''">{{artistName}} — {{albumName}}</span>
                <audio controls :src="url" v-show="url !== ''"></audio>
            </div>
        </div>
        <div class="controls_container">
            <div>
                <button class="open_lyric">
                    词
                </button>
            </div>
            <div>
                <button class="open_list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill-rule="evenodd"
                        stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" version="1.1" viewBox="0 0 18 18"
                        xml:space="preserve">
                        <path
                            d="M2.504,4.063l0.519,0c0.431,0 0.78,0.349 0.78,0.779c0,0.431 -0.349,0.78 -0.78,0.78l-0.519,0c-0.431,0 -0.78,-0.349 -0.78,-0.78c0,-0.43 0.349,-0.779 0.78,-0.779Zm3.118,0l9.874,0c0.431,0 0.78,0.349 0.78,0.779c0,0.431 -0.349,0.78 -0.78,0.78l-9.874,0c-0.43,0 -0.78,-0.349 -0.78,-0.78c0,-0.43 0.35,-0.779 0.78,-0.779Zm-3.118,4.157l0.519,0c0.431,0 0.78,0.35 0.78,0.78c0,0.43 -0.349,0.78 -0.78,0.78l-0.519,0c-0.431,0 -0.78,-0.35 -0.78,-0.78c0,-0.43 0.349,-0.78 0.78,-0.78Zm3.118,0l9.874,0c0.431,0 0.78,0.35 0.78,0.78c0,0.43 -0.349,0.78 -0.78,0.78l-9.874,0c-0.43,0 -0.78,-0.35 -0.78,-0.78c0,-0.43 0.35,-0.78 0.78,-0.78Zm-3.118,4.158l0.519,0c0.431,0 0.78,0.349 0.78,0.78c0,0.43 -0.349,0.779 -0.78,0.779l-0.519,0c-0.431,0 -0.78,-0.349 -0.78,-0.779c0,-0.431 0.349,-0.78 0.78,-0.78Zm3.118,0l9.874,0c0.431,0 0.78,0.349 0.78,0.78c0,0.43 -0.349,0.779 -0.78,0.779l-9.874,0c-0.43,0 -0.78,-0.349 -0.78,-0.779c0,-0.431 0.35,-0.78 0.78,-0.78Z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import './audioplayer.css'
import audioplayer from './audioplayer.js'
export default audioplayer
</script>
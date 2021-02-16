<template>
    <div>
        <!-- <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameborder="0"
            height="450"
            style="
                width: 100%;
                max-width: 660px;
                overflow: hidden;
                background: transparent;
            "
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="http://localhost:100/album/%E5%A4%A9%E6%B0%97%E3%81%AE%E5%AD%90/80440087"
        >
        </iframe> -->
        <div class="bars">
            <div class="bars1"></div>
            <div class="bars2"></div>
            <div class="bars3"></div>
            <div class="bars4"></div>
        </div>
    </div>
</template>
<style>
    .bars{
        display: flex;
        height: 15px;
        width: 26px;
        justify-content: center;
        align-items: flex-end;
    }
    .bars div[class *= 'bars']{
        width: 2.56px;
        height:2.56px;
        border-radius: 0.6px;
        background: var(--redFillColor);
        margin: 0 0.4px;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-name: bars;
        animation-duration: 1s;
    }
    .bars1{
        animation-delay: 250ms;
    }
    .bars2{
        animation-delay: 615ms;
    }
    .bars3{
        animation-delay: 475ms;
    }
    .bars4{
        animation-delay: 25ms;
    }
    @keyframes bars {
        0% {
                height: 2.56px;
        }
        50% {
            height: 15px;
        }
        100% {
                height: 2.56px;
        }
    }
</style>
<template>
    <v-app :style="{ backgroundColor: $vuetify.theme.themes.dark.background }">
        <NavBar />
        <div class="bubbles">
            <div class="bubble" v-for="n in 20" :key="n"></div>
        </div>
        <v-container fluid>
            <v-col cols="12" md="5" offset-md="1">
                <h1 class="text-darken-4 top">welcome to my world</h1>
                <h1 class="text-darken-4 detail">I'm Film<br>Chayodom Khruesuk<br><span class="rank">Software Developer.</span><br>based in <span class="upper">thailand</span></h1>
            </v-col>
        </v-container>
    </v-app>
</template>

<script>
    import NavBar from '../components/TabBar.vue'
    export default {
        name: 'home',
        components: {
            NavBar
        }
    }
</script>

<style>
    .top{
        margin-top: 100px;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 1rem;
        font-weight: bold;
        color: #bfc9ca;
        opacity: 0.5;
        position: relative;
        z-index: 1;
    }

    .detail {
        font-size: 2.9rem;
        font-weight: bolder;
        color: #d0d1d2;
        font-family: "Arbutus Slab", serif;
        font-style: normal;
        position: relative;
        z-index: 1;
    }

    .rank{
        color: #e74c3c;
    }

    .upper{
        text-transform: uppercase;
    }

    .bubbles {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
        top: 0;
        left: 0;
    }

    .bubble {
        position: absolute;
        bottom: -100px;
        width: 40px;
        height: 40px;
        background: #e74c3c;
        border-radius: 50%;
        opacity: 0.1;
        animation: rise 10s infinite ease-in;
    }

    .bubble:nth-child(even) {
        background: #A7121D;
        width: 20px;
        height: 20px;
    }

    @keyframes rise {
        0% {
            bottom: -100px;
            transform: translateX(0);
        }
        50% {
            transform: translate(100px, -500px);
        }
        100% {
            bottom: 1080px;
            transform: translateX(-200px);
        }
    }

    .bubble:nth-child(1) { left: 10%; animation-delay: 0.5s; }
    .bubble:nth-child(2) { left: 20%; animation-delay: 1s; }
    .bubble:nth-child(3) { left: 35%; animation-delay: 1.5s; }
    .bubble:nth-child(4) { left: 50%; animation-delay: 2s; }
    .bubble:nth-child(5) { left: 65%; animation-delay: 2.5s; }
    .bubble:nth-child(6) { left: 80%; animation-delay: 3s; }
    .bubble:nth-child(7) { left: 90%; animation-delay: 3.5s; }
    .bubble:nth-child(8) { left: 25%; animation-delay: 4s; }
    .bubble:nth-child(9) { left: 45%; animation-delay: 4.5s; }
    .bubble:nth-child(10) { left: 70%; animation-delay: 5s; }
    .bubble:nth-child(11) { left: 15%; animation-delay: 5.5s; }
    .bubble:nth-child(12) { left: 55%; animation-delay: 6s; }
    .bubble:nth-child(13) { left: 30%; animation-delay: 6.5s; }
    .bubble:nth-child(14) { left: 60%; animation-delay: 7s; }
    .bubble:nth-child(15) { left: 75%; animation-delay: 7.5s; }
    .bubble:nth-child(16) { left: 85%; animation-delay: 8s; }
    .bubble:nth-child(17) { left: 95%; animation-delay: 8.5s; }
    .bubble:nth-child(18) { left: 40%; animation-delay: 9s; }
    .bubble:nth-child(19) { left: 5%; animation-delay: 9.5s; }
    .bubble:nth-child(20) { left: 100%; animation-delay: 10s; }
</style>

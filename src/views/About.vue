<template>
    <v-app>
        <NavBar />
        <div class="bubbles">
            <div class="bubble" v-for="n in 20" :key="n"></div>
        </div>
        <v-container fluid>
            <v-row justify="center" no-gutters>
                <v-col cols="4" class="pr-6">
                    <v-img
                        src="../assets/profile_1.jpg"
                        max-width="600"
                        class="rounded-lg"
                        cover
                    />
                </v-col>
                <v-col cols="5" class="pl-4">
                    <h3 class="text-darken-4 gradient-text font-text font-upper">my about details</h3>
                    <h1 class="text-h3 font-weight-bold mb-4 font-text font-upper">About Me</h1>
                    <p class="text-body-1 font-text color-text">
                        Hello, I'm Film. I'm a software developer with a passion for designing and creating websites and applications. 
                        With my knowledge and expertise in modern technologies.
                    </p>

                    <v-tabs v-model="tab" color="#A7121D" grow class="border">
                        <v-tab>Main Skills</v-tab>
                        <v-tab>Education</v-tab>
                        <v-tab>hobbies</v-tab>
                        <v-tab>likes & dislikes</v-tab>
                    </v-tabs>

                    <div class="mt-4 tab-content">
                        <div v-if="tab === 0" class="content-section">
                            <div class="skill-container">
                                <div class="skill-header">
                                    <span class="skill-label">Vue.js</span>
                                    <span class="skill-percentage">40%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 40%"></div>
                                </div>

                                <div class="skill-header">
                                    <span class="skill-label">JavaScript</span>
                                    <span class="skill-percentage">40%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 40%"></div>
                                </div>

                                <div class="skill-header">
                                    <span class="skill-label">Python</span>
                                    <span class="skill-percentage">75%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 75%"></div>
                                </div>

                                <div class="skill-header">
                                    <span class="skill-label">Flutter</span>
                                    <span class="skill-percentage">65%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 65%"></div>
                                </div>

                                <div class="skill-header">
                                    <span class="skill-label">HTML&CSS</span>
                                    <span class="skill-percentage">50%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 50%"></div>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab === 1" class="content-section">
                            <h3 class="color-text margin-b15-l10 education-title">Junior high school <span class="education-details">- Science and Math ,Saparachinee 2 School<br>2018</span></h3>
                            <h3 class="color-text margin-b15-l10">Senior high school <span class="education-details">- Science and Math ,Saparachinee 2 School<br>2021</span></h3>
                            <h3 class="color-text margin-b15-l10">BSc in PSU <span class="education-details">- Computer Engineering, TH<br>2021 - Present</span></h3>
                        </div>

                        <div v-if="tab === 2" class="content-section">
                            <h3>My Hobbies</h3>
                            <p>Coding, Reading, Gaming</p>
                        </div>

                        <div v-if="tab === 3" class="content-section">
                            <h3>Likes</h3>
                            <p>Technology, Coffee, Music</p>
                            <h3>Dislikes</h3>
                            <p>Traffic, Spam emails</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import NavBar from '../components/TabBar.vue'
export default {
    name: 'home',
    components: {
        NavBar
    },
    data() {
        return {
            tab: 0
        }
    },
    watch: {
        tab(newValue) {
            console.log('Selected tab:', newValue)
        }
    }
}
</script>

<style>
.tab-content {
    min-height: 200px;
    position: relative;
    z-index: 1;
}
.content-section {
    padding: -1px 20px;
    position: relative;
    z-index: 1;
}
.gradient-text {
    background: linear-gradient(45deg, #A7121D, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    z-index: 1;
}

.color-text {
    color: #bfc9ca;
    font-family: "Arbutus Slab", serif;
}

.font-text{
    font-family: "Arbutus Slab", serif;
    line-height: 1;
    letter-spacing: 0.5px;
}

.font-upper{
    text-transform: capitalize !important
}

.border {
    border: 4px;
    border-radius: 15px;
    overflow: hidden;
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

.skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.skill-bar-wrapper {
    display: flex;
    align-items: center;
}

.skill-container {
    margin: 20px 0;
}

.skill-label {
    color: #bfc9ca;
    font-family: "Arbutus Slab", serif;
}

.skill-bar {
    width: 100%;
    height: 6px;
    background: #2c3e50;
    border-radius: 15px;
    margin-bottom: 20px;
    overflow: hidden;
    margin-right: 10px;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(to right, #A7121D, #3498db);
    border-radius: 15px;
    transition: width 1s ease-in-out;
}

.skill-percentage {
    min-width: 50px;
    color: #bfc9ca;
    font-family: "Arbutus Slab", serif;
}

.margin-b15-l10{
    margin-bottom: 15px;
    margin-left: 10px;
}

.education-title {
    font-family: "Arbutus Slab", serif;
    font-size: 17px;
}

.education-details {
    color: #87898a;
    font-size: 14px;
}
</style>

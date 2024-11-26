<template>
    <v-app>
        <NavBar />
        <div class=" bubbles">
            <div class="bubble" v-for="n in 20" :key="n"></div>
        </div>
        <v-container fluid>
            <v-row justify="center" align="center">
                <v-col cols="5" class="pl-4 text-center">
                    <h3 class="text-darken-4 gradient-text font-text">My complete project</h3>
                    <h1 class="text-h3 font-weight-bold mb-4 font-text font-upper">my latest project</h1>
                    <p class="text-body-1 font-text color-text">
                        This project is part of my learning. Throughout my learning, I have gained new experiences.
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-8 px-16">
                <v-col cols="12" md="4" class="pa-4" v-for="(project, index) in projects" :key="index">
                    <v-card class="project-card mx-auto" max-width="400">
                        <div class="card-wrapper">
                            <v-img height="300" :src="project.image" cover />
                            <div class="initial-title">
                                <h3 class="text-h5 white--text text-center">{{ project.title }}</h3>
                            </div>
                            <div class="overlay-content">
                                <h3 class="text-h5 white--text mb-4">{{ project.title }}</h3>
                                <p class="white--text mb-4">{{ project.description }}</p>
                                <v-btn color="white" outlined :to="project.link">View Project</v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import NavBar from '../components/TabBar.vue'

export default {
    name: 'portfolio',
    components: {
        NavBar
    },
    data() {
        return {
            projects: [
                {
                    title: 'Web Development',
                    description: 'Full-stack web application development using Vue.js and Node.js',
                    link: './components/project_web.vue',
                    image: 'https://wallpaperaccess.com/full/3239444.jpg',
                },
                {
                    title: 'Mobile App',
                    description: 'Cross-platform mobile application built with React Native',
                    link: './components/project_mobile.vue',
                    image: 'https://fiches-pratiques.chefdentreprise.com/Assets/Img/FICHEPRATIQUE/2021/12/368384/Les-formations-devenir-developpeur-application-mobile-F.jpg'
                },
                {
                    title: 'UI/UX Design',
                    description: 'Modern user interface design with focus on user experience',
                    link: './components/project_design.vue',
                    image: 'https://www.brainstormindia.com/images/resources/web.jpg'
                }
            ]
        }
    }
}
</script>

<style>
.project-card :view-transition-image-pair {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

.card-wrapper {
    position: relative;
    height: 300px;
}

.initial-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    transition: all 0.3s ease;
}

.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(transparent, rgba(167, 18, 29, 0.95));
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transform: translateY(50%);
    transition: all 0.3s ease;
    backdrop-filter: blur(3px);
}

.project-card:hover .v-image {
    filter: blur(3px);
    transform: translateY(-15px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card:hover .overlay-content {
    opacity: 1;
    transform: translateY(0);
}

.project-card:hover .initial-title {
    opacity: 0;
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
    opacity: 0.3;
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

.bubble:nth-child(1) {
    left: 10%;
    animation-delay: 0.5s;
}

.bubble:nth-child(2) {
    left: 20%;
    animation-delay: 1s;
}

.bubble:nth-child(3) {
    left: 35%;
    animation-delay: 1.5s;
}

.bubble:nth-child(4) {
    left: 50%;
    animation-delay: 2s;
}

.bubble:nth-child(5) {
    left: 65%;
    animation-delay: 2.5s;
}

.bubble:nth-child(6) {
    left: 80%;
    animation-delay: 3s;
}

.bubble:nth-child(7) {
    left: 90%;
    animation-delay: 3.5s;
}

.bubble:nth-child(8) {
    left: 25%;
    animation-delay: 4s;
}

.bubble:nth-child(9) {
    left: 45%;
    animation-delay: 4.5s;
}

.bubble:nth-child(10) {
    left: 70%;
    animation-delay: 5s;
}

.bubble:nth-child(11) {
    left: 15%;
    animation-delay: 5.5s;
}

.bubble:nth-child(12) {
    left: 55%;
    animation-delay: 6s;
}

.bubble:nth-child(13) {
    left: 30%;
    animation-delay: 6.5s;
}

.bubble:nth-child(14) {
    left: 60%;
    animation-delay: 7s;
}

.bubble:nth-child(15) {
    left: 75%;
    animation-delay: 7.5s;
}

.bubble:nth-child(16) {
    left: 85%;
    animation-delay: 8s;
}

.bubble:nth-child(17) {
    left: 95%;
    animation-delay: 8.5s;
}

.bubble:nth-child(18) {
    left: 40%;
    animation-delay: 9s;
}

.bubble:nth-child(19) {
    left: 5%;
    animation-delay: 9.5s;
}

.bubble:nth-child(20) {
    left: 100%;
    animation-delay: 10s;
}
</style>

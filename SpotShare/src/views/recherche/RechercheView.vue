<template>
    <div>
        <nav class="shadow">
            <div class="search">
                <input class="input" placeholder="Recherche..." v-model="filtre" type="text" @change="filterData"
                    name="text" required="">
                <img src="../../assets/search.svg" alt="">
            </div>
        </nav>
        <div class="image">
            <postCardComponent v-for="donnee in resultats" v-bind:key="donnee" :name="donnee.name" :content="donnee.content"
                :place="donnee.place" :profilePicture="donnee.profilePicture" :image="donnee.image"
                :isLiked="donnee.isLiked" />

        </div>
        <NavbarGuide />
    </div>
</template>
<script>
import postCardComponent from '../../components/posts/postCard.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
import { post } from "./../../data/post"
export default {
    components: {
        postCardComponent,
        NavbarGuide
    },
    data() {
        return {
            resultats: [],
            filtre: "",
            donnees: post
        }
    },
    mounted() {
        this.resultats = this.donnees
    },
    methods: {
        filterData() {
            console.log("ici");
            this.resultats = this.donnees.filter((item) => {
                return (
                    item.place.toLowerCase().includes(this.filtre.toLowerCase()) ||
                    item.content.toLowerCase().includes(this.filtre.toLowerCase()) ||
                    item.name.toLowerCase().includes(this.filtre.toLowerCase())
                );
            });
            console.log(this.resultats);
        }
    }
}
</script>


<style scoped>
.image {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
}

nav {
    height: 65px;
    background-color: white;
    position: fixed;
    z-index: 10;
    top: 0;
    max-width: 568px;
    width: calc(100vw - 32px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

}

.input {
    background-color: rgb(240, 240, 240);
    height: 40px;
    width: 600px;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    color: rgb(110, 110, 110);
    font-size: 1em;
}
</style>
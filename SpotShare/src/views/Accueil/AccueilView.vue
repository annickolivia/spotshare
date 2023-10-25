<template>
   <div class="body">
      <navbar />

      <div class="image">
         <postCardComponent v-for="donnee in resultats" v-bind:key="donnee" :name="donnee.name" :content="donnee.content"
            :place="donnee.place" :profilePicture="donnee.profilePicture" :image="donnee.image"
            :isLiked="donnee.isLiked" />

      </div>
      <NavbarGuide />
   </div>
</template>
<script>
import navbar from '../../components/main/NavbarTopComponent.vue';
import postCardComponent from '../../components/posts/postCard.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
import { post } from "./../../data/post"

export default {
   name: 'HomeView',
   components: {
      navbar,
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
/*{
    margin: 0;
    padding: 0;
   }*/
.body {
   width: 100vw;
   max-width: 600px;
   background-color: rgb(238, 237, 237);
}

.image {
   margin: auto;
   padding-top: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 100px
}

.titre {
   font-size: 0.9em;
   margin-left: 10px;
}

img {
   width: 350px;
   height: 300px;
   margin-top: 50px;
   margin-left: 10px;
}

.ittem {
   box-shadow: 5px 5px 5px 5px rgb(196, 196, 196);
   margin-top: 30px;
   height: 500px;
   width: 370px;
   background-color: rgb(1, 26, 255);
}
</style>
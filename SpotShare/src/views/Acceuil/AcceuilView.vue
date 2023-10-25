<template>
   <div class="body">
      <navbar />
      <div class="image">
         <postCardComponent v-for="donnee in donnees" v-bind:key="donnee" :name="donnee.name" :content="donnee.content"
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
export default {
   name: 'HomeView',
   components: {
      navbar,
      postCardComponent,
      NavbarGuide
   },
   data() {
      return {
         donnees: [
            {
               name: "Olivia Manoo",
               content: "Lorem ipsum dolor iset",
               profilePicture: "https://fastly.picsum.photos/id/867/536/354.jpg?hmac=ZTo9zXiBEzq8jHC_u6F5xsEUjJ9JEOCeY4tLx9Upozc",
               image: "https://fastly.picsum.photos/id/867/536/354.jpg?hmac=ZTo9zXiBEzq8jHC_u6F5xsEUjJ9JEOCeY4tLx9Upozc",
               isLiked: false,
               place: "Italy"
            },
            {
               name: "Olivia Manoo",
               content: "Lorem ipsum dolor iset",
               profilePicture: "https://fastly.picsum.photos/id/867/536/354.jpg?hmac=ZTo9zXiBEzq8jHC_u6F5xsEUjJ9JEOCeY4tLx9Upozc",
               image: "https://fastly.picsum.photos/id/867/536/354.jpg?hmac=ZTo9zXiBEzq8jHC_u6F5xsEUjJ9JEOCeY4tLx9Upozc",
               isLiked: true,
               place: "Itaosy"
            },
         ]
      }
   },
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
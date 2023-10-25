<template>
    <NavbarPost />
    <div class="card">
        <img src="../../assets/italie.jpg" alt="" class="cover">
        <div class="head">
            <img src="../../assets/italie.jpg" class="avatar left" alt="">
            <div class="right">
                <p class="username">Olivia Manoa</p>
                <p class="location">Italy</p>
            </div>
        </div>
        <p class="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat dolorem voluptate
            eaque delectus
            illum quibusdam harum laborum pariatur fuga excepturi voluptatibus minima voluptates reprehenderit, quo officia
            cupiditate enim alias.</p>
        <div class="logo ">
            <img src="../../assets/like.svg" alt="">
            <img src="../../assets/comment.svg" alt="">
        </div>
    </div>
    <div class="comments">
        <div class="contenu">
            <img src="../../assets/anais.jpg" alt="" class="autre">
            <div class="groupe">
                <p class="name">Anaïs AA</p>
                <p class="commentaire">Beautiful</p>
            </div>
        </div>
    </div>
    <input class="input" placeholder="Ecrire un commentaire..." type="text" name="text" required="">
    <div>
        <NavbarGuide />
    </div>
</template>
       
<script>
import NavbarPost from '../../components/main/NavbarPost.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
export default {
    components: {

        NavbarPost,
        NavbarGuide,
    }
}

</script>
  
<style scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cover {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}

.head {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 16px;
    margin-left: 10px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 4px #49BFC1;
    margin-right: 16px;
}

.head p {
    margin: 0;
}

.head .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.username {
    font-size: 18px;
    font-weight: bold;
}

.location {
    color: rgb(110, 110, 110);
    font-style: italic;
    font-size: 14px;
}

.legend {
    color: rgb(110, 110, 110);
    margin-left: 10px;
    font-style: italic;
}

.logo {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 10px;
}

.logo img {
    margin-right: 16px;
    margin-left: 10px;
}

.comments {
    display: flex;
    justify-content: start;
    height: 70px;
    width: 90%;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    margin-top: 10px;
    margin-left: 10px;
}

.contenu {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 5px;

}

.contenu p {
    margin: 8px;
}

.autre {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 4px #49BFC1;
    margin-left: 16px;
}

.name {
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
}

.input {
    height: 40px;
    width: 90%;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    margin-left: 20px;
    margin-top: 20px;
    color: rgb(110, 110, 110);
    font-size: 1em;
}
</style>
<template>
    <NavbarPost />
    <div class="card">
        <img :src="image" alt="" class="cover">
        <div class="head" @click="viewUser">
            <img :src="profilePicture" class="avatar left" alt="">
            <div class="right">
                <p class="username">{{ name }}</p>
                <p class="location">{{ place }}</p>
            </div>
        </div>
        <p class="legend">{{ content }}</p>
        <div class="logo ">
            <img @click="like" v-if="isLiked == false" src="../../assets/like.svg" alt="">
            <img @click="like" v-else src="../../assets/likeclick.svg" alt="">
            <img src="../../assets/comment.svg" alt="">
        </div>
    </div>
    <div class="commContainer">
        <div class="comments" v-for="com in comments" v-bind:key="com">
            <div class="contenu">
                <img src="https://z-p3-scontent-jnb1-1.xx.fbcdn.net/v/t1.15752-9/396419828_868339181527056_1400916004187048578_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeElVIKPMYX8LMK3zdHJujxf_rhFUCrr_uL-uEVQKuv-4sizB7iDy4qnDiX5JeeUCnhd6Sz7ga2Ed5kbCcHRCq0f&_nc_ohc=59Vd2SBU-0sAX8o-wQh&_nc_ht=z-p3-scontent-jnb1-1.xx&oh=03_AdTS4rGtoDsNnNw9A2Fur20YJUV7WzpH3JiWz-h87ODBng&oe=65620DD4"
                    alt="" class="autre">
                <div class="groupe">
                    <p class="name">Olivia Manoo</p>
                    <p class="commentaire">{{ com }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="containerInput">
        <input @change="post" v-model="commentText" class="input" placeholder="Ecrire un commentaire..." type="text"
            name="text" required="">
    </div>
</template>
       
<script>
import NavbarPost from '../../components/main/NavbarPost.vue';
export default {
    components: {

        NavbarPost,
    },

    data() {
        return {
            commentText: "",
            content: "",
            name: "",
            place: "",
            profilePicture: "",
            image: "",
            isLiked: false,
            comments: [
            ]
        }
    },
    mounted() {
        this.content = localStorage.getItem('content')
        this.name = localStorage.getItem('name')
        this.place = localStorage.getItem('place')
        this.profilePicture = localStorage.getItem('profilePicture')
        this.image = localStorage.getItem('image')
        this.isLiked = localStorage.getItem('isLiked')
    },
    methods: {
        like() {
            if (this.isLiked == true) {
                this.isLiked = false
            } else {
                this.isLiked = true
            }
        },
        viewUser() {
            localStorage.setItem('name', this.name)
            this.$router.push('/profil');

        },
        post() {

            this.comments.push(this.commentText)
            this.commentText = ""
        }
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

.commContainer {
    padding-bottom: 100px;
}

.input {
    height: 40px;
    width: 100%;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    color: rgb(110, 110, 110);
    font-size: 1em;
}

.containerInput {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: white;
}
</style>
<template>
    <div class="card shadow">
        <img :src="image" alt="" class="cover" @click="openPost">
        <div class="head" @click="viewUser">
            <img :src="profilePicture" class="avatar left" alt="">
            <div class="right">
                <p class="username">{{ name }}</p>
                <p class="location">{{ place }}</p>
            </div>
        </div>
        <p>{{ content }}</p>
        <div class="logo ">

            <img @click="like" v-if="isLikedData == false" src="../../assets/like.svg" alt="">
            <img @click="like" v-else src="../../assets/like.svg" class="like" alt="">
            <img src="../../assets/comment.svg" alt="">
        </div>
    </div>
</template>
        
<script>

export default {
    name: 'PostCardComponent',
    props: {
        content: String,
        name: String,
        place: String,
        profilePicture: String,
        image: String,
        isLiked: Boolean
    },
    data() {
        return {
            isLikedData: false
        }
    },
    mounted() {
        if (this.isLiked == true) this.isLikedData = true
    },
    methods: {
        viewUser() {
            localStorage.setItem('name', this.name)
            location.href = "/profil"
        },
        like() {
            if (this.isLikedData == true) {
                this.isLikedData = false
            } else {
                this.isLikedData = true
            }
        },
        openPost() {
            localStorage.setItem('name', this.name)
            localStorage.setItem('content', this.content)
            localStorage.setItem('place', this.place)
            localStorage.setItem('profilePicture', this.profilePicture)
            localStorage.setItem('image', this.image)
            localStorage.setItem('isLiked', this.isLikedData)
            location.href = '/post'
        }
    }
}

</script>
   
<style scoped>
.like {
    background-color: red;
}

.card {
    width: calc(100vw - 64px);
    max-width: 536px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    margin-bottom: 16px;
}

.cover {
    width: 100%;
    height: 40vh;
    object-fit: cover;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 4px #49BFC1;
    margin-right: 16px;
    object-fit: cover;

}

.head {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 16px;
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
    font-size: 14px;
}

.logo {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 16px;
}

.logo img {
    margin-right: 16px;
}
</style>
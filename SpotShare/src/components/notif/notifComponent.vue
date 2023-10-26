<template>
    <div class="head">
        <img :src="profilePicture" class="avatar left" alt="">
        <div class="right">
            <p class="username">{{ name }} <span>{{ content }}</span></p>
            <p class="location"> <b>{{ place }} </b></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notifComponent',
    props: {
        content: String,
        name: String,
        place: String,
        profilePicture: String
    },
}
</script>
<style scoped>
.head {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100px;
    width: 100%;
    border-bottom: solid 1px #49BFC1;
    border-top: solid 1px #49BFC1;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 4px #49BFC1;
    margin-right: 16px;
    margin-left: 10px;
}

.location {
    font-size: 14px;
    margin-top: 10px;
}

span {
    font-weight: normal;
    font-size: 0.9rem;
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
</style>
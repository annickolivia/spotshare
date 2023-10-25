<template>
    <div class="head">
        <img src="../../assets/italie.jpg" class="avatar left" alt="">
        <div class="right">
            <p class="username">Olivia Manoa <span>à publier une nouvelle photo</span></p>
            <p class="location">Italy , 41493308 , 2,44905 <span>1j</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notifComponent'
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
    border-top: solid 2px #49BFC1;
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
    font-style: italic;
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
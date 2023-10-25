<template>
    <div class="nav shadow">
        <div class="icon">
            <router-link to="/acceuil"><img src="../../assets/home.svg" alt=""></router-link>
            <router-link to="/notification"><img src="../../assets/notification.svg" alt=""></router-link>
            <router-link to="/NouvellePub"><img src="../../assets/image.svg" alt=""></router-link>
            <router-link to="/param"><img src="../../assets/param.svg" alt=""></router-link>
            <router-link to="/profil"><img src="../../assets/profil.svg" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarGuide'
}
</script>
<style>
.icon {
    display: flex;
    justify-content: center;
}

.icon img {
    padding: 1.5rem;
}

.nav {
    max-width: 600px;
    height: 65px;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
}
</style>
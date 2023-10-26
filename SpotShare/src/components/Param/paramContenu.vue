<template>
    <div class="contenu">
        <div class="contenu1">
            <router-link to="/accueil"><img src="../../assets/homep.svg" alt=""></router-link>
            <router-link to="/accueil">
                <p>Accueil</p>
            </router-link>
        </div>
        <div class="contenu1">
            <router-link to="/notification"><img src="../../assets/notif.svg" alt=""></router-link>
            <router-link to="/notification">
                <p>Notification</p>
            </router-link>
        </div>
        <div class="contenu1">
            <router-link to="/profil"><img src="../../assets/profilp.svg" alt=""></router-link>
            <router-link to="/profil">
                <p>Profil</p>
            </router-link>
        </div>

        <div class="contenu2">
            <router-link to="/">
                <p>Se déconnecter</p>
            </router-link>
            <router-link to="/connexion">
                <p>Ajouter un compte</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'paramContenu'
}
</script>

<style scoped>
.contenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    width: calc(100vh - 100px);
}

.contenu1 {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-left: 100px;
    text-decoration: none;

}

img {
    margin-right: 30px;
}

p {
    font-size: 1.5em;
    color: black;
}

a {
    text-decoration: none;
}

.contenu2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 100px;
    color: red;
}
</style>
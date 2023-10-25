<template>
    <div class="debut">
        <img src="../../assets/logo3.png" alt="">
        <h1>Spotshare</h1>
        <ButtonConnexion />
        <ButtonCree />
        <ButtonContinue />
    </div>
</template>
     
<script setup>
import ButtonConnexion from "../../components/Button/ButtonConnexion.vue"
import ButtonCree from "../../components/Button/ButtonCree.vue"
import ButtonContinue from "../../components/Button/ButtonContinue.vue"
</script>
   
   
<style scoped>
.debut {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

img {
    width: 170px;
    height: 170px;
    border-radius: 30px;
}

h1 {

    margin-top: 60px;
    font-size: 3em;
}
</style>
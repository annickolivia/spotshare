<template>
  <div class="debut">
    <div class="logo">
      <img src="../../assets/ispm .webp" alt="" class="right">
      <img src="../../assets/logo3.png" alt="" class="left">
    </div>
    <div class="login">

      <input :class="{ valide: isValidEmail == true, inValide: isValidEmail == false }" v-model="email" class="input"
        placeholder="Email" type="email" name="email" required="">

      <input :class="{ valide: isStrongPassword == true, inValide: isStrongPassword == false }" v-model="password"
        class="input" placeholder="Mot de passe" type="password" name="pswd" required="">

      <input type="submit" value="Se connecter" @click="SeConnecter">

      <ButtonCree2 />
      <ButtonContinue2 />
    </div>
  </div>
</template>


<script setup>
import ButtonCree2 from "../../components/Button/ButtonCree2.vue"
import ButtonContinue2 from "../../components/Button/ButtonContinue2.vue"
import { ref, computed } from "vue";

const startValidation = ref(false);


const email = ref('');
const password = ref('');

function SeConnecter() {

  location.href = "/accueil"
}
const isValidEmail = computed(() => {
  return startValidation.value ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) : null;
});

const isStrongPassword = computed(() => {
  return startValidation.value ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) : null;
});


</script>


<style scoped>
.debut {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vw;
  width: 100%;
}

.logo {
  display: flex;
}

.logo .right {
  margin-right: 50px;
  width: 100px;
  height: 100px;
}

.logo .left {
  border-radius: 30px;
  width: 80px;
  height: 80px;


}

h1 {

  margin-top: 60px;
  font-size: 2.5em;
}

.login {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.input {
  padding: 10px;
  width: 85%;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #49BFC1;
  margin-bottom: 30px;
  font-size: 1.2em;
  font-weight: bold;

}

input[type="submit"] {
  width: 89%;
  height: 55px;
  background-color: #49BFC1;
  border: 2px solid #49BFC1;
  border-radius: 10px;
  font-size: 1.2em;
  color: white;
  font-weight: bold;
}

input[type="submit"]:hover {
  background-color: #49BFC1;
  box-shadow: 0px 0px 20px -18px;
}

input[type="submit"]:active {
  transform: scale(0.95);
  background-color: #78dbdd;
}

.valide {
  background-color: white;
}

.inValide {
  border-color: red;
}

p {
  color: red;
}
</style>
<template>
    <div class="debut">
        <img src="../../assets/logo3.png" alt="">
        <div class="login">
            <input :class="{ valide: isValidName == true, inValide: isValidName == false }" class="input" v-model="name"
                placeholder="Nom " type="text" name="name" required="">

            <input :class="{ valide: isValidEmail == true, inValide: isValidEmail == false }" v-model="email" class="input"
                placeholder=" Email" type="email" name="email" required="">

            <input :class="{ valide: isStrongPassword == true, inValide: isStrongPassword == false }" v-model="password"
                class="input" placeholder="Mot de passe" type="" name="pswd" required="">

            <input :class="{ valide: isPasswordConfirmed == true, inValide: isPasswordConfirmed == false }"
                v-model="confirmpassword" class="input" placeholder="Confirmation de mot passe" type="" name="pswd"
                required="">

            <input type="submit" value="Crée le compte" @click="CreeCompte">
        </div>
    </div>
</template>


<script setup>

import { ref, computed } from "vue";

/* const application = {
 data(){
     return {
         users: window.users,
         newUsers: {

         },
         errors:[],
     }
 },
 methodes: {
     CreeCompte: function(){
         this.errors = [];

         if (!this.newUsers.name){
             this.errors.push('Nom  requis.')
         }
         if (this.errors.length){
             return false;
         }
     }
 }
}*/



const startValidation = ref(false);

const name = ref('');
const email = ref('');
const password = ref('');
const confirmpassword = ref('');

function CreeCompte() {
    startValidation.value = true;
    location.href = "/accueil"

}
const isValidEmail = computed(() => {
    return startValidation.value ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) : null;
});

const isStrongPassword = computed(() => {
    return startValidation.value ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) : null;
});

const isPasswordConfirmed = computed(() => {
    return startValidation.value ? password.value == confirmpassword.value : null;
});
const isValidName = computed(() => {
    return startValidation.value ? name.value != '' : null;
})

</script>


<style scoped>
.debut {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
}

img {
    border-radius: 30px;
    width: 80px;
    height: 80px;
}

h1 {

    margin-left: 35px;
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
    width: 90%;
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
    background-color: white no-repeat right;
}

.inValide {
    border-color: red;
}

p {
    color: red;
}
</style>
<template>
    <router-link to="/creecompte"><button id="connexion">Crée un compte</button></router-link>
</template>
     
<script>
</script>

<style scoped>
 a{
          width: 80%
        }
    #connexion{
        margin-top: 30px;
        width: 100%;
        height: 55px;
        background-color:#49BFC1;
        border: 2px solid #49BFC1;
        border-radius: 10px;
        font-size: 1.2em;
        color:white;
        font-weight: bold;
      }
   #connexion:hover{
        
         box-shadow: 0px 0px 20px -18px;
       }
   #connexion:active{
         transform: scale(0.95);
         background-color:#F2F2F2;
       }
</style>
<template>
  <router-link to="/creecompte"><button id="connexion">Crée un compte</button></router-link> 
</template>
     
<script >
</script>

<style scoped>
      a{
          width: 89%
        }
        #connexion{ 
       
        margin-top: 30px;
        width: 100%;
        height: 55px;
        background-color:#f0f0f0;
        border: 2px solid #ffffff;
        border-radius: 10px;
        font-size: 1.2em;
        color:#4E4C4C;
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
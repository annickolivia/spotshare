<template>
    <nav class="">
        <h1>SpotShare</h1>
        <router-link to="/search"><img src="../../assets/search.svg" alt=""></router-link>
    </nav>
</template>
       
<script>

export default {
    name: 'NavbarPost'
}

</script>
  
<style scoped>
nav {
    height: 65px;
    background-color: white;
    position: fixed;
    z-index: 10;
    top: 0;
    max-width: 568px;
    width: calc(100vw - 32px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}
</style>
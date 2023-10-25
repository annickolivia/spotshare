<template>
    <nav class="shadow">
        <div class="right">
            <img src="../../assets/back.svg" alt="">
            <h1>Paramètre</h1>
        </div>
        <img src="../../assets/search.svg" alt="">
    </nav>
</template>
       
<script>

export default {
    name: 'NavbarParam'
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

.right {
    display: flex;
    justify-content: start;
}
</style>
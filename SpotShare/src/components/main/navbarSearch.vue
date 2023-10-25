<template>
    <nav class="shadow">
        <div class="search">
            <input class="input" placeholder="Recherche..." type="text" name="text" required="">
            <img src="../../assets/search.svg" alt="">
        </div>
    </nav>
</template>
       
<script>

export default {
    name: 'navbarSearch'
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

.search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

}

.input {
    background-color: rgb(240, 240, 240);
    height: 40px;
    width: 600px;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    color: rgb(110, 110, 110);
    font-size: 1em;
}
</style>
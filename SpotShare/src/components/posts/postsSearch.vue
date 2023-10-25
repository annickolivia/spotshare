<template>
    <div class="image">
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
        <div class="item"><img src="../../assets/grece.jpg" alt=""></div>
    </div>
</template>
        
<script>

export default {
    name: 'PostsSearch'
}

</script>
   
<style scoped>
.image {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1300px;
    margin-top: 100px;
}


.image img {
    height: 40vh;
    width: 250px;
    margin: 5px;
    overflow: hidden;
    flex-shrink: 0;
}
</style>
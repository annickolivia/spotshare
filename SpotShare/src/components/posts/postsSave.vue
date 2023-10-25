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
    name: 'PostsSaveComponent'
}

</script>
   
<style scoped>
.image {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0 5rem 1.2rem;
    max-width: 1300px;
}


.image img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    overflow: hidden;
    flex-shrink: 0;
    padding: .5rem;
}
</style>
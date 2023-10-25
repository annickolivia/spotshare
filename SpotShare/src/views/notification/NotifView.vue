<template>
    <navbar />
    <div class="notif">
        <p class="jour">7 derniers Jours </p>
        <notifComponent />
        <notifComponent />
        <notifComponent />
        <p class="jour">7 derniers Jours </p>
        <notifComponent />
        <notifComponent />
    </div>
    <NavbarGuide />
</template>
<script>
import navbar from '../../components/main/NavbarTopComponent.vue';
import notifComponent from '../../components/notif/notifComponent.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';
export default {
    components: {
        navbar,
        notifComponent,
        NavbarGuide
    }
}
</script>
<style scoped>
.notif {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
}

.jour {
    margin-top: 50px;
    margin-left: 30px;
}
</style>
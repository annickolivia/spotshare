<template>
    <navbar />
    <div class="notif">
        <notifComponent
            profilePicture="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/391750737_1115152312802955_7522467816756041199_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfCmvVhtMMizYPq2y4fiH5WTFWqB-Rw9VZMVaoH5HD1eelRxsxaLahr7aQ3ZgFQs3yf1Xbj0zRwjXL5DkOlGBj&_nc_ohc=s2xaOqqL8BIAX_KbMzk&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AfAO1oGpe6g7kaBmroNG7BbiFPjvZri4pD6k8jLYyN65Cw&oe=653FCD50"
            name="Annick Randrianarijaona" content="a une nouvelle publication" place="ISPM Antsobolo" />
        <notifComponent
            profilePicture="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/376556270_644100667826697_8927693267676869261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8_ycE7-Nqp9ZQ_UmyqRqBHw_MsnqXYLkfD8yyepdguaOpcgFFIOiJaGsGmr5CREzYouU-50mczRJ71zuoBRCL&_nc_ohc=xFnDjpJ3b_UAX-xOfJs&_nc_oc=AQmmTH6AOvmVeZ4NGlnzQ1kdn_IVMXPmxTa8dg2TqIPb-mUVYC-j7BRuC5jnkJRkX34&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AfDmKbQWg8YqoEBNO7LrPBsE5ocI5Q56976AjO86Tll3RA&oe=653E21A2"
            name="Manoo Andria" content="a une nouvelle publication" place="Morondava" />
        <notifComponent
            profilePicture="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/376556270_644100667826697_8927693267676869261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8_ycE7-Nqp9ZQ_UmyqRqBHw_MsnqXYLkfD8yyepdguaOpcgFFIOiJaGsGmr5CREzYouU-50mczRJ71zuoBRCL&_nc_ohc=xFnDjpJ3b_UAX-xOfJs&_nc_oc=AQmmTH6AOvmVeZ4NGlnzQ1kdn_IVMXPmxTa8dg2TqIPb-mUVYC-j7BRuC5jnkJRkX34&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AfDmKbQWg8YqoEBNO7LrPBsE5ocI5Q56976AjO86Tll3RA&oe=653E21A2"
            name="Manoo Andria" place="Vous suit actuellement" />
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
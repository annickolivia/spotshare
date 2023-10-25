<template>
    <NavbarParamVue />
    <paramContenu />
</template>

<script>
import NavbarParamVue from '../../components/main/NavbarParam.vue';
import paramContenu from '../../components/param/paramContenu.vue';
export default {
    components: {
        NavbarParamVue,
        paramContenu,
    }
}

</script>
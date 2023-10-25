<template>
    <div>
        <navbarSearch />
        <postsSearch />
        <NavbarGuide />
    </div>
</template>
<script>
import navbarSearch from '../../components/main/navbarSearch.vue';
import postsSearch from '../../components/posts/postsSearch.vue';
import NavbarGuide from '../../components/navbar/NavbarGuideComponent.vue';

export default {
    components: {
        navbarSearch,
        postsSearch,
        NavbarGuide
    }
}
</script>
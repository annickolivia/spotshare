<template>
    <NavbarNew />
    <div class="form">
        <textarea rows="4" name="" id=""></textarea>
        <router-link to="/accueil"><button>Publier</button></router-link>
        <input id="fileInput" type="file" ref="fileInput" @change="onFileChange" multiple accept="image/*" />
        <label for="fileInput" class="inputFile">
            Choisir des images
        </label>
        <div v-if="selectedImages.length > 0">
            <div class="selectedImages">
                <img v-for="(image, index) in selectedImages" :key="index" :src="image"
                    style="max-width: 200px; max-height: 200px; margin: 10px 0;" />
            </div>
        </div>
    </div>
</template>

<script>
import NavbarNew from '../../components/main/NavbarNew.vue'
export default {
    components: {
        NavbarNew,

    },
    data() {
        return {
            selectedImages: []
        };
    },
    methods: {
        onFileChange(e) {
            const files = e.target.files;
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.selectedImages.push(e.target.result);
                    };
                    reader.readAsDataURL(files[i]);
                }
            }
        }
    }
}

</script>
<style scoped>
.form {
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 100px);
    overflow-x: scroll;
}

#fileInput {
    display: none;
}

a {
    text-decoration: none;
    width: 85%;
    width: 85%;
    min-height: 40px;
    font-size: 20px;
    border: none;
    color: white;
    margin-top: 32px;
    border-radius: 8px;
    cursor: pointer;
    transition: ease all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
}

button,
.inputFile {
    width: 85%;
    width: 85%;
    min-height: 40px;
    font-size: 20px;
    background-color: #49bfc1;
    border: none;
    color: white;
    margin-top: 32px;
    border-radius: 8px;
    cursor: pointer;
    transition: ease all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inputFile {
    background-color: #9df3f5;
    color: black;

}

button:hover {
    background-color: #3c999b;
}

textarea {
    width: 85%;
    padding: 16px;
    font-size: 20px;
    min-height: 150px;
}

.selectedImages {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}

.selectedImages img {
    margin: 8px 8px 0 !important;
    aspect-ratio: 1/1;
    object-fit: cover;
    width: calc(50% - 16px);
}
</style>
<template>
    <NavbarNew />
    <div class="form">
        <input class="input" placeholder="Où êtes vous?" type="text" name="text" required="">
        <textarea rows="4" name="" id="" placeholder="Description..."></textarea>

        <button @click="publier" v-if="isLoading == false">Publier</button>

        <button v-else>Loading...</button>
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
            selectedImages: [],
            isLoading: false
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
        },
        publier() {
            this.isLoading = true
            setTimeout(() => this.$router.push('/accueil'), 2000)
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

.input {
    background-color: rgb(240, 240, 240);
    height: 40px;
    width: calc(85% - 8px);
    margin-top: 16px;
    border-radius: 10px;
    border: solid 2px #49BFC1;
    color: rgb(110, 110, 110);
    font-size: 1em;
    padding-left: 8px;
}

textarea {
    width: calc(85% - 16px);
    padding: 16px 8px;
    font-size: 1em;
    border: solid 2px #49BFC1;
    border-radius: 10px;

    margin-top: 16px;
    min-height: 150px;
}

#fileInput {
    display: none;
}

a {
    text-decoration: none;
    width: 100%;
    min-height: 40px;
    font-size: 20px;
    border: none;
    color: white;
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
    margin-top: 16px;
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


.selectedImages {
    margin-top: 16px;
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
<template>
  <div class="debut">
    <input type="file" class="profil" @change="onFileSelected">
    <p>Entrer votre profil</p>
    <button @click="onUpload" id="connexion">Suivant</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload() {

    }
  }
}
</script>


<style scoped>
.debut {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.profil {
  width: 250px;
  height: 250px;
  background-color: #49BFC1;
  border-radius: 100%;
  margin-top: 150px;

}

p {
  margin-top: 60px;
  font-size: 28px;
  font-weight: bold;
}

#connexion {
  margin-top: 30px;
  width: 80%;
  height: 55px;
  background-color: #49BFC1;
  border: 2px solid #49BFC1;
  border-radius: 10px;
  font-size: 1.2em;
  color: white;
  font-weight: bold;
}

#connexion:hover {
  background-color: #49BFC1;
  box-shadow: 0px 0px 20px -18px;
}

#connexion:active {
  transform: scale(0.95);
}
</style>
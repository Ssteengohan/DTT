<script>
import { usePostStore } from '@/stores/api.js';

export default {
  data() {
    return {
      newPost: {
        price: '',
        bedrooms: '',
        bathrooms: '',
        size: '',
        streetName: '',
        houseNumber: '',
        numberAddition: '',
        zip: '',
        city: '',
        constructionYear: '',
        hasGarage: '',
        description: '',
      },
      image: null,
      url: null,
    };
  },
  methods: {
    goBack() {//Go back to previous page
      this.$router.go(-1);
    },
    handleClear() {//Clear the file input
      this.image = null;
      this.url = null;
      const input = this.$refs.imageInput;
      input.type = 'text';
      input.type = 'file';
    },
    handleImageChange(event) {//Show the image preview
      this.image = event.target.files[0];
      this.url = URL.createObjectURL(this.image);

    },
    handleSubmit() {//Submit the form
      const postStore = usePostStore();
      postStore.postHouses(this.newPost, this.image)
        .then(() => {
          this.$router.push('/home');
          this.reloadPage();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    reloadPage() {
      location.reload();
      this.$router.push('/home');
    }
  },
};
</script>

<template>
  <div class="bg">
    <div class="BackHome">
        <img @click="goBack" src="@/assets/dtt/back.png" alt="back">
        <p class="PBack">Back to overview</p>
    </div>
    <div class="post-form">
      <h1>Create new listing</h1>
      <form @submit.prevent="handleSubmit">
        <div class="one">
          <label for="streetName">Street name*</label>
          <input type="text" v-model="newPost.streetName" placeholder="Enter the street name" required pattern="^[a-zA-Z\s]+$" title="Has to be a letter " />
        </div>
        <div class="two">
          <div class="first">
            <label for="houseNumber">House number*</label>
            <input type="text" v-model="newPost.houseNumber" placeholder="Enter house number" required pattern="[0-9]+"
              title="Has to be a number" />
          </div>
          <div class="second">
            <label for="numberAddition">Number addition*</label>
            <input type="text" v-model="newPost.numberAddition" placeholder="e.g.A" />
          </div>
        </div>
        <div class="one">
          <label for="zip">Postal code*</label>
          <input type="text" v-model="newPost.zip" placeholder="e.g. 1000 AA" required pattern="[0-9]{4}\s?[a-zA-Z]{2}"
            title="Has to be atleast 4 digits a space and 2 letters" />
        </div>
        <div class="one">
          <label for="city">City*</label>
          <input type="text" v-model="newPost.city" placeholder="e.g. Utrecht" required pattern="[a-zA-Z]+"
            title="Has to be a letter " />
        </div>
        <div class="img">
          <img class="preview" v-if="url" :src="url" />
          <img src="@/assets/dtt/clear-white.png" class="clear" alt="clear" v-if="url" @click="handleClear" />
          <div class="upload" v-else>
            <label>Upload picture (PNG or JPG)</label>
            <label id="box" for="image">
              <img class="plus" src="@/assets/dtt/plus.png" alt="plus">
            </label>
          </div>
          <input type="file" id="image" accept="image/png, image/jpeg" @change="handleImageChange" required
            title="Only PNG or JPEG" />
        </div>
        <div class="one">
          <label for="price">Price*</label>
          <input type="text" v-model="newPost.price" placeholder="e.g. €150.000 " required pattern="\d+(\.\d{1,2})?"
            title="Has to be a number" />
        </div>
        <div class="two">
          <div class="first" id="een">
            <label for="size">Size*</label>
            <input type="text" v-model="newPost.size" placeholder="e.g. 60m2" required pattern="\d+(\.\d{1,2})?" />
          </div>
          <div class="second" id="twee">
            <label for="hasGarage">Has garage*</label>
            <select v-model="newPost.hasGarage" required>
              <option value="" disabled selected>Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div class="two">
          <div class="first">
            <label for="bedrooms">Bedrooms*</label>
            <input type="text" v-model="newPost.bedrooms" placeholder="Enter amount" required />
          </div>
          <div class="sec">
            <label for="bathrooms">Bathrooms*</label>
            <input type="text" v-model="newPost.bathrooms" placeholder="Enter amount" required />
          </div>
        </div>
        <div class="one">
          <label for="constructionYear">Construction year*</label>
          <input type="text" v-model="newPost.constructionYear" placeholder="e.g. 1980" required
            pattern="(19[4-9]\d|20[0-2]\d)" title="Has to be 4 digits and above 1940" />
        </div>
        <div class="one">
          <label for="description">Description*</label>
          <textarea v-model="newPost.description" placeholder="Write a description" required></textarea>
        </div>
        <button type="submit">POST</button>
      </form>
    </div>
  </div>
</template>
  
<style scoped>
.bg {
  background-image: url("@/assets/dtt/background.png");
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.BackHome {
  margin-left: 15%;
  margin-top: 2rem;
  display: flex;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 400;
  color: var(--text1);
  align-items: center;
}

.BackHome img {
  width: 20px;
  height: 20px;
}

.PBack {
  margin-left: 12px;
}

h1 {
  font-family: var(--font-family);
  font-size: 22px;
  font-weight: 700;
  color: var(--text1);
}

.post-form {
  max-width: 370px;
  min-height: 1000px;
  margin-left: 14%;
  padding: 1rem;
  border-radius: 1rem;
  font-family: var(--font-family);
  font-size: 12px;
  font-weight: 400;
}

.one {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
label {
    padding-bottom: 10px;
}
.two {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}

#een,
#twee {
  display: flex;
  flex-direction: column;
}

#twee select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  height: 40px;
  border: 1px;
  border-radius: 10px;
  font-family: var(--font-family-alt);
  font-weight: 400;
  font-size: 15px;
  color: var(--secondary-text);
  background-color: var(--background2);
  min-width: 180px;
}

.upload #box {
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-style: dashed;
  border-width: 3px;
  border-color: var(--tertiary2);
  margin-bottom: 10px;
}

input[type="file"] {
  display: none;
}

.plus {
  max-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
  margin-top: 35px;
}

.img .preview {
  max-width: 100px;
  min-height: 100px;
}

.clear {
  position: absolute !important;
  max-width: 30px !important;
  min-height: 30px !important;
  margin-left: -18px;
  margin-top: -5px;
}

input[type="text"] {
  cursor: pointer;
  max-width: 350px;
  min-height: 40px;
  border: 1px;
  border-radius: 10px;
  font-family: var(--font-family-alt);
  font-weight: 400;
  font-size: 15px;
  color: var(--secondary-text);
  background-color: var(--background2);
  padding-left: 20px;
}

input[type="text"]::placeholder {
  color: var(--tertiary2);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
}


input[type="text"]:focus {
  outline: none;
}

.two input[type="text"] {
  max-width: 155px;
}

.two .first {
  padding-right: 15px;
}

textarea {
  cursor: pointer;
  border: 1px;
  border-radius: 10px;
  font-family: var(--font-family-alt);
  font-weight: 400;
  font-size: 15px;
  color: var(--secondary-text);
  background-color: var(--background2);
  padding: 20px;
  resize: none;
}

textarea:focus {
  outline: none;
}

textarea::placeholder {
  color: var(--tertiary2);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
}

button {
  float: right;
  cursor: pointer;
  min-width: 170px;
  min-height: 45px;
  border: 1px;
  border-radius: 10px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
  color: var(--background2);
  background-color: var(--primary);
}
@media screen and (max-width: 750px) {
  input[type="text"] {
    width: 250px;
  }
  .two input[type="text"] {
    max-width: 107px;
  }
  #twee select {
    min-width: 127px;
  }
  .post-form {
    max-width: 270px;
  }
}


</style>
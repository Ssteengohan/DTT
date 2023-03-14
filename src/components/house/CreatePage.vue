<script>
import { usePostStore } from "@/stores/api.js";

export default {
  data() {
    return {//set all fields to empty
      newPost: {
        price: "",
        bedrooms: "",
        bathrooms: "",
        size: "",
        streetName: "",
        houseNumber: "",
        numberAddition: "",
        zip: "",
        city: "",
        constructionYear: "",
        hasGarage: "",
        description: "",
      },
      image: null,
      url: null,
      showError: false,
    };
  },
  computed: {
    allFieldsFilled() {
      // Check if all fields are filled
      const requiredFields = [
        "streetName",
        "description",
        "houseNumber",
        "zip",
        "city",
        "price",
        "bedrooms",
        "bathrooms",
        "size",
        "constructionYear",
        "hasGarage",
      ];
      return requiredFields.every((field) => !!this.newPost[field]);
    },
  },

  methods: {
    goBack() {//go back to previous page
      this.$router.go(-1);
    },

    handleClear() {//clear all fields
      this.image = null;
      this.url = null;
      const input = this.$refs.imageInput;
      input.type = "text";
      input.type = "file";
    },

    handleImageChange(event) {//handle image change
      this.image = event.target.files[0];
      this.url = URL.createObjectURL(this.image);
    },


    handleSubmit() {//handle submit
      const requiredFields = [
        "streetName",
        "description",
        "houseNumber",
        "zip",
        "city",
        "price",
        "bedrooms",
        "bathrooms",
        "size",
        "constructionYear",
        "hasGarage",
      ];
      let hasError = false;

      // Check if all required fields are filled
      for (const field of requiredFields) {
        if (!this.newPost[field]) {
          hasError = true;
          const input = this.$refs[field];
          input.classList.add("error");
        } else {
          const input = this.$refs[field];
          input.classList.remove("error");
        }
      }

      // Check if an image is selected
      if (!this.image) {
        alert("Please select an image");
        return;
      }

      // If there are errors, show the error message and return
      if (hasError) {
        this.showError = true;
        return;
      }

      // If there are no errors, submit the form
      const postStore = usePostStore();
      postStore.postHouses(this.newPost, this.image)
        .then(({ id }) => {
          // Navigate to the detail page
          this.$router.push({ name: "detail", params: { id: id } });
        })
        .catch((error) => {
          console.error(error);
        });
    }


  },
};
</script>

<template>
  <div class="bg">
    <div class="BackHome">
      <img @click="goBack" src="@/assets/dtt/back.png" alt="back" />
      <p class="PBack">Back to overview</p>
    </div>
    <div class="MobBack">
      <img @click="goBack" src="@/assets/dtt/back.png" alt="back" />
      <h1>Create new listing</h1>
    </div>
    <div class="post-form">
      <h1>Create new listing</h1>
      <form @submit.prevent="handleSubmit" ref="form">
        <div class="one">
          <label for="streetName">Street name*</label>
          <input type="text" v-model="newPost.streetName" placeholder="Enter the street name"
            title="Has to be a number with no spaces" class="required-field" ref="streetName" pattern="^[a-zA-Z\s]+$" />
        </div>
        <div class="two">
          <div class="first">
            <label for="houseNumber">House number*</label>
            <input type="number" v-model="newPost.houseNumber" placeholder="Enter house number"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              title="Has to be a number" class="required-field" ref="houseNumber" />
          </div>
          <div class="second">
            <label for="numberAddition">Number addition*</label>
            <input type="text" v-model="newPost.numberAddition" placeholder="e.g.A" />
          </div>
        </div>
        <div class="one">
          <label for="zip">Postal code*</label>
          <input type="text" v-model="newPost.zip" placeholder="e.g. 1000 AA" pattern="[0-9]{4}\s?[a-zA-Z]{2}"
            title="Has to be atleast 4 digits a space and 2 letters" class="required-field" ref="zip" />
        </div>
        <div class="one">
          <label for="city">City*</label>
          <input type="text" v-model="newPost.city" placeholder="e.g. Utrecht" pattern="[a-zA-Z]+"
            title="Has to be a letter " class="required-field" ref="city" />
        </div>
        <label>Upload picture (PNG or JPG)</label>
        <div class="img">
          <img class="preview" v-if="url" :src="url" />
          <img src="@/assets/dtt/clear-white.png" class="clear" alt="clear" v-if="url" @click="handleClear" />
          <div class="upload" v-else>
            <label id="box" for="image">
              <img class="plus" src="@/assets/dtt/plus.png" alt="plus" />
            </label>
          </div>
          <input type="file" id="image" accept="image/png, image/jpeg" @change="handleImageChange"
            title="Only PNG or JPEG" />
        </div>
        <div class="one">
          <label for="price">Price*</label>
          <input type="number" v-model="newPost.price" placeholder="e.g. €150.000 "
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            title="Has to be a number with no spaces" class="required-field" ref="price" />
        </div>
        <div class="two">
          <div class="first" id="een">
            <label for="size">Size*</label>
            <input type="number" v-model="newPost.size" placeholder="e.g. 60m2"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              title="Has to be a number with no spaces" class="required-field" ref="size" />
          </div>
          <div class="second" id="twee">
            <label for="hasGarage">Has garage*</label>
            <select v-model="newPost.hasGarage" class="required-field" ref="hasGarage">
              <option value="" disabled selected>Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div class="two">
          <div class="first">
            <label for="bedrooms">Bedrooms*</label>
            <input type="number" v-model="newPost.bedrooms" placeholder="Enter amount"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              title="Has to be a number with no spaces" class="required-field" ref="bedrooms" />
          </div>
          <div class="sec">
            <label for="bathrooms">Bathrooms*</label>
            <input type="number" v-model="newPost.bathrooms" placeholder="Enter amount"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              title="Has to be a number with no spaces" class="required-field" ref="bathrooms" />
          </div>
        </div>
        <div class="one">
          <label for="constructionYear">Construction year*</label>
          <input type="number" v-model="newPost.constructionYear" placeholder="e.g. 1980" pattern="(19[4-9]\d|20[0-2]\d)"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            title="Has to be 4 digits and above 1940" class="required-field" ref="constructionYear" />
        </div>
        <div class="one">
          <label for="description">Description*</label>
          <textarea v-model="newPost.description" placeholder="Write a description" ref="description"
            class="required-field"></textarea>
        </div>
        <div v-if="showError" class="error-message">
          <label>Required field missing</label>
        </div>
        <button type="submit" :class="{
          notActive: !allFieldsFilled,
          'red-button': allFieldsFilled,
        }">
          POST
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.required-field.error {
  outline: 2px solid var(--primary);
}

input.required-field.error::placeholder,
textarea.required-field.error::placeholder {
  color: var(--primary);
}

.notActive {
  background-color: #da8e83;
}

.error-message {
  color: var(--primary);
  font-size: 12px;
  margin-bottom: 10px;
}

.bg {
  background-image: url("@/assets/dtt/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
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

.MobBack {
  display: none;
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
  width: 370px;
  height: 1060px;
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
  height: 90px;
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
  max-width: 110px;
  min-height: 110px;
}

.clear {
  position: absolute !important;
  max-width: 30px !important;
  min-height: 30px !important;
  margin-left: -18px;
  margin-top: -5px;
}

input[type="text"],
input[type="number"] {
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

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  outline: none;
}

input[type="text"]::placeholder,
input[type="number"]::placeholder {
  color: var(--tertiary2);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
}

.two input[type="text"],
.two input[type="number"] {
  width: 155px;
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
  .BackHome {
    display: none;
  }

  .MobBack {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 320px;
  }

  .MobBack img {
    width: 20px;
    height: 20px;
    padding-right: 50px;
  }

  .post-form {
    margin: 0 auto;
  }

  .post-form h1 {
    display: none;
  }

  input[type="text"] {
    width: 300px;
  }

  .two input[type="text"],
  .two input[type="number"] {
    width: 130px;
  }

  #twee select {
    min-width: 155px;
  }

  button {
    width: 100%;
  }

  .post-form {
    width: 330px;
  }
}
</style>

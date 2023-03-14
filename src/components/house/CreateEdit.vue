<script>
import { EditPostStore, useImageStore, useHouseStore } from "@/stores/api.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
    data() {
        const router = useRoute();
        const id = router.params.id;

        // Get the house store
        const store = useHouseStore();
        const getHouses = () => {
            store.getHouses();
        };

        // Get the house that is being edited
        const house = computed(() => {
            return store.houses.find(
                (house) => house.id.toString() === id.toString()
            );
        });

        // Get the numbers from the street name
        const numbers = computed(() => {
            if (!house.value) {
                return null;
            }
            const regex = /\d+/g; // Matches one or more digits
            const matches = house.value.location.street.match(regex);
            return matches ? matches.join(" ") : null;
        });

        // Get the street name
        const street = computed(() => {
            if (!house.value) {
                return null;
            }
            const regex = /^[^\d]+/;
            const matches = house.value.location.street.match(regex);
            return matches ? matches[0] : null;
        });

        // Get the additional info from the street name
        const additionalInfo = computed(() => {
            if (!house.value) {
                return null;
            }
            const regex = /\b\w(\w*)\b$/;
            const matches = house.value.location.street.match(regex);
            return matches && matches[1] ? matches[1].slice(-1) : null;
        });

        // Get the zip code
        const zip = computed(() => {
            const locationZip = house.value?.location?.zip;
            return locationZip ? locationZip : null;
        });

        // Get the city
        const city = computed(() => {
            const locationCity = house.value?.location?.city;
            return locationCity ? locationCity : null;
        });

        // Get the price
        const price = computed(() => {
            const price = house.value?.price;
            return price ? price : null;
        });

        // Get the size
        const size = computed(() => {
            const size = house.value?.size;
            return size ? size : null;
        });

        // Get the garage
        const garage = computed(() => {
            const garage = house.value?.hasGarage;
            return garage ? garage : null;
        });

        // Get the bedrooms
        const bedrooms = computed(() => {
            const bedrooms = house.value?.rooms?.bedrooms;
            return bedrooms ? bedrooms : null;
        });

        // Get the bathrooms
        const bathrooms = computed(() => {
            const bathrooms = house.value?.rooms?.bathrooms;
            return bathrooms ? bathrooms : null;
        });

        // Get the construction year
        const constructionYear = computed(() => {
            const constructionYear = house.value?.constructionYear;
            return constructionYear ? constructionYear : null;
        });

        // Get the description
        const description = computed(() => {
            const description = house.value?.description;
            return description ? description : null;
        });

        return {// The data of the post that is being edited
            EditPost: {
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
            house,
            getHouses,
            numbers,
            street,
            zip,
            city,
            price,
            size,
            garage,
            bedrooms,
            bathrooms,
            constructionYear,
            description,
            additionalInfo,
            showError: false,
        };
    },

    computed: {
        allFieldsFilled() {
            const fields = [
                this.EditPost.streetName,
                this.EditPost.houseNumber,
                this.EditPost.zip,
                this.EditPost.city,
                this.EditPost.price,
                this.EditPost.size,
                this.EditPost.bedrooms,
                this.EditPost.bathrooms,
                this.EditPost.constructionYear,
                this.EditPost.description,
                this.EditPost.hasGarage,
            ];

            return fields.every((field) => {
                return field !== undefined && field !== null && field !== '';
            });
        },
    },

    methods: {
        goBack() { // Go back to the previous page
            this.$router.go(-1);
        },

        handleClear() { // Clear the file input
            this.image = null;
            this.url = null;
            this.house.image = null;
            const input = this.$refs.imageInput;
            input.type = "text";
            input.type = "file";
        },

        handleImageChange(event) {// Show the image preview
            this.image = event.target.files[0];
            this.url = URL.createObjectURL(this.image);
        },

        handleSubmit() {// Submit the edited post
            if (!this.allFieldsFilled) {
                this.showError = true;
            } else {
                this.showError = false;
                const id = this.$route.params.id;
                const payload = { EditHouse: this.EditPost };
                EditPostStore()
                    .EditHouses(id, payload)
                    .then(() => { // If no image is selected, don't update the image
                        if (!this.image) {
                            this.$router.push({ name: "detail", params: { id: id } });
                            return;
                        } else {// If an image is selected, update the image
                            useImageStore()
                                .updateImage(id, this.image)
                                .then(() => {
                                    this.$router.push({ name: "detail", params: { id: id } });
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        },
    },
    mounted() {// Get the data of the post that is being edited
        this.getHouses();
        this.EditPost.streetName = this.street;
        this.EditPost.numberAddition = isNaN(this.additionalInfo)
            ? this.additionalInfo
            : "";
        this.EditPost.houseNumber = this.numbers;
        this.EditPost.houseNumber = this.numbers;
        this.EditPost.zip = this.zip;
        this.EditPost.city = this.city;
        this.EditPost.price = this.price;
        this.EditPost.size = this.size;
        this.EditPost.hasGarage = this.garage;
        this.EditPost.bedrooms = this.bedrooms;
        this.EditPost.bathrooms = this.bathrooms;
        this.EditPost.constructionYear = this.constructionYear;
        this.EditPost.description = this.description;
    },

    watch: {
        house() {// Update the data of the post that is being edited
            this.EditPost.streetName = this.street;
            this.EditPost.numberAddition = isNaN(this.additionalInfo)
                ? this.additionalInfo
                : "";
            this.EditPost.houseNumber = this.numbers;
            this.EditPost.zip = this.zip;
            this.EditPost.city = this.city;
            this.EditPost.price = this.price;
            this.EditPost.size = this.size;
            this.EditPost.hasGarage = this.garage;
            this.EditPost.bedrooms = this.bedrooms;
            this.EditPost.bathrooms = this.bathrooms;
            this.EditPost.constructionYear = this.constructionYear;
            this.EditPost.description = this.description;
        },
    },
};
</script>
<template>
    <div class="bg" v-if="house">
        <div class="BackHome">
            <img @click="goBack" src="@/assets/dtt/back.png" alt="back" />
            <p class="PBack">Back to overview</p>
        </div>
        <div class="MobBack">
            <img @click="goBack" src="@/assets/dtt/back.png" alt="back" />
            <h1>Edit listing</h1>
        </div>
        <div class="post-form">
            <h1>Edit listing</h1>
            <form @submit.prevent="handleSubmit" ref="form">
                <div class="one">
                    <label for="streetName">Title of listing*</label>
                    <input type="text" v-model="EditPost.streetName" pattern="^[a-zA-Z\s]+$"
                        placeholder="Enter the street name" title="Has to be a letter and leave no spaces"
                        :class="{ error: !EditPost.streetName && showError }" />
                </div>
                <div class="two">
                    <div class="first">
                        <label for="houseNumber">House number*</label>
                        <input type="number" v-model="EditPost.houseNumber" placeholder="Enter the house number"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                            title="Has to be a number and leave no spaces"
                            :class="{ error: !EditPost.houseNumber && showError }" />
                    </div>
                    <div class="second">
                        <label for="numberAddition">Number addition*</label>
                        <input type="text" v-model="EditPost.numberAddition" placeholder="e.g.A" />
                    </div>
                </div>
                <div class="one">
                    <label for="zip">Postal code*</label>
                    <input type="text" placeholder="e.g. 1000 AA" v-model="EditPost.zip" pattern="[0-9]{4}\s?[a-zA-Z]{2}"
                        title="Has to be atleast 4 digits a space and 2 letters and leave no spaces "
                        :class="{ error: !EditPost.zip && showError }" />
                </div>
                <div class="one">
                    <label for="city">City*</label>
                    <input type="text" placeholder="e.g. Utrecht" v-model="EditPost.city" pattern="[a-zA-Z]+"
                        title="Has to be a letter and leave no spaces" :class="{ error: !EditPost.city && showError }" />
                </div>
                <div class="image">
                    <label>Upload picture (PNG or JPG)</label>
                    <img src="@/assets/dtt/clear-white.png" class="clearImage" alt="clear" v-if="house.image"
                        @click="handleClear" />
                    <img class="HouseImg" v-if="house.image" :src="house.image" />
                    <div class="img" v-else>
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
                    <div v-if="!house.image && !url">
                        <p>Please upload a picture</p>
                    </div>
                </div>
                <div class="one">
                    <label for="price">Price*</label>
                    <input type="number" placeholder="e.g. €150.000 " v-model="EditPost.price"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        title="Has to be a number and leave no spaces" :class="{ error: !EditPost.price && showError }" />
                </div>
                <div class="two">
                    <div class="first" id="een">
                        <label for="size">Size*</label>
                        <input type="number" placeholder="e.g. 60m2" v-model="EditPost.size"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                            title="Has to be a number and leave no spaces"
                            :class="{ error: !EditPost.size && showError }" />
                    </div>
                    <div class="second" id="twee">
                        <label for="hasGarage">Has garage*</label>
                        <select v-model="EditPost.hasGarage" :class="{ error: !EditPost.hasGarage && showError }">
                            <option value="" disabled selected>Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
                <div class="two">
                    <div class="first">
                        <label for="bedrooms">Bedrooms*</label>
                        <input type="number" placeholder="Enter amount" v-model="EditPost.bedrooms"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                            title="Has to be a number and leave no spaces"
                            :class="{ error: !EditPost.bedrooms && showError }" />
                    </div>
                    <div class="sec">
                        <label for="bathrooms">Bathrooms*</label>
                        <input type="number" placeholder="Enter amount" v-model="EditPost.bathrooms"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                            title="Has to be a number and leave no spaces"
                            :class="{ error: !EditPost.bathrooms && showError }" />
                    </div>
                </div>
                <div class="one">
                    <label for="constructionYear">Construction year*</label>
                    <input type="number" placeholder="e.g. 1980" v-model="EditPost.constructionYear"
                        pattern="(19[4-9]\d|20[0-2]\d)"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        title="Has to be 4 digits and above 1940"
                        :class="{ error: !EditPost.constructionYear && showError }" />
                </div>
                <div class="one">
                    <label for="description">Description*</label>
                    <textarea placeholder="Write a description" v-model="EditPost.description"
                        :class="{ error: !EditPost.description && showError }"></textarea>
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
.error {
    outline: 2px solid var(--primary);
}

input.error::placeholder {
    color: red !important;
}

.notActive {
    background-color: #da8e83;
}

.error-message {
    color: var(--primary);
    font-size: 12px;
    margin-bottom: 10px;
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

.image {
    display: flex;
    flex-direction: column;
}

.HouseImg {
    max-width: 105px;
    min-height: 105px;
}

.img .preview {
    max-width: 105px;
    min-height: 105px;
}

.clear {
    position: absolute !important;
    max-width: 30px !important;
    min-height: 30px !important;
    margin-left: -18px;
    margin-top: -5px;
}

.clearImage {
    position: absolute !important;
    max-width: 30px !important;
    min-height: 30px !important;
    margin-left: 90px;
    margin-top: 15px;
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

input[type="text"]::placeholder,
input[type="number"]::placeholder {
    color: var(--tertiary2);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
}

input[type="text"]:focus,
input[type="number"]:focus {
    outline: none;
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

    .two input[type="text"] {
        max-width: 130px;
    }

    .two input[type="text"],
    .two input[type="number"] {
        width: 130px;
    }



    button {
        width: 100%;
    }

    #twee select {
        min-width: 155px;
    }

    .post-form {
        width: 330px;
    }
}
</style>

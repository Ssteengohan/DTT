<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const url = ref(null);

        function onFileChange(e) {
            const file = e.target.files[0];
            url.value = URL.createObjectURL(file);
        }
        function revokeUrl(e) {
            URL.revokeObjectURL(url.value);
            url.value = null;
            e.target.previousSibling.value = null;
        }

        const hideLabel = computed(() => !url.value);
        const showClear = computed(() => !!url.value);

        return {
            url,
            hideLabel,
            showClear,
            onFileChange,
            revokeUrl
        }
    }
}
</script>

<template>
    <main>
        <div class="bg">
            <div class="Post">
                <div class="BackHome">
                    <router-link to="/">
                        <img src="@/assets/dtt/back.png" alt="back">
                        <p class="PBack">Back to overview</p>
                    </router-link>
                    <h1>Create new listing</h1>
                </div>
                <div class="PostInput">
                    <p>Street name*</p>
                    <input type="text" placeholder="Enter the street name" class="Street">
                    <div class="NextEachOther">
                        <div class="House">
                            <p>House number*</p>
                            <input type="text" placeholder="Enter house number" class="HouseNumber">
                        </div>
                        <div class="Addition">
                            <p>Addition</p>
                            <input type="text" placeholder="e.g. A" class="AdditionNumber">
                        </div>
                    </div>
                    <p>Postal code*</p>
                    <input type="text" placeholder="e.g. 1000 AA" class="postal">
                    <p>City*</p>
                    <input type="text" placeholder="e.g. Utrecht" class="City">
                    <h4>Upload picture (PNG or JPG)*</h4>
                    <div class="upload" v-if="hideLabel">
                        <label class="Picture">
                            <input type="file" @change="onFileChange" />
                            <img class="plus" src="@/assets/dtt/plus.png" alt="plus">
                        </label>
                    </div>
                    <div class="preview">
                        <img v-if="url" :src="url" />
                        <img src="@/assets/dtt/clear-white.png" class="clear" alt="clear" v-if="showClear"
                            @click="revokeUrl">
                    </div>
                    <p>Price*</p>
                    <input type="text" placeholder="e.g. €150.000" class="Price">
                    <div class="SizeAndGarage">
                        <div class="Size">
                            <p>Size*</p>
                            <input type="text" placeholder="e.g. 60m2" class="SizeNumber">
                        </div>
                        <div class="Garage">
                            <p>Garage</p>
                            <input type="text" placeholder="e.g. 1" class="GarageNumber">
                        </div>
                    </div>
                    <div class="BedAndBath">
                        <div class="Bedrooms">
                            <p>Bedrooms*</p>
                            <input type="text" placeholder="Enter amount" class="SizeNumber">
                        </div>
                        <div class="Bathrooms">
                            <p>Bathrooms</p>
                            <input type="text" placeholder="Enter amount" class="GarageNumber">
                        </div>
                    </div>
                    <p>Construction date*</p>
                    <input type="text" placeholder="e.g. 1990" class="ConstructionDate">
                    <div class="Description">
                        <p>Description</p>
                        <textarea name="description" cols="46" rows="5" placeholder="Enter description"></textarea>
                    </div>
                    <div class="button">
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    max-width: 100%;
}

.bg {
    background-image: url("@/assets/dtt/background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;

}

.Post {
    margin-left: 15%;
    margin-top: 40px;
    width: 25%;
}


a {
    display: flex;
    text-decoration: none;
    font-family: var(--font-family);
    font-size: 14px;
    font-weight: 700;
    color: var(--text1);
    align-items: center;
}

a img {
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

input[type="text"] {
    cursor: pointer;
    width: 350px;
    height: 40px;
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

.PostInput p {
    font-family: var(--font-family);
    font-size: 12px;
    font-weight: 400;
}

h4 {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
}

.NextEachOther {
    display: flex;
    width: 100%;

}

.House {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
}


.Addition {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.NextEachOther input[type="text"] {
    width: 144px;
}
.SizeAndGarage {
    display: flex;
    width: 100%;
}
.Size {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
}
.Garage {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}
.SizeAndGarage input[type="text"] {
    width: 147px;
}

.BedAndBath {
    display: flex;
    width: 100%;
}
.Bedrooms {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
}
.Bathrooms {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}

.BedAndBath input[type="text"] {
    width: 147px;
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

.button {
    display: flex;
    justify-content: flex-end;
}

button {
    cursor: pointer;
    width: 150px;
    height: 40px;
    border: 1px;
    border-radius: 10px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 14px;
    color: var(--background2);
    background-color: var(--primary);
    margin-top: 20px;
    margin-bottom: 20px;
}

.upload input[type="file"] {
    display: none;
}

.upload {
    width: 120px;
    height: 120px;
    border-style: dashed;
    border-width: 3px;
    border-color: var(--tertiary2);
}

label img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    height: 45%;
    width: 45%;
}

.preview img {
    width: 120px;
    height: 120px;
}

.clear {
    position: absolute !important;
    width: 30px !important;
    height: 30px !important;
    margin-left: -18px;
    margin-top: -5px;
}
</style>
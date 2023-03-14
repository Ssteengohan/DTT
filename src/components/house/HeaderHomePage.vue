<script>
import { ref, computed } from 'vue'
import { useHouseStore } from '@/stores/api.js';

//Looking if the search input is empty or not if it is empty the clear icon will not show up 
const searchText = ref('')
const showClearIcon = computed(() => searchText.value !== '')

//Clearing the search input
function clearInput() {
    searchText.value = ''
}

//Exporting the search text so it can be used outside the HeaderHomePage.vue
export { searchText }

export default {
    setup() {
        //Sorting the houses by price
        const activeButton = ref('price')
        function sortPrice() {
            const store = useHouseStore();
            activeButton.value = 'price';
            return store.SorthousesbyPrice();
        }

        //Sorting the houses by size
        function sortSize() {
            const store = useHouseStore();
            activeButton.value = 'size';
            return store.SorthousesbySize();

        }

        const isSizeActive = computed(() => activeButton.value === 'size')

        return {//Returning the functions and variables so they can be used in the HeaderHomePage.vue
            sortSize,
            sortPrice,
            searchText,
            showClearIcon,
            clearInput,
            activeButton,
            isSizeActive,
        }
    }
}
</script>


        
<template>
    <main>
        <div class="mainpage">
            <div class="HouseCreate">
                <div class="header">
                    <h2 class="titel">Houses</h2>
                </div>
                <div class="buttonCreate">
                    <router-link :to="{ name: 'create' }">
                        <img src="@/assets/dtt/plus.png" alt="plus" class="plus">
                        <button class="create"><img src="@/assets/dtt/plus-white.png" alt="pluswhite"
                                class="pluswhite">CREATE NEW</button>
                    </router-link>
                </div>
            </div>
            <div class="homepageButton">
                <div class="input">
                    <img src="@/assets/dtt/search.png" alt="search-icon" class="SearchIcon" />
                    <img src="@/assets/dtt/clear.png" alt="" class="clear" v-if="showClearIcon" @click="clearInput" />
                    <input type="text" name="search" placeholder="Search for a house" v-model="searchText"
                        @input="showClearIcon = true" />
                </div>
                <div class="filter">
                    <button class="price" :class="{ active: activeButton === 'price', red: isSizeActive }"
                        @click="sortPrice()">Price</button>
                    <button class="size" :class="{ active: activeButton === 'size' }" @click="sortSize()">Size</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.filter {
    display: flex;
}

.price.red {
    background-color: var(--tertiary2);
}

.size.active {
    background-color: var(--primary);
}


.size {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--tertiary2);

}

.price {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--primary);

}

.size,
.price {
    width: 130px;
    height: 5.5vh;
    color: var(--background);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;
    border: none;
}

.mainpage {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-top: 40px;
    max-width: 70%;

}

.HouseCreate {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-family);
    color: var(--primary-text);
    font-weight: 700;
    max-width: 100%;
    font-size: 25px;

}


.buttonCreate {
    margin-top: 40px;

}

.create {
    cursor: pointer;
    width: 180px;
    min-height: 40px;
    border-radius: 10px;
    background-color: var(--primary);
    color: var(--background);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;
    border: none;

}

.plus {
    display: none;
}

.create img {
    cursor: pointer;
    max-width: 15px;
    margin-right: 10px;
}

.homepageButton {
    display: flex;
    justify-content: space-between;
}

.input {
    position: relative;
}

input[type="text"] {
    cursor: pointer;
    width: 24vw;
    height: 35px;
    border: 1px;
    border-radius: 10px;
    font-family: var(--font-family-alt);
    font-weight: 400;
    font-size: 15px;
    color: var(--secondary-text);
    background-color: var(--tertiary);
    padding-left: 40px;
}

input[type="text"]::placeholder {
    color: var(--tertiary2);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 15px;
}

input[type="text"]:focus {
    outline: none;
}

.SearchIcon {
    position: absolute;
    top: 20%;
    left: 10px;
    width: 20px;
}

.clear {
    position: absolute;
    width: 20px;
    top: 20%;
    margin-left: 25vw;
}



@media (max-width: 750px) {
    .mainpage {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 90%;
    }

    .header {
        margin: 0 auto;
    }

    .create,
    .pluswhite {
        display: none;
    }

    .plus {
        cursor: pointer;
        display: flex;
        margin-top: 8px;
        width: 20px;
        height: 20px;
        margin-right: 0px;
    }

    .homepageButton {
        display: flex;
        flex-direction: column;

    }

    .input {
        padding-bottom: 20px;
    }

    input[type="text"] {
        width: 92.5%;
    }

    .clear {
        margin-left: 93%;
        width: 18px;
        top: 15%;
    }

    .filter {
        margin-bottom: 15px;
    }

    .price,
    .size {
        width: 50%;
        max-height: 40px;
    }
}

@media screen and (max-width: 420px) {
    input[type="text"] {
        width: 88%;
    }
}
</style>  

<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const searchText = ref('')

        const showClearIcon = computed(() => searchText.value !== '')

        function clearInput() {
            searchText.value = ''
        }

        return {
            searchText,
            showClearIcon,
            clearInput
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
                    <img src="@/assets/dtt/plus.png" alt="plus" class="plus">
                    <button class="create"><img src="@/assets/dtt/plus-white.png" alt="pluswhite"
                        class="pluswhite">CREATE NEW</button>
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
                    <button class="price">Price</button>
                    <button class="size">Size</button>
                </div>
            </div>
        </div>
    </main>
</template>
  
<style>
.mainpage {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 40px;
    width: 70%;

}

.HouseCreate {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-family);
    color: var(--primary-text);
    font-weight: 700;
    width: 100%;
    font-size: 25px;
    
}


.buttonCreate {
    margin-top: 40px;
   
}

.create {
    cursor: pointer;
    width: 180px;
    height: 40px;
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
    width: 15px;
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


.filter {
    display: flex;
}

.size {
    background-color: var(--tertiary2);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 130px;
    height: 5.5vh;
    color: var(--background);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;

    border: none;
}

.price {
    background-color: var(--primary);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 130px;
    height: 5.5vh;
    color: var(--background);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;

    border: none;
} 

@media (max-width: 750px) {
    .mainpage {
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .header {
        margin-left: auto;
        margin-right: auto;
        display: table;
    }
    .create,
    .pluswhite {
        display: none;
    }

    .plus {
        cursor: pointer;
        display: flex;
        margin-left: auto;
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
    .homepageButton {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

    }
    .input {
      padding-bottom: 20px;
    }
    input[type="text"] {
        width: 85%;
    }

    .clear {
        margin-left: 88%;
        width: 18px;
    }



    .price,
    .size {
        width: 47%;
        height: 40px;
    }
}
</style>  

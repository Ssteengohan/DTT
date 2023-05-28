<script>
import { useHouseStore } from "@/stores/api.js";
import { searchText } from "@/components/house/HeaderHomePage.vue";
import { computed, ref } from "vue";
import DeletePopup from "@/components/house/DeletePopup.vue";


export default {
  setup() {
    // Get the store
    const store = useHouseStore();
    // Get the houses
    const getHouses = () => {
      store.getHouses();
    };

    const house = ref({}); // initialize house to an empty object

    // Delete popup
    const showDeletePopup = ref(false);
    const onCancelDelete = () => {
      showDeletePopup.value = false;
      house.value = {};
    };

    // Delete the house
    const onConfirmDelete = () => {
      store.deleteHouse(house.value.id);
      showDeletePopup.value = false;
      house.value = {}; // reset house to an empty object
      getHouses();
    };

    // Filtering houses
    const filteredHouses = computed(() => {
      return store.houses.filter((house) => {
        const street = house.location.street.toLowerCase();
        const city = house.location.city.toLowerCase();
        const search = searchText.value.toLowerCase();
        const description = house.description.toLowerCase();
        const price = house.price;
        const size = house.size;
        const bedrooms = house.rooms.bedrooms;
        const bathrooms = house.rooms.bathrooms;
        const construction = house.constructionYear;
        return street.includes(search) || city.includes(search) || description.includes(search) || price.toString().includes(search)
          || size.toString().includes(search) || bedrooms.toString().includes(search) || bathrooms.toString().includes(search) || construction.toString().includes(search);
      });
    });

    // If no houses are found after filtering show message to user
    const showEmptyHouse = computed(() => {
      return filteredHouses.value.length === 0 && searchText.value !== "";
    });

    // Method to sort houses by price
    const getPrice = () => {
      store.SorthousesbyPrice();
    };

    // Method to show delete popup
    const onDeleteClick = (houseId) => {
      house.value = { id: houseId };
      showDeletePopup.value = true;
    };

    return {// Return the variables and methods that you want to use in the template
      store,
      getHouses,
      showDeletePopup,
      onCancelDelete,
      onConfirmDelete,
      house,
      filteredHouses,
      showEmptyHouse,
      searchText,
      getPrice,
      onDeleteClick,
    };
  },

  created() {// Call the getHouses method when the component is created
    this.getHouses();
  },

  // Import the DeletePopup component here
  components: {
    DeletePopup, 
  },
};
</script>

<template>
  <main>
    <h1 v-if="searchText && filteredHouses.length">
      <span v-if="filteredHouses.length">{{ filteredHouses.length }}</span>
      results found
    </h1>
    <div class="MainPost" v-for="house in filteredHouses" :key="house.id">
      <router-link :to="{ name: 'detail', params: { id: house.id } }" style="text-decoration: none; width: 100%">
        <div class="PostInfo">
          <div class="postImg">
            <img :src="house.image" alt="" class="houseImg" />
          </div>
          <div class="PostDetail">
            <h3 class="street">{{ house.location.street }} {{ house.location.houseNumber }}</h3>
            <p class="housePrice">€ {{ house.price }}</p>
            <p class="ZipCode">
              {{ house.location.zip }} {{ house.location.city }}
            </p>
            <div class="info">
              <img class="bed" src="@/assets/dtt/bed.png" alt="bed-logo" />
              <p>{{ house.rooms.bedrooms }}</p>
              <img src="@/assets/dtt/bath.png" alt="bath-logo" />
              <p>{{ house.rooms.bathrooms }}</p>
              <img src="@/assets/dtt/size.png" alt="size-logo" />
              <p>{{ house.size }}</p>
            </div>
          </div>
          <div class="postEdit" v-if="house.madeByMe">
            <router-link :to="{ name: 'edit', params: { id: house.id } }">
              <img src="@/assets/dtt/edit-red.png" alt="" class="edit" />
            </router-link>
            <div @click.prevent="onDeleteClick(house.id)">
              <img src="@/assets/dtt/delete.png" alt="" style="width: 20px; height: 20px" class="delete" />
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div id="img" v-if="showEmptyHouse">
      <img src="@/assets/dtt/empty-house.png" alt="" />
      <p>No result found.</p>
      <p>Please try another keyword.</p>
    </div>
    <DeletePopup v-if="showDeletePopup" @cancel="onCancelDelete" @confirm="onConfirmDelete" />
  </main>
</template>

<style scoped>
.MainPost {
  display: flex;
  cursor: pointer;
  background-color: var(--background2);
  max-width: 70%;
  margin-top: 20px;
  margin-left: 15%;
  border-radius: 10px;
}

h1 {
  padding-top: 3px;
  margin-left: 15%;
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
}

.PostInfo {
  display: flex;
  align-items: center;
  padding: 10px;
}

.postImg img {
  border-radius: 10px;
  min-height: 140px;
  max-width: 140px;
  object-fit: cover;
  object-position: left;
}

.PostDetail {
  flex: 1;
  margin-left: 20px;
}

.street {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 18px;
  margin-top: 0px;
}

.housePrice,
.ZipCode {
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 15px;
}

.ZipCode {
  color: var(--tertiary2);
}

.info {
  display: flex;
  height: 10px;
}

.info img {
  padding-right: 10px;
}

.info p {
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 10px;
  margin-top: 1px;
  margin-right: 15px;
}

.postEdit {
  display: flex;
  height: 20px;
  max-width: 8%;
  margin-bottom: 80px;
}

.edit {
  padding-right: 5px;
  max-height: 20px;
}

#img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
}

#img p {
  margin-top: 26px;
}

#img img {
  max-width: 400px;
  margin-top: 40px;
}

#img p:nth-child(3) {
  margin-top: -18px;
}

@media screen and (max-width: 750px) {
  .MainPost {
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .MainPost:last-child {
    border-bottom-width: 60px;
    border-bottom-style: solid;
    border-bottom-color: var(--background);
  }

  .postImg img {
    height: 120px;
    width: 120px;
  }

  .street {
    font-size: 15px;
    white-space: nowrap;
  }

  .housePrice,
  .ZipCode {
    font-size: 12px;
  }

  .PostDetail {
    margin-left: 10px;
  }

  .info p {
    font-size: 10px;
    height: 100%;
  }

  .info img {
    height: 10px;
  }

  .info {
    margin-left: 0;
    white-space: nowrap;
  }

  .postEdit {
    max-width: 10%;
    height: 15px;
  }

  .delete,
  .edit {
    height: 15px !important;
    width: 15px !important;
  }

  #img {
    margin: 0 auto;
    width: 90%;

  }

  #img p {
    font-size: 12px;
  }

  #img img {
    width: 90%;
  }

  h1 {
    margin-left: 6%;
  }
}

@media screen and (max-width: 350px) {
  .postEdit {
    margin-left: -20px;
  }
}
</style>

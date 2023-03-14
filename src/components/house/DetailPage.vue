<script>
import { useHouseStore } from "@/stores/api.js";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import DeletePopup from "@/components/house/DeletePopup.vue";

export default {
  components: {
    DeletePopup,
  },

  setup() {
    // Get the id from the route
    const router = useRoute();
    const id = computed(() => router.params.id);

    // Get the store
    const store = useHouseStore();
    // Get the houses
    const getHouses = () => {
      store.getHouses();
    };

    // Delete house
    const showDeletePopup = ref(false);
    const houseToDelete = ref({});
    const deleteHouse = (id) => {
      store.deleteHouse(id);
      getHouses();
    };
    // Delete house popup
    const onCancelDelete = () => {
      showDeletePopup.value = false;
      houseToDelete.value = {};
    };
    const onConfirmDelete = () => {
      deleteHouse(houseToDelete.value.id);
      onCancelDelete();
    };

    // Get the house
    const house = computed(() => {
      return store.houses.find((house) => house.id.toString() === id.value.toString());
    });
    // Get the recommended houses
    const recommendedHouses = computed(() => {
      const currentIndex = store.houses.findIndex((h) => h.id === house.value.id);
      const nextHouses = store.houses.slice(currentIndex + 1).concat(store.houses.slice(0, currentIndex + 1));
      return nextHouses.slice(0, 3);
    });

    // Method to show delete popup
    const onDeleteClick = (houseId) => {
      houseToDelete.value = { id: houseId };
      showDeletePopup.value = true;
    };


    return {// return all the variables and methods that you want to use in the template
      showDeletePopup,
      houseToDelete,
      onCancelDelete,
      onConfirmDelete,
      deleteHouse,
      store,
      getHouses,
      house,
      recommendedHouses,
      onDeleteClick,
    };
  },


  created() {// When the component is created, get the houses
    this.getHouses();
  },
};
</script>



<template>
  <main>
    <div class="MainDetail" v-if="house">
      <div class="backgroundimg">
        <img :src="house.image" alt="house-img" class="BackgroundImg" />
        <div class="mobilEdit" v-if="house.madeByMe">
          <div class="Goback-mob">
            <router-link style="text-decoration: none; color: inherit" to="/">
              <img src="@/assets/dtt/back-white.png" alt="back" id="back-white" class="back" />
            </router-link>
          </div>
          <div class="EditAndDelete">
            <router-link :to="{ name: 'edit', params: { id: house.id } }" style="text-decoration: none">
              <img src="@/assets/dtt/edit-white.png" alt="" class="edit-white" /></router-link>
            <div>
              <img src="@/assets/dtt/delete-white.png" alt="" class="delete-white"
                @click.prevent="onDeleteClick(house.id)" />
            </div>
          </div>
        </div>
      </div>
      <div class="Goback">
        <router-link
          style="text-decoration: none; display: flex; color: inherit; padding-bottom: 10px; flex-direction: row;" to="/">
          <img src="@/assets/dtt/back.png" alt="back" id="back" class="back" />
          <img src="@/assets/dtt/back-white.png" alt="back" id="back-white" class="back" />
          <h3 class="BackTo">Back to overview</h3>
        </router-link>
      </div>
      <div class="DetailContainer">
        <div class="Detail">
          <div class="DetailImg">
            <img :src="house.image" alt="house-img" class="Detailhouse" />
          </div>
          <div class="DetailInfo">
            <div class="DetailEdit">
              <h3 class="DetailStreet">{{ house.location.street }} {{ }}</h3>
              <router-link :to="{ name: 'edit', params: { id: house.id } }" style="text-decoration: none"
                v-if="house.madeByMe"><img src="@/assets/dtt/edit-red.png" alt="" class="edit-detail" /></router-link>
              <div v-if="house.madeByMe">
                <img src="@/assets/dtt/delete.png" alt="" class="delete-detail"
                  @click.prevent="onDeleteClick(house.id)" />
              </div>
            </div>
            <p class="DetailZipcode">
              <img src="@/assets/dtt/location.png" alt="house-logo" class="DetailLocation" />{{ house.location.zip }} {{
                house.location.city }}
            </p>
            <div class="DetailInfos">
              <img src="@/assets/dtt/price.png" alt="" />
              <p>{{ house.price }}</p>
              <img src="@/assets/dtt/size.png" alt="" />
              <p>{{ house.size }}</p>
              <img src="@/assets/dtt/construction.png" alt="" />
              <p>Built in {{ house.constructionYear }}</p>
            </div>
            <div class="DetailExtraInfos">
              <img src="@/assets/dtt/bed.png" alt="" />
              <p>{{ house.rooms.bedrooms }}</p>
              <img src="@/assets/dtt/bath.png" alt="" />
              <p>{{ house.rooms.bathrooms }}</p>
              <img src="@/assets/dtt/garage.png" alt="" />
              <p>{{ house.hasGarage ? "Yes" : "No" }}</p>
            </div>
            <div class="DetailDescription">
              <p class="DetailDescriptionText">{{ house.description }}</p>
            </div>
          </div>
        </div>
        <div class="Recommended">
          <h3 class="RecommendedTitel">Recommended for you</h3>
          <div class="RecommendedContainer" v-for="house in recommendedHouses" :key="house.id">
            <router-link :to="{ name: 'detail', params: { id: house.id } }" style="text-decoration: none">
              <div class="RecommendedInfo">
                <div class="RecommendedImg">
                  <img :src="house.image" alt="house-img" class="RecommendedHouse" />
                </div>
                <div class="RecommendeDetail">
                  <h3 class="RecommendedStreet">{{ house.location.street }}</h3>
                  <p class="RecommendedPrice">{{ house.price }}</p>
                  <p class="RecommendedZipcode">
                    {{ house.location.zip }} {{ house.location.city }}
                  </p>
                  <div class="RecommendedDetail">
                    <img src="@/assets/dtt/bed.png" alt="" />
                    <p>{{ house.rooms.bedrooms }}</p>
                    <img src="@/assets/dtt/bath.png" alt="" />
                    <p>{{ house.rooms.bathrooms }}</p>
                    <img src="@/assets/dtt/size.png" alt="" />
                    <p>{{ house.size }}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <DeletePopup v-if="showDeletePopup" @cancel="onCancelDelete" @confirm="onConfirmDelete" />
  </main>
</template>
<style scoped>
.MainDetail {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-top: 40px;
  max-width: 70%;
  height: 800px;
}

.back {
  max-width: 20px;
  height: 20px;
}

#back-white {
  display: none;
}

.BackTo {
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 400;
  color: var(--text1);
  margin-left: 10px;
  margin-top: 1px;
}

.mobilEdit img {
  display: none;
}

.DetailContainer {
  display: flex;
  justify-content: space-between;
}

.Detail {
  background: var(--background2);
  max-width: 650px;
  display: flex;
  flex-direction: column;
}

.Detailhouse {
  max-width: 100%;
}

.DetailInfo {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-alt);
  color: var(--primary-text);
  font-weight: 400;
  font-size: 15px;
  max-width: 90%;
}

.DetailStreet {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 25px;
  white-space: nowrap;
}

.DetailLocation {
  max-width: 12px;
  min-height: 15px;
  margin-right: 10px;
}

.DetailZipcode {
  margin-top: 0px;
}

.DetailInfos {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.DetailInfos img {
  max-width: 15px;
  min-height: 15px;
}

.DetailInfos p {
  padding-right: 10px;
  padding-left: 10px;
  font-size: 13px;
  font-family: var(--font-family);
}

.DetailExtraInfos {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.DetailExtraInfos img {
  max-width: 15px;
  min-height: 15px;
}

.DetailExtraInfos p {
  padding-right: 25px;
  padding-left: 8px;
  font-size: 15px;
  font-family: var(--font-family);
}

.DetailDescription p {
  font-family: var(--font-family-alt);
  color: var(--secondary-text);
  line-height: 1.7;
}

.DetailEdit {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
}

.DetailEdit h3 {
  flex: 1;
}

.DetailEdit img {
  max-width: 20px;
  min-height: 20px;
  padding: 10px;
}

.Recommended {
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  width: 30%;
  white-space: nowrap;
  margin-left: 9%;
}

.RecommendedTitel {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-text);
}

.RecommendedContainer {
  width: 320px;
  min-height: 130px;
  display: flex;
  flex-direction: row;
  background: var(--background2);
  border-radius: 10px;
}

.RecommendedContainer:not(:first-child) {
  margin-bottom: 15px;
}

.RecommendedInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}

.RecommendedHouse {
  max-width: 100px;
  min-height: 100px;
  object-fit: cover;
  object-position: left;
  border-radius: 10px;
}

.RecommendeDetail {
  padding-left: 10px;
}

.RecommendedStreet {
  font-family: var(--font-family);
  font-size: 10px;
  font-weight: 700;
  color: var(--primary-text);
}

.RecommendedPrice {
  font-size: 10px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 400;
}

.RecommendedZipcode {
  font-size: 10px;
  font-family: var(--font-family);
  color: var(--tertiary2);
  font-weight: 400;
}

.RecommendedDetail {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.RecommendedDetail img {
  max-width: 15px;
  min-height: 15px;
}

.RecommendedDetail p {
  font-size: 10px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
}

.backgroundimg {
  display: none;
}

a.router-link-exact-active {
  color: var(--primary-text);
}

@media screen and (max-width: 750px) {
  .MainDetail {
    margin-top: 0;
    margin-left: 0%;
    max-width: 100%;
  }

  .backgroundimg {
    display: block;
    height: 300px;
  }

  .BackgroundImg {
    width: 100%;
    height: 100%;
  }

  .DetailContainer {
    max-width: 100%;
    min-height: 50%;
    margin-top: -15px;
    display: flex;
    flex-direction: column;
  }

  .Detail {
    max-width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Detailhouse {
    display: none;
  }

  .Goback-mob {
    align-items: baseline;
    position: absolute;
    top: 18px;
  }

  .Goback {
    display: none;
  }

  .edit-detail,
  .delete-detail,
  #back,
  .BackTo {
    display: none;
  }

  #back-white {
    display: block;
    max-width: 23px;
    min-height: 23px;
  }

  .EditAndDelete {
    display: flex;
    right: 8px;
    top: 18px;
    position: absolute;
  }

  .mobilEdit img {
    display: block;
    height: 22px;
    padding: 7px;
  }

  .Recommended {
    width: 90%;
    margin: 0 auto;
    height: 550px;
  }

  .RecommendedContainer {
    width: 100%;
  }

  .RecommendedContainer:last-child {
    border-bottom-width: 60px;
    border-bottom-style: solid;
    border-bottom-color: var(--background);
  }

  .DetailStreet {
    font-size: 25px;
  }

  .DetailInfo {
    font-size: 15px;
    margin: 0 auto;
    width: 90%;
  }
}
</style>

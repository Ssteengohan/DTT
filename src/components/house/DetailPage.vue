<script>
import { useHouseStore } from '@/stores/api.js';
import { useRoute } from 'vue-router';
import { showDeletePopup } from '@/stores/delete.js';

export default {
  props: {
    house: Object,
  },
  setup(props) {
    //Get id from url
    const router = useRoute();
    const id = router.params.id - 2;
    const ids = router.params.id;

    const store = useHouseStore();

    const getHouses = () => {
      store.getHouses();
    }
  
    //Get houses
    const Housez = () => {
      return store.houses;
    }

    return {
      store,
      getHouses,
      Housez,
      id,
      ids,
      showDeletePopup,
      router,
    }
  },
  methods: {  
    onDeleteClick(id) {
      showDeletePopup(id, this.handleDelete, this.router.push('/'));
      
    },
    handleDelete(id) {
      this.store.deleteHouse(id)
        .then(() => {
          this.router.push('/');
        })
        .catch((error) => {
          console.error(error);
        });
    },

  },

  mounted() {
    this.getHouses();
  },
};
</script>




<template>
  <main>
    <div class="MainDetail" v-if="Housez()[id]">
      <div class="backgroundimg" :style="{ 'background-image': `url(${Housez()[`${id}`].image})` }">
        <div class="Goback-mob">
          <router-link style="text-decoration: none; display: flex; color: inherit;" to="/">
            <img src="@/assets/dtt/back-white.png" alt="back" id="back-white" class="back">
          </router-link>
        </div>
        <div class="mobilEdit" v-if="ids > 11">
          <router-link :to="{ name: 'edit', params: { id: Housez()[`${id}`].id } }" style="text-decoration: none;"> <img src="@/assets/dtt/edit-white.png"
              alt="" class="edit-white" /></router-link>
              <div @click.prevent="showDeletePopup(Housez()[`${id}`].id)">
            <img src="@/assets/dtt/delete-white.png" alt="" class="delete-white" />
          </div>
        </div>
      </div>
      <div class="Goback">
        <router-link
          style="text-decoration: none; display: flex; color: inherit; padding-bottom: 10px; flex-direction: row;" to="/">
          <img src="@/assets/dtt/back.png" alt="back" id="back" class="back">
          <img src="@/assets/dtt/back-white.png" alt="back" id="back-white" class="back">
          <h3 class="BackTo">Back to overview</h3>
        </router-link>
      </div>
      <div class="DetailContainer">
        <div class="Detail">
          <div class="DetailImg">
            <img :src="Housez()[`${id}`].image" alt="house-img" class="Detailhouse" />
          </div>
          <div class="DetailInfo">
            <div class="DetailEdit">
              <h3 class="DetailStreet">{{ Housez()[`${id}`].location.street }}</h3>
              <router-link v-if="ids > 11" :to="{ name: 'edit', params: { id: Housez()[`${id}`].id } }" style="text-decoration: none;"><img
                  src="@/assets/dtt/edit-red.png" alt="" class="edit-detail" /></router-link>
                <div @click.prevent="showDeletePopup(Housez()[`${id}`].id)">
                  <img v-if="ids > 11" src="@/assets/dtt/delete.png" alt="" class="delete-detail" />
            </div>
            </div>
            <p class="DetailZipcode"> <img src="@/assets/dtt/location.png" alt="house-logo" class="DetailLocation">{{
              Housez()[`${id}`].location.zip }} {{ Housez()[`${id}`].location.city }}</p>
            <div class="DetailInfos">
              <img src="@/assets/dtt/price.png" alt="">
              <p>{{ Housez()[`${id}`].price }}</p>
              <img src="@/assets/dtt/size.png" alt="">
              <p>{{ Housez()[`${id}`].size }}</p>
              <img src="@/assets/dtt/construction.png" alt="">
              <p>{{ Housez()[`${id}`].constructionYear }}</p>
            </div>
            <div class="DetailExtraInfos">
              <img src="@/assets/dtt/bed.png" alt="">
              <p>{{ Housez()[`${id}`].rooms.bedrooms }}</p>
              <img src="@/assets/dtt/bath.png" alt="">
              <p>{{ Housez()[`${id}`].rooms.bathrooms }}</p>
              <img src="@/assets/dtt/garage.png" alt="">
              <p>{{ Housez()[`${id}`].hasGarage }}</p>
            </div>
            <div class="DetailDescription">
              <p class="DetailDescriptionText"> {{ Housez()[`${id}`].description }} </p>
            </div>
          </div>
        </div>
        <div class="Recommended">
          <h3 class="RecommendedTitel">Recommended for you</h3>
          <div class="RecommendedContainer" v-for="house in Housez().slice(0, 3)" :key="house.id">
            <router-link :to="`/home/detail/${house.id}`" style="text-decoration: none;">
              <div class="RecommendedInfo">
                <div class="RecommendedImg">
                  <img :src="house.image" alt="house-img" class="RecommendedHouse" />
                </div>
                <div class="RecommendeDetail">
                  <h3 class="RecommendedStreet">{{ house.location.street }}</h3>
                  <p class="RecommendedPrice">{{ house.price }}</p>
                  <p class="RecommendedZipcode">{{ house.location.zip }} {{ house.location.city }}</p>
                  <div class="RecommendedDetail">
                    <img src="@/assets/dtt/bed.png" alt="">
                    <p>{{ house.rooms.bedrooms }}</p>
                    <img src="@/assets/dtt/bath.png" alt="">
                    <p>{{ house.rooms.bathrooms }}</p>
                    <img src="@/assets/dtt/size.png" alt="">
                    <p>{{ house.size }}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.MainDetail {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-top: 40px;
  max-width: 70%;
  min-height: 850px;
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
  max-width: 250px;
  white-space: nowrap;
}

.RecommendedTitel {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-text);
}

.RecommendedContainer {
  max-width: 320px;
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
  font-size: 12px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 400;
}

.RecommendedZipcode {
  font-size: 12px;
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
    display: flex;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 230px;
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
    max-width: 15px;
    min-height: 15px;
    margin-left: 20px;
    margin-top: 50px;
  }

  .mobilEdit {
    display: flex;
    margin-left: 20px;
    margin-top: 40px;
  }

  .mobilEdit img {
    display: block;
    height: 20px;
    padding: 7px;
  }

  .Recommended {
    max-width: 80%;
    margin: auto;
  }

  .DetailStreet {
    font-size: 25px;
  }

  .DetailInfo {
    font-size: 15px;
  }
}</style>
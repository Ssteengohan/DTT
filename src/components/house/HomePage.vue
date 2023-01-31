<script>
import { useHousesStore } from "@/stores/data-fetching.js";

export default {
  setup() {
    const { houses, fetchHouses } = useHousesStore()

    return {
      houses,
      fetchHouses
    }
  },
  created() {
    this.fetchHouses()
  }
}
</script>

<template>
  <main>
    <div class="MainPost" v-for="house in houses" :key="house.id">
      <p class="hidden">{{ house.id  }}</p>
      <router-link :to="`/home/detail/${ house.id }`" style="text-decoration: none; width: 100%">
        <div class="PostInfo">
          <div class="postImg">
            <img  :src="house.image" alt="" class="houseImg" />
          </div>
          <div class="PostDetail">
            <h3 class="street">{{ house.location.street }}</h3>
            <p class="housePrice">€ {{ house.price }}</p>
            <p class="ZipCode">{{ house.location.zip }} {{ house.location.city }}</p>
            <div class="info">
              <img class="bed" src="@/assets/dtt/bed.png" alt="bed-logo" />
              <p>{{ house.rooms.bedrooms }}</p>
              <img src="@/assets/dtt/bath.png" alt="bath-logo" />
              <p>{{ house.rooms.bathrooms }}</p>
              <img src="@/assets/dtt/size.png" alt="size-logo" />
              <p>{{ house.size }}</p>
            </div>
          </div>
          <div class="postEdit">
            <router-link :to="`/home/edit/${ house.id }`" style="text-decoration: none;" > <img src="@/assets/dtt/edit-red.png" alt="" class="edit" /></router-link>  
            <img src="@/assets/dtt/delete.png" alt="" class="delete" />
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.hidden {
  display: none;
}
.MainPost {
  display: flex;
  cursor: pointer;
  background-color: var(--background2);
  width: 70%;
  margin-top: 20px;
  margin-left: 15%;
  border-radius: 10px;
}

.PostInfo {
  display: flex;
  align-items: center;
  padding: 10px;
}

.postImg img {
  border-radius: 10px;
  height: 140px;
  width: 140px;
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
  padding-right: 10px;
  height: 20px; 
}

@media screen and (max-width: 750px) {
  .MainPost {
    width: 95%;
    margin-left: 0;
  }

  .postImg img {
    height: 120px;
    width: 120px;
  }

  .street {
    font-size: 15px;
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
    max-width: 20%;
    height: 15px;
  }
}
</style>
<script setup></script>

<template>
  <main>
    <div class="MainPost"   v-for="i in 10" :key="i" >
      <router-link to="/Detail" style="text-decoration: none; width: 100%;">
        <div class="PostInfo">
          <div class="postImg">
            <img src="@/assets/dtt/house.png" alt="" class="houseImg" />
          </div>
          <div class="PostDetail">
            <h3 class="street">Stokvisstraat 132</h3>
            <p class="housePrice">€ 500.000</p>
            <p class="ZipCode">1011 AA Amsterdam</p>
            <div class="info">
              <img class="bed" src="@/assets/dtt/bed.png" alt="bed-logo">
              <p>1</p>
              <img src="@/assets/dtt/bath.png" alt="bath-logo">
              <p>1</p>
              <img src="@/assets/dtt/size.png" alt="size-logo">
              <p>120 m2</p>
            </div>
          </div>
          <div class="postEdit">
            <img src="@/assets/dtt/edit-red.png" alt="" class="edit" />
            <img src="@/assets/dtt/delete.png" alt="" class="delete" />
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>
<style>
.MainPost {
  display: flex;
  cursor: pointer;
  background-color: var(--background2);
  width: 70%;

  margin-top: 20px;
  margin-left: 20%;
  border-radius: 10px;
}

.PostInfo {
  display: flex;
  align-items: center;
  padding: 10px;
}

.postImg img {
  display: flex;
  border-radius: 10px;
  height: 140px;
  width: 140px;
  object-fit: cover;
  object-position: left;
}

.PostDetail {
  flex: 1;
  margin-left: 20px;
  width: fit-content;
}

.street {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 18px;
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
  .housePrice, .ZipCode {
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
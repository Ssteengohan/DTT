<script setup></script>

<template>
  <main>
    <router-link to="/house/DetailPage"  style="text-decoration: none;">
      <div class="MainPost" v-for="i in 10" :key="i">
        <div class="postInfo">
          <img src="@/assets/dtt/house.png" alt="" class="housEdit" />
          <div class="HouseInfo">
            <h3 class="street" >Stokvisstraat 132</h3>
            <p class="housePrice">€ 500.000</p>
            <p class="ZipCode">1011 AA Amsterdam</p>
            <br>
            <div class="PostImg">
              <img class="bed" src="@/assets/dtt/bed.png" alt="bed-logo">
              <p>1</p>
              <img src="@/assets/dtt/bath.png" alt="bath-logo">
              <p>1</p>
              <img src="@/assets/dtt/size.png" alt="size-logo">
              <p>120 m2</p>
              <div class="postEdit">
                <img src="@/assets/dtt/edit-red.png" alt="" class="edit" />
                <img src="@/assets/dtt/delete.png" alt="" class="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </main>
</template>
<style>

.postInfo {
  display: flex;
  cursor: pointer;
  background-color: var(--background2);
  width: 57%;
  height: 180px;
  margin-top: 20px;
  margin-left: 20%;
  border-radius: 10px;
}

.housEdit {
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 10px;
  width: 150px;
  object-fit: cover;
  object-position: left;
  height: 150px;

}

.street {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 10px;
  padding-right: 200px;
}

.housePrice,
.ZipCode {
  padding-bottom: 10px;
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 15px;
}

.ZipCode {

  color: var(--tertiary2);
}
.HouseInfo {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.PostImg {
  margin-top: 10px;
  width: 100%;
  height: 15px;
  display: flex;
  flex-direction: row;
}
.PostImg img {
  padding-right: 5px;
}
.PostImg p {
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 10px;
  margin-right: 10%;
}

.postEdit {
  margin-top: -200px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.delete, .edit {
  width: 15px;
}

.delete {
  margin-left: 15px;
}

@media (max-width: 750px) {
  .MainPost {
    width: 100%;
  }
  .postInfo {
    width: 65%;
  }

  .housEdit {
    width: 140px; 
    height: auto; 
  }
  .PostImg {
    width: 100%; /* Set to 100% */
  }
 .street {
   font-size: 12px;
 }
 
}
</style>
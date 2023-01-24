<script setup>
</script>

<template>
  <main>
    <div class="MainDetail">
      <div class="backgroundimg">
        <div class="Goback">
          <router-link  style="text-decoration: none; display: flex; color: inherit;" to="/">
            <img src="@/assets/dtt/back.png" alt="back" id="back" class="back">
            <img src="@/assets/dtt/back-white.png" alt="back" id="back-white" class="back">
            <h3 class="BackTo">Back to overview</h3>
          </router-link>
        </div>
        <div class="mobilEdit">
          <img src="@/assets/dtt/edit-white.png" alt="" class="edit-white" />
          <img src="@/assets/dtt/delete-white.png" alt="" class="delete-white" />
        </div>
      </div>
      <div class="DetailContainer">
        <div class="Detail">
          <div class="DetailImg">
            <img src="@/assets/dtt/house.png" alt="house-img" class="Detailhouse" />
          </div>
          <div class="DetailInfo">
            <div class="DetailEdit">
              <h3 class="DetailStreet">Stokvisstraat 132</h3>
              <img src="@/assets/dtt/edit-red.png" alt="" class="edit-detail" />
              <img src="@/assets/dtt/delete.png" alt="" class="delete-detail" />

            </div>
            <p class="DetailZipcode"> <img src="@/assets/dtt/location.png" alt="house-logo" class="DetailLocation">1011
              AA Amsterdam</p>
            <div class="DetailInfos">
              <img src="@/assets/dtt/price.png" alt="">
              <p>500.000</p>
              <img src="@/assets/dtt/size.png" alt="">
              <p>120 m2</p>
              <img src="@/assets/dtt/construction.png" alt="">
              <p>Built in 1990</p>
            </div>
            <div class="DetailExtraInfos">
              <img src="@/assets/dtt/bed.png" alt="">
              <p>1</p>
              <img src="@/assets/dtt/bath.png" alt="">
              <p>1</p>
              <img src="@/assets/dtt/garage.png" alt="">
              <p>Yes</p>
            </div>
            <div class="DetailDescription">
              <p class="DetailDescriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet nisl. Sed euismod,
                nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquet nisl nisl sit amet nisl.</p>
            </div>
          </div>
        </div>
        <div class="Recommended">
          <h3 class="RecommendedTitel">Recommended for you</h3>
          <div class="RecommendedContainer" v-for="i in 3" :key="i">
            <div class="RecommendedInfo">
              <div class="RecommendedImg">
                <img src="@/assets/dtt/house.png" alt="house-img" class="RecommendedHouse" />
              </div>
              <div class="RecommendeDetail">
                <h3 class="RecommendedStreet">Stokvisstraat 132</h3>
                <p class="RecommendedPrice">€ 500.000</p>
                <p class="RecommendedZipcode">1011 AA Amsterdam</p>
                <div class="RecommendedDetail">
                  <img src="@/assets/dtt/bed.png" alt="">
                  <p>1</p>
                  <img src="@/assets/dtt/bath.png" alt="">
                  <p>1</p>
                  <img src="@/assets/dtt/size.png" alt="">
                  <p>120 m2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
a.router-link-exact-active {
  color: var(--primary-text);
}
.MainDetail {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-top: 40px;
  width: 70%;
  height: 850px;
}

.back {
  width: 20px;
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
  margin-top: 0px;
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
  width: 60%;
  height: 750px;
  display: flex;
  flex-direction: column;
}


.Detailhouse {
  width: 100%;
}

.DetailInfo {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-alt);
  color: var(--primary-text);
  font-weight: 400;
  font-size: 15px;
  width: 90%;
}

.DetailStreet {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 25px;
  white-space: nowrap;
}

.DetailLocation {
  width: 12px;
  height: 15px;
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
  width: 15px;
  height: 15px;
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
  width: 15px;
  height: 15px;
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
  width: 100%;

}

.DetailEdit h3 {
  flex: 1;
}

.DetailEdit img {
  width: 20px;
  height: 20px;
  padding: 10px;
}

.Recommended {
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  width: 35%;
  white-space: nowrap;
}

.RecommendedTitel {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-text);
}

.RecommendedContainer {
  width: 320px;
  height: 130px;
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
  width: 100px;
  height: 100px;
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
  width: 15px;
  height: 15px;
}

.RecommendedDetail p {
  font-size: 10px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
}

@media screen and (max-width: 750px) {
  .MainDetail {
    margin-top: 0;
    margin-left: 0%;
    width: 100%;
  }

  .backgroundimg {
    display: flex;
    justify-content: space-between;
    background-image: url("@/assets/dtt/house.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 25%;
  }

  .DetailContainer {
    width: 100%;
    height: 50%;
    margin-top: -15px;
    display: flex;
    flex-direction: column;

  }

  .Detail {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Detailhouse {
    display: none;
  }
  .Goback {
   align-items: baseline;
  }

  .edit-detail,
  .delete-detail,
  #back,
  .BackTo {
    display: none;
  }

  #back-white {
    display: block;
    width: 15px;
    height: 15px;
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
   padding: 10px;
  }
  .Recommended {
  width: 80%;
   margin: auto;
  }
  .DetailStreet {
    font-size: 25px;
  }
  .DetailInfo {
     font-size: 15px;
  }
}
</style>
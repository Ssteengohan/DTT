<template>
  <div class="Main">
    <h1 class="About">About</h1>
    <h1>About DTT Real Estate</h1>
    <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst
      in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar
      husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
      onveranderd.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad id dignissimos sint illo numquam ?</p>
    <h1>Design and Development</h1>
    <div>
      <img alt="DTT logo" class="logo" src="@/assets/dtt/dtt-logo.png">
      <div class="href">
        <p>By DTT</p>
        <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Main {
  display: flex;
  flex-direction: column;
  margin-left: 13%;
  margin-top: 40px;
  max-width: 900px;
}

.About {
  display: none;
}

h1 {
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  font-size: 25px;
}

p {
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
}

img {
  max-width: 200px;
  height: 80px;
}

div:nth-child(6) {
  display: flex;
  flex-direction: row;
}

.href {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

a {
  color: var(--hyperlink);
  text-decoration: none;
}

h1:nth-child(5) {
  padding-bottom: 10px;
  padding-top: 20px;
}

@media screen and (max-width: 750px) {
  .Main {
    margin: 0 auto;
    width: 90%;
    height: 750px;
  }

  .About {
    display: block;
    margin: 0 auto;
    font-size: 25px !important;
    height: 50px;
    margin-top: 30px;
  }


  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  img {
    width: 90px;
    height: 50px;
  }

  .href p {
    line-height: 0px !important;
  }
}</style>

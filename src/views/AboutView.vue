<template>
  <div class="about">
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
.about {
  display: flex;
  flex-direction: column;
  margin-left: 13%;
  margin-top: 40px;
  max-width: 900px;
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
  min-height: 80px;
}

div:nth-child(5) {
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

h1:nth-child(4) {
  padding-bottom: 10px;
  padding-top: 20px;
}</style>

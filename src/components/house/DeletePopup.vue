<script>
export default {
  methods: {
    onCancel() {
      this.$emit('cancel');
    },
    onConfirm() {
      this.$emit('confirm');
    }
  }
}
</script>

<template>
  <div class="popup" v-on:click="onCancel">
    <div class="popup-content" v-on:click.stop>
      <h1>Delete listing</h1>
      <p>Are you sure you want to delete this listing?</p>
      <p class="second">This action cannot be undone.</p>
      <div class="buttons">
        <button class="yes" @click="onConfirm">YES, DELETE</button>
        <button class="no" @click="onCancel">GO BACK</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
  height: 250px;
  width: 50%;
  max-width: 440px;
}

h1 {
  font-size: 20px;
  font-family: var(--font-family);
  color: var(--primary-text);
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

p {
  font-family: var(--font-family);
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 14px;
}
.second {
  margin-top: -11px;
}

.buttons {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 75%;
 margin: 0 auto;
}

.yes {
  margin-top: 20px;
  background-color: var(--primary);
  color: white;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 15px;
}
.no {
  background-color: var(--secondary);
  color: white;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}

@media screen and (max-width: 750px) {
  .popup-content {
    width: 80%;
  }
  .yes,
  .no {
    width: 100%;
    white-space: nowrap;
  }
  .popup-content {
    height: 280px;
  }
  h1 {
    font-size: 18px;
  }

 p {
    font-size: 12px;
 }

}
</style>

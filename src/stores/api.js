import { defineStore } from "pinia";

//eveything with api is in this file
//Api key
const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "P8v4swpqKDBnkj3HZbSYoFRielzmW6au");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const useHouseStore = defineStore({
  id: "houses",
  state: () => ({
    houses: [],
  }),
  actions: {
    //get all houses
    getHouses() {
      return fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.houses = data))
        .then(this.SorthousesbyPrice);
    },
    deleteHouse(id) {
      //delete houses
      const deleteOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };
      return fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, deleteOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          return this.getHouses();
        });
    },
    SorthousesbyPrice() {
      //sort houses by price
      this.houses.sortBy = "price";
      this.houses.sort((a, b) => b.price - a.price);
    },
    SorthousesbySize() {
      //sort houses by size
      this.houses.sortBy = "size";
      this.houses.sort((a, b) => b.size - a.size);
    },
  },
});

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    price: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    streetName: "",
    houseNumber: "",
    numberAddition: "",
    zip: "",
    city: "",
    constructionYear: "",
    hasGarage: "",
    description: "",
    image: null,
  }),
  actions: {
    async postHouses(newHouse, image) {
      var formdata = new FormData();
      formdata.append("price", newHouse.price);
      formdata.append("bedrooms", newHouse.bedrooms);
      formdata.append("bathrooms", newHouse.bathrooms);
      formdata.append("size", newHouse.size);
      formdata.append("streetName", newHouse.streetName);
      formdata.append("houseNumber", newHouse.houseNumber);
      formdata.append("numberAddition", newHouse.numberAddition);
      formdata.append("zip", newHouse.zip);
      formdata.append("city", newHouse.city);
      formdata.append("constructionYear", newHouse.constructionYear);
      formdata.append("hasGarage", newHouse.hasGarage);
      formdata.append("description", newHouse.description);
      formdata.append("image", image, "house.jpg");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: formdata,
      };

      try {
        const response = await fetch(
          "https://api.intern.d-tt.nl/api/houses",
          requestOptions
        );
        const data = await response.json();
        const id = data.id;

        //upload image
        const imageFormData = new FormData();
        imageFormData.append("image", image, "house.jpg");
        const imageRequestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
          body: imageFormData,
        };
        const imageResponse = await fetch(
          `https://api.intern.d-tt.nl/api/houses/${id}/upload`,
          imageRequestOptions
        );
        
        if (!imageResponse.ok) {
          throw new Error(imageResponse.statusText);
        }

        return {
          id: id,
        };
      } catch (error) {
        console.error(error);
        throw new Error(error.message);
      }
    },
  },
});

//Edit fuction for houses
export const EditPostStore = defineStore({
  id: "post",
  state: () => ({
    price: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    streetName: "",
    houseNumber: "",
    numberAddition: "",
    zip: "",
    city: "",
    constructionYear: "",
    hasGarage: "",
    description: "",
  }),
  actions: {
    //Edit houses
    async EditHouses(id, { EditHouse }) {
      const formdata = new FormData();
      formdata.append("price", EditHouse.price);
      formdata.append("bedrooms", EditHouse.bedrooms);
      formdata.append("bathrooms", EditHouse.bathrooms);
      formdata.append("size", EditHouse.size);
      formdata.append("streetName", EditHouse.streetName);
      formdata.append("houseNumber", EditHouse.houseNumber);
      formdata.append("numberAddition", EditHouse.numberAddition);
      formdata.append("zip", EditHouse.zip);
      formdata.append("city", EditHouse.city);
      formdata.append("constructionYear", EditHouse.constructionYear);
      formdata.append("hasGarage", EditHouse.hasGarage);
      formdata.append("description", EditHouse.description);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: formdata,
      };

      return await fetch(
        `https://api.intern.d-tt.nl/api/houses/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          const id = data.id;
          console.log(id);
        })
        .catch((error) => console.log("error", error));
    },
  },
});


//update image function for houses
export const useImageStore = defineStore({
  id: "image",
  state: () => ({
    image: null,
  }),
  actions: {
    async updateImage(id, image) {
      const imageFormData = new FormData();
      imageFormData.append("image", image, "house.jpg");
      const imageRequestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: imageFormData,
      };
      const imageResponse = await fetch(
        `https://api.intern.d-tt.nl/api/houses/${id}/upload`,
        imageRequestOptions
      );
      if (!imageResponse.ok) {
        throw new Error(imageResponse.statusText);
      }
    },
  },
});

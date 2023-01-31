export const api = {
    postData(data) {
      const formData = new FormData();
      formData.append("price", data.price);
      formData.append("bedrooms", data.bedrooms);
      formData.append("bathrooms", data.bathrooms);
      formData.append("size", data.size);
      formData.append("streetName", data.streetName);
      formData.append("houseNumber", data.houseNumber);
      formData.append("numberAddition", data.numberAddition);
      formData.append("zip", data.zip);
      formData.append("city", data.city);
      formData.append("constructionYear", data.constructionYear);
      formData.append("hasGarage", data.hasGarage);
      formData.append("description", data.description);
  
      return fetch("https://api.intern.d-tt.nl/api/houses", {
        method: "POST",
        headers: new Headers({ "X-Api-Key": "P8v4swpqKDBnkj3HZbSYoFRielzmW6au" }),
        body: formData,
        redirect: "follow"
      })
        .then(res => res.text())
        .catch(error => console.error("Error in postData:", error));
    },
    postImage(fileInput) {
      const formData = new FormData();
      formData.append("image", fileInput.files[0], "pexels-photo-1311518.jpeg");
  
      return fetch("https://api.intern.d-tt.nl/api/houses/upload", {
        method: "POST",
        headers: new Headers({ "X-Api-Key": "P8v4swpqKDBnkj3HZbSYoFRielzmW6au" }),
        body: formData,
        redirect: "follow"
      })
        .then(res => res.text())
        .then(result => console.log(result))
        .catch(error => console.error("Error in postImage:", error));
    }
  };
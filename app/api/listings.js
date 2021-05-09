import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("categoryId", listing.category.value);
  listing.images.forEach((image, index) => {
    name: "image" + index;
    type: "image/jpeg";
    uri: image;
  });

  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
  console.log(progress);
};

export default {
  getListings,
  addListings,
};

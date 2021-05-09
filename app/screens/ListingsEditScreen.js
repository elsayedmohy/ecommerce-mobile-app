import React, { useState } from "react";
import { StyleSheet } from "react-native";

import * as yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/form";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppImageInput from "../components/imageinput/AppImageInput";
import UploadScreen from "./uploadScreen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.object().required().nullable().label("Category"),
  images: yup.array().min(1, "you have to select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingsEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListings(listing, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) return alert("could not save");

    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppImageInput name="images" />
        <AppFormField placeholder="Title" name="title" maxLength={100} />
        <AppFormField
          placeholder="Price"
          name="price"
          maxLength={7}
          min={1}
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          PickerIconComponent={CategoryPickerItem}
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColomns={3}
        />
        <AppFormField
          placeholder="Description"
          name="description"
          maxLength={100}
          multiline
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});

export default ListingsEditScreen;

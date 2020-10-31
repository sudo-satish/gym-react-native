import React from "react";
import AddFoodItemForm from "../../Forms/AddFoodItemForm/AddFoodItemForm";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";

export default function AddFoodItemScreen({...props}) {
  return<>
    <ScreenHeader {...props} title="Food Item"/>
    <AddFoodItemForm />
  </>;
}

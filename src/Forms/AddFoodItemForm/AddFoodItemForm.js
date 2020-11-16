import React from "react";
import { useForm } from "react-hook-form";
import { View, Button } from "react-native";
import CustomTextInput from "../../Components/Core/CustomInputText/CustomInputText";

export default function AddFoodItemForm() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View>
      <CustomTextInput
        control={control}
        errors={errors}
        title="Name"
        name="name"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        multiline
        numberOfLines={3}
        title="Description"
        name="description"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Protien in gms"
        name="proteins"
        keyboardType="number-pad"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Calories"
        name="calories"
        keyboardType="number-pad"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Fats"
        name="fats"
        keyboardType="number-pad"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Carbohydrates"
        name="carbohydrates"
        keyboardType="number-pad"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Vitamins"
        name="vitamins"
      />

      <CustomTextInput
        control={control}
        errors={errors}
        title="Minerals"
        name="minerals"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

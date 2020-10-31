import React from "react";
import { View, Button } from "react-native";
import { useForm } from "react-hook-form";
import CustomTextInput from "../../Components/Core/CustomInputText/CustomInputText";

export default function AddTraineeForm() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
        title="Mobile Number"
        name="mobileNumber"
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

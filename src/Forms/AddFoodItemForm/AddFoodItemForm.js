import React from 'react';
import { useForm } from 'react-hook-form';
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
          title="Mobile Number"
          name="mobileNumber"
          keyboardType="phone-pad"
          maxLength={10}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    );
};

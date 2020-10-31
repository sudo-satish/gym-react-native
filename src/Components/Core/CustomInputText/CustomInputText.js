import React from "react";
import { Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import formStyles from "../../../styles/formStyles";

export default function CustomTextInput ({ control, errors, title, name, ...props }) {
    return (
      <>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={formStyles.input}
              placeholder={title}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              {...props}
            />
          )}
          name={name}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors[name] && (
          <Text style={formStyles.inputError}>{title} is required.</Text>
        )}
      </>
    );
};

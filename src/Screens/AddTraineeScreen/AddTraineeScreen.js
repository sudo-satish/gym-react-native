// import BlankScreen from "../BlankScreen/BlankScreen";

import React from 'react';
import AddTraineeForm from "../../Forms/AddTraineeForm/AddTraineeForm";
import ScreenHeader from '../../Layouts/ScreenHeader/ScreenHeader';

export default ({ ...props }) => (
  <>
    <ScreenHeader {...props} title="Add Trainee" />
    <AddTraineeForm />
  </>
);

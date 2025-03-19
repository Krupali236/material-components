import React from "react";
import BasicSelect from "../components/Input/Select/BasicSelect";
import SelectVariants from "../components/Input/Select/SelectVariants";
import SelectLabels from "../components/Input/Select/SelectLabels";
import SelectAutoWidth from "../components/Input/Select/SelectAutoWidth";
import SelectSmall from "../components/Input/Select/SelectSmall";
import SelectOtherProps from "../components/Input/Select/SelectOtherProps";
import NativeSelectDemo from "../components/Input/Select/NativeSelect";
import CustomizedSelects from "../components/Input/Select/CustomizedSelect";
import MultipleSelect from "../components/Input/Select/MultipleSelect";
import MultipleSelectNative from "../components/Input/Select/MultipleSelectNative";
import ControlledOpenSelect from "../components/Input/Select/ControlledOpenSelect";
import DialogSelect from "../components/Input/Select/DialogSelect";
import GroupedSelect from "../components/Input/Select/GroupedSelect";

const Select = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicSelect />
      <SelectVariants />
      <SelectLabels />
      <SelectAutoWidth />
      <SelectSmall />
      <SelectOtherProps />
      <NativeSelectDemo />
      <CustomizedSelects />
      <MultipleSelect />
      <MultipleSelectNative />
      <ControlledOpenSelect />
      <DialogSelect />
      <GroupedSelect />
    </div>
  );
};

export default Select;

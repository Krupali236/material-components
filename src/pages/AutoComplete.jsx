import React from "react";
import ComboBox from "../components/Input/ComboBox/ComboBox";
import CountrySelect from "../components/Input/ComboBox/CountrySelect";
import ControllableStates from "../components/Input/ComboBox/ControllState";
import SearchCombo from "../components/Input/ComboBox/Search";
import Grouped from "../components/Input/ComboBox/Group";
import DisabledOptions from "../components/Input/ComboBox/Disable";
import CustomizedHook from "../components/Input/ComboBox/Customized";
import Asynchronous from "../components/Input/ComboBox/Loading";
import GoogleMaps from "../components/Input/ComboBox/GoogleMap";
import Tags from "../components/Input/ComboBox/MultipleValues";
import GitHubLabel from "../components/Input/ComboBox/GitHubPicker";
import Virtualize from "../components/Input/ComboBox/Virtualization";
import CheckboxesTags from "../components/Input/ComboBox/Checkboxes";
import FixedTags from "../components/Input/ComboBox/FixedOptions";
import LimitTags from "../components/Input/ComboBox/LimitTags";
import Sizes from "../components/Input/ComboBox/Size";
import Highlights from "../components/Input/ComboBox/Highlights";
const AutoComplete = () => {
  return (
    <>
      <div style={{ margin: "15px" }}>
        <ComboBox />
        <CountrySelect />
        <ControllableStates />
        <SearchCombo />
        <Grouped />
        <DisabledOptions />
        <CustomizedHook />
        <Asynchronous />
        <GoogleMaps />
        <Tags />
        <GitHubLabel />
        <Virtualize />
        <CheckboxesTags />
        <FixedTags />
        <LimitTags />
        <Sizes />
        <Highlights />
      </div>
    </>
  );
};

export default AutoComplete;

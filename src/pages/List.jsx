import React from "react";
import BasicList from "../components/DataDisplay/List/BasicList";
import InteractiveList from "../components/DataDisplay/List/InteractiveList";
import SelectedListItem from "../components/DataDisplay/List/SelectedListItem";
import AlignItemsList from "../components/DataDisplay/List/AlignItemsList";
import CheckboxList from "../components/DataDisplay/List/CheckboxList";
import CheckboxListSecondary from "../components/DataDisplay/List/CheckboxListSecondary";
import SwitchListSecondary from "../components/DataDisplay/List/SwitchListSecondary";
import PinnedSubheaderList from "../components/DataDisplay/List/PinnedSubheaderList";
import InsetList from "../components/DataDisplay/List/InsetList";
import GutterlessList from "../components/DataDisplay/List/GutterlessList";
import VirtualizedList from "../components/DataDisplay/List/VirtualizedList";
import CustomizedList from "../components/DataDisplay/List/CustomizedList";

const List = () => {
  return (
    <div>
      <BasicList />
      <InteractiveList />
      <SelectedListItem />
      <AlignItemsList />
      <CheckboxList />
      <CheckboxListSecondary />
      <SwitchListSecondary />
      <PinnedSubheaderList />
      <InsetList />
      <GutterlessList />
      <VirtualizedList />
      <CustomizedList />
    </div>
  );
};

export default List;

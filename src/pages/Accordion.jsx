import React from "react";
import AccordionUsage from "../components/Surfaces/Accordion/AccordionUsage";
import AccordionExpandIcon from "../components/Surfaces/Accordion/AccordionExpandIcon";
import AccordionExpandDefault from "../components/Surfaces/Accordion/AccordionExpandDefault";
import AccordionTransition from "../components/Surfaces/Accordion/AccordionTransition";
import DisabledAccordion from "../components/Surfaces/Accordion/DisabledAccordion";
import ControlledAccordions from "../components/Surfaces/Accordion/ControlledAccordions";
import CustomizedAccordions from "../components/Surfaces/Accordion/CustomizedAccordions";

const Accordion = () => {
  return (
    <div style={{margin:"15px"}}>
      <AccordionUsage />
      <AccordionExpandIcon />
      <AccordionExpandDefault />
      <AccordionTransition />
      <DisabledAccordion />
      <ControlledAccordions />
      <CustomizedAccordions/>
    </div>
  );
};

export default Accordion;

import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      <h3>Standalone toggle button</h3>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </ToggleButton>
    </div>
  );
}

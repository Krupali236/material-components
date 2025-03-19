import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

export default function BasicTooltip() {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <div>
      <h3>Basic tooltip</h3>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <h3>Arrow tooltips</h3>
      <Tooltip title="Add" arrow>
        <Button>Arrow</Button>
      </Tooltip>

      <h3>Distance from anchor</h3>
      <Tooltip
        title="Add"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -14],
                },
              },
            ],
          },
        }}
      >
        <Button>Offset</Button>
      </Tooltip>

      <h3> Customize the margin of the popper</h3>
      <Tooltip
        title="Add"
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                {
                  marginTop: "0px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                {
                  marginBottom: "0px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                {
                  marginLeft: "0px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                {
                  marginRight: "0px",
                },
            },
          },
        }}
      >
        <Button>Margin</Button>
      </Tooltip>

      <h3>Disabled elements</h3>
      <Tooltip title="You don't have permission to do this">
        <span>
          <Button disabled>A Disabled Button</Button>
        </span>
      </Tooltip>

      <div>
        <h3>Transitions</h3>
        <Tooltip title="Add">
          <Button>Grow</Button>
        </Tooltip>
        <Tooltip
          title="Add"
          slots={{
            transition: Fade,
          }}
          slotProps={{
            transition: { timeout: 600 },
          }}
        >
          <Button>Fade</Button>
        </Tooltip>
        <Tooltip
          title="Add"
          slots={{
            transition: Zoom,
          }}
        >
          <Button>Zoom</Button>
        </Tooltip>
      </div>

      <h3>Follow cursor</h3>
      <Tooltip title="You don't have permission to do this" followCursor>
        <Box
          sx={{
            bgcolor: "text.disabled",
            color: "background.paper",
            p: 2,
            width: "max-content",
          }}
        >
          Disabled Action
        </Box>
      </Tooltip>

      <h3>Virtual element</h3>
      <Tooltip
        title="Add"
        placement="top"
        arrow
        slotProps={{
          popper: {
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(
                  positionRef.current.x,
                  areaRef.current.getBoundingClientRect().y,
                  0,
                  0
                );
              },
            },
          },
        }}
      >
        <Box
          ref={areaRef}
          onMouseMove={handleMouseMove}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 2,
            width: "max-content",
          }}
        >
          Hover
        </Box>
      </Tooltip>

      <h3>Showing and hiding</h3>
      <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
        <Button>[500ms, 200ms]</Button>
      </Tooltip>

      <div>
        <h3>Accessibility</h3>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip describeChild title="Does not add if it already exists.">
          <Button>Add</Button>
        </Tooltip>
      </div>
    </div>
  );
}

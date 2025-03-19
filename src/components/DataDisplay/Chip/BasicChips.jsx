import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import avatar1 from "../../../assets/images/1.jpg";
import FaceIcon from "@mui/icons-material/Face";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
export default function BasicChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleOnDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  return (
    <div>
      <h3>Basic chip</h3>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>

      <h2>Chip actions</h2>
      <h3>Clickable</h3>
      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>

      <h3>Deletable</h3>
      <Stack direction="row" spacing={1}>
        <Chip label="Deletable" onDelete={handleDelete} />
        <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
      </Stack>

      <h3>Clickable and deletable</h3>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable Deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Clickable Deletable"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Stack>

      <h3>Clickable link</h3>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </Stack>

      <h3>Custom delete icon</h3>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Stack>

      <h2>Chip adornments</h2>
      <h3>Avatar chip</h3>
      <Stack direction="row" spacing={1}>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Chip
          avatar={<Avatar alt="Natacha" src={avatar1} />}
          label="Avatar"
          variant="outlined"
        />
      </Stack>

      <h3>Icon chip</h3>
      <Stack direction="row" spacing={1}>
        <Chip icon={<FaceIcon />} label="With Icon" />
        <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      </Stack>

      <h3>Multiline chip</h3>
      <Box sx={{ width: 100 }}>
        <Chip
          sx={{
            height: "auto",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
            },
          }}
          label="This is a chip that has multiple lines."
        />
      </Box>

      <h3>Chip array</h3>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;

          if (data.label === "React") {
            icon = <TagFacesIcon />;
          }

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === "React" ? undefined : handleOnDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>

      <h2>Chip playground</h2>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip
          label="Chip Filled"
          color="primary"
          size="small"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />

        <Chip
          label="Chip Outlined"
          variant="outlined"
          size="small"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />

        <Chip
          label="Chip Outlined Medium"
          variant="outlined"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Filled Medium"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Letter Avatar"
          color="secondary"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
          avatar={<Avatar>F</Avatar>}
        />

        <Chip
          label="Chip Default"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Primary"
          color="primary"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Secondary"
          color="secondary"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Error"
          color="error"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Success"
          color="success"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Warning"
          color="warning"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Default Delete"
          color="secondary"
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Custom Delete"
          color="secondary"
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
      </Stack>
    </div>
  );
}

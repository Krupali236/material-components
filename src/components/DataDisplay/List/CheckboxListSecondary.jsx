import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
const avatarList = [
  {
    id: 1,
    url: "../../../assets/images/1.jpg",
  },
  {
    id: 2,
    url: "../../../assets/images/2.jpg",
  },
  {
    id: 3,
    url: "../../../assets/images/3.jpg",
  },
  {
    id: 4,
    url: "../../../assets/images/4.jpg",
  },
];
export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <h3>Secondary Checkbox</h3>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {avatarList.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.includes(value)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${value + 1}`} src={value.url} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`Line item ${value.id}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

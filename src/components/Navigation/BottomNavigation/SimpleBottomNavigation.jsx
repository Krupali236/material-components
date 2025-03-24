import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h3>Bottom navigation</h3>
      <Box sx={{ width: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>

      <h3>Bottom navigation with no label</h3>
      <BottomNavigation
        sx={{ width: { xs: 250, sm: 350, md: 400, lg: 500 } }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

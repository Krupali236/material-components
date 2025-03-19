import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar1 from "../../../assets/images/1.jpg";
import avatar2 from "../../../assets/images/2.jpg";
import avatar3 from "../../../assets/images/3.jpg";
import avatar4 from "../../../assets/images/4.jpg";
import avatar5 from "../../../assets/images/5.jpg";
import { deepOrange, deepPurple, green, pink } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function ImageAvatars() {
  return (
    <div>
      <h3>Image avatars</h3>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={avatar1} />
        <Avatar alt="Travis Howard" src={avatar2} />
        <Avatar alt="Cindy Baker" src={avatar3} />
      </Stack>

      <h3>Letter avatars</h3>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>

      <h3>String To Color / Background Letter Avatars</h3>
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar("Kent Dodds")} />
        <Avatar {...stringAvatar("Jed Watson")} />
        <Avatar {...stringAvatar("Tim Neutkens")} />
      </Stack>

      <h3>Sizes</h3>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 24, height: 24 }} />
        <Avatar alt="Remy Sharp" src={avatar1} />
        <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 56, height: 56 }} />
      </Stack>

      <h3>Icon avatars</h3>
      <Stack direction="row" spacing={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </Stack>

      <h3>Variants</h3>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          N
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
          <AssignmentIcon />
        </Avatar>
      </Stack>

      <h3>Fallbacks</h3>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        <Avatar src="/broken-image.jpg" />
      </Stack>

      <h3>Grouped</h3>
      <Stack direction="row" spacing={2} sx={{ alignItems: "start" }}>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Stack>

      <h3>Total avatars</h3>
      <Stack direction="row" spacing={2} sx={{ alignItems: "start" }}>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Agnes Walker" src={avatar4} />
          <Avatar alt="Trevor Henderson" src={avatar5} />
        </AvatarGroup>
      </Stack>

      <h3>Custom surplus</h3>
      <Stack direction="row" spacing={2} sx={{ alignItems: "start" }}>
        <AvatarGroup
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
          total={4251}
        >
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Agnes Walker" src={avatar4} />
          <Avatar alt="Trevor Henderson" src={avatar5} />
        </AvatarGroup>
      </Stack>

      <h3>Spacing</h3>
      <Stack spacing={4} sx={{ alignItems: "start" }}>
        <AvatarGroup spacing="medium">
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
        </AvatarGroup>
        <AvatarGroup spacing="small">
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
        </AvatarGroup>
        <AvatarGroup spacing={24}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
        </AvatarGroup>
      </Stack>

      <h3>With badge</h3>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={avatar1} />
        </StyledBadge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<SmallAvatar alt="Remy Sharp" src={avatar1} />}
        >
          <Avatar alt="Travis Howard" src={avatar2} />
        </Badge>
      </Stack>
    </div>
  );
}

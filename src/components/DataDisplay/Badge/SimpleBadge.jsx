import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function SimpleBadge() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <div>
      <h3>Basic badge</h3>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>

      <h3>Color</h3>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
      </Stack>

      <h3>Customization</h3>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <h3>Badge visibility</h3>
      <Box
        sx={{
          color: "action.active",
          display: "flex",
          flexDirection: "column",
          "& > *": {
            marginBottom: 2,
          },
          "& .MuiBadge-root": {
            marginRight: 4,
          },
        }}
      >
        <div>
          <Badge color="secondary" badgeContent={count}>
            <MailIcon />
          </Badge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <MailIcon />
          </Badge>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            control={
              <Switch checked={!invisible} onChange={handleBadgeVisibility} />
            }
            label="Show Badge"
          />
        </div>
      </Box>

      <h3> Badge hides automatically when badgeContent is zero</h3>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={0}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <MailIcon />
        </Badge>
      </Stack>

      <h3>Maximum value</h3>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={99}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <MailIcon />
        </Badge>
      </Stack>

      <h3>Dot badge</h3>
      <Box sx={{ color: "action.active" }}>
        <Badge color="secondary" variant="dot">
          <MailIcon />
        </Badge>
      </Box>

      <h3>Badge overlap</h3>
      <Stack spacing={3} direction="row">
        <Badge color="secondary" badgeContent=" ">
          {rectangle}
        </Badge>
        <Badge color="secondary" badgeContent=" " variant="dot">
          {rectangle}
        </Badge>
        <Badge color="secondary" overlap="circular" badgeContent=" ">
          {circle}
        </Badge>
        <Badge
          color="secondary"
          overlap="circular"
          badgeContent=" "
          variant="dot"
        >
          {circle}
        </Badge>
      </Stack>

      <h3>Badge alignment</h3>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge
          badgeContent={100}
          color="secondary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MailIcon />
        </Badge>
      </IconButton>

      <h3>Accessibility</h3>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge badgeContent={100} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </div>
  );
}

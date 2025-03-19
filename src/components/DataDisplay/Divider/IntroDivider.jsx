import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { dividerClasses } from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function IntroDivider() {
  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  );

  return (
    <div>
      <h3>Introduction</h3>
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Toothbrush
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Pinstriped cornflower blue cotton blouse takes you on a walk to the
            park or just down the hall.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="Soft" size="small" />
            <Chip label="Medium" size="small" />
            <Chip label="Hard" size="small" />
          </Stack>
        </Box>
      </Card>

      <h3>Variants</h3>
      <List sx={style}>
        <ListItem>
          <ListItemText primary="Full width variant below" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Inset variant below" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Middle variant below" />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary="List item" />
        </ListItem>
      </List>

      <h3>Orientation</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "background.paper",
          width: "max-content",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
      </Box>

      <h3>Flex item</h3>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
        }}
      >
        <FormatBoldIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatItalicIcon />
      </Box>

      <h3>With children</h3>
      <Root>
        {content}
        <Divider>CENTER</Divider>
        {content}
        <Divider textAlign="left">LEFT</Divider>
        {content}
        <Divider textAlign="right">RIGHT</Divider>
        {content}
        <Divider>
          <Chip label="Chip" size="small" />
        </Divider>
        {content}
      </Root>

      <h3>Customization</h3>
      <List sx={style} aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>

      <h3>Icon grouping</h3>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          width: "max-content",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatBoldIcon />
      </Card>

      <h3>Accessibility</h3>
      <Divider component="div" role="presentation">
        <Typography>Text element</Typography>
      </Divider>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function TransitionGroupExample() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(
    FRUITS.slice(0, 3)
  );

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Add fruit to basket
    </Button>
  );

  return (
    <div>
      <h3>TransitionGroup</h3>
      {addFruitButton}
      <List sx={{ mt: 1, width: 300 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>
              {renderItem({ item, handleRemoveFruit })}
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
}

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});
export default function BasicPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { items } = usePagination({
    count: 10,
  });
  return (
    <div>
      <h3>Basic pagination</h3>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>

      <h3>Outlined pagination</h3>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </Stack>

      <h3>Rounded pagination</h3>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>

      <h3>Pagination size</h3>
      <Stack spacing={2}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>

      <h3>Buttons</h3>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Stack>

      <h3>Custom icons</h3>
      <Stack spacing={2}>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>

      <h3>Pagination ranges</h3>
      <Stack spacing={2}>
        <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
        <Pagination
          count={11}
          defaultPage={6}
          siblingCount={0}
          boundaryCount={2}
        />
        <Pagination count={11} defaultPage={6} boundaryCount={2} />
      </Stack>

      <h3>Controlled pagination</h3>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>

      <h3>usePagination</h3>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </div>
  );
}

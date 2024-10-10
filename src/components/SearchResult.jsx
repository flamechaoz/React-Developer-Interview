import {
  Avatar,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import moment from "moment";

// TODO: create pagination function i.e. load more
const SearchResult = ({ items }) => {
  return (
    <div>
      {items.length > 0 ? (
        <List>
          {items.map((item, index) => {
            const date_aired = moment(item.aired.from).format("ll");
            return (
              <ListItemButton component="a" href={item.url}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.images.webp.small_image_url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`${date_aired}·${item.type}`}
                />
              </ListItemButton>
            );
          })}
        </List>
      ) : null}
    </div>
  );
};

export default SearchResult;

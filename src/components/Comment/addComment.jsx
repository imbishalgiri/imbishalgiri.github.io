import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const AddComment = ({ avatar = "", description, likes = [], replies = [] }) => {
  return (
    <Box style={{ marginTop: "1rem" }}>
      <Box style={{ display: "flex" }}>
        <Avatar
          src={
            avatar ||
            "https://placehold.jp/626c62/ffffff/150x150.png?text=KS%20USER"
          }
        />
        <Box
          style={{
            background: "#f6f5f5",
            marginLeft: "1rem",
            borderRadius: "5px",
            padding: ".5rem",
            alignSelf: "stretch",
          }}
        >
          <Box component={"span"}>
            <Typography
              style={{ fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: description }}
            ></Typography>
          </Box>
        </Box>
      </Box>
      <small style={{ marginLeft: "5rem" }}>
        <small style={{ color: "#3170ac", cursor: "pointer" }}>
          {likes?.length}
          {likes?.length > 1 ? " likes" : " like"}
        </small>
        <small
          style={{ color: "#3170ac", marginLeft: "1rem", cursor: "pointer" }}
        >
          {replies?.length} {replies?.length > 1 ? " replies" : " reply"}
        </small>
      </small>
    </Box>
  );
};

export default AddComment;

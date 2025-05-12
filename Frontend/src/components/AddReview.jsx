import { Rating, Typography, Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";

function AddReview() {
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log(review);
  };
  return (
    <Box sx={{display: "flex", flexDirection:"column" , gap:2, maxWidth: "800px", padding: 2, marginTop: "60px", marginBottom: "60px"}}>
      <Typography sx={{fontSize: "1.2rem", fontWeight: "bold"}}>Add Review</Typography>
      <Rating
        value={review.rating}
        onChange={(e) => setReview({ ...review, rating: e.target.value })}
      />
      <TextField
        label="Comment"
        value={review.comment}
        onChange={(e) => setReview({ ...review, comment: e.target.value })}
        multiline
        rows={4}
      />
      <TextField
        label="Email"
        value={review.email}
        onChange={(e) => setReview({ ...review, email: e.target.value })}
      />
      <Button sx={{alignSelf:"start"}} variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default AddReview;

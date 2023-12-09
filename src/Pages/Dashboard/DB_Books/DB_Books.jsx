import { Grid, Pagination , Box } from "@mui/material";
import { DBBookCard } from "../../../Components";

const DB_BOOKS = () => {
  return (
    <Grid item xs={12} md={5} lg={3} >
      <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" }} >
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
        <DBBookCard />
      </Box>
      <Pagination sx={{ mt:2,  display:"flex" , justifyContent:"center" }} count={10} color="primary" />
    </Grid>
  );
};

export default DB_BOOKS;

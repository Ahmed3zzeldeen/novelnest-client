import { Grid, Pagination, Box } from "@mui/material";
import { DBOrderCard } from "../../../Components";

const DB_ORDERS = () => {
  return (
    <Grid item xs={12} md={5} lg={3} >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
        <DBOrderCard />
      </Box>
      <Pagination sx={{ mt: 2, display: "flex", justifyContent: "center" }} count={10} color="primary" />
    </Grid>
  );
};

export default DB_ORDERS;

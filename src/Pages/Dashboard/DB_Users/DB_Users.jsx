import { Grid, Pagination , Box } from "@mui/material";
import { DBUserCard } from "../../../Components";

const DB_USERS = () => {
  return (
    <Grid item xs={12} md={5} lg={3} >
      <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" }} >
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
        <DBUserCard />
      </Box>
      <Pagination sx={{ mt:2,  display:"flex" , justifyContent:"center" }} count={10} color="primary" />
    </Grid>
  );
};

export default DB_USERS;

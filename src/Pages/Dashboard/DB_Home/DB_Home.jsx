import { Grid, Paper } from "@mui/material";
import Chart from "./../DashboardComponent/Chart";
import Deposits from "./../DashboardComponent/Deposits";

const DB_HOME = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}>
            <Deposits />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DB_HOME;

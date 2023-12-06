import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// ESlint
function Books() {
    return (
        <>
            <Paper
                className="cover"
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "coulm",
                    padding: 2,
                    flexWrap: "wrap",
                }}
                md={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 100,
                }}>
                <Grid className="cover-content" item xs={12} md={4} lg={3}>
                    <div className="cover-content">
                        <img
                            className="img"
                            alt=" "
                            src="https://th.bing.com/th/id/R.df173c91569b4ce72db5ef212e226f5e?rik=agSWZyNTqw2rhw&pid=ImgRaw&r=0"></img>
                        <div>
                            <h3>Titel Book</h3>
                            <p>Owner for book</p>
                        </div>
                    </div>
                </Grid>
                <Box className="cover-button">
                    <Button
                        className="btn"
                        href=" "
                        variant="text"
                        color="secondary"
                        style={{ margin: 10 }}>
                        <span>Delete</span>
                    </Button>
                    <Button
                        className="btn"
                        href=" "
                        variant="contained"
                        color="primary"
                        style={{ margin: 10 }}>
                        Edit
                    </Button>
                </Box>
            </Paper>
        </>
    );
}

export default Books;

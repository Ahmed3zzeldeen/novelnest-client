import Grid from "@mui/material/Grid";
import Books from "./Books";
import { Tab } from "@mui/base/Tab";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tabs } from "@mui/base/Tabs";
function SliderBooks() {
    return (
        <>
            <Grid item xs={12} md={4} lg={3} >
                <Books />
                <Books />
                <Books />
                <Books />
                <Books />
                <Books />
                <Books />
            <Tabs ClassName="Num-Tabs" defaultValue={1} style={{display:"flex",justifyContent:"center",gap:10,margin:10,}}  >
            <TabsList style={{display:"flex",justifyContent:"flex-start",gap:4,}}>
                    <Tab value={1}>1</Tab>
                    <Tab value={2}>2</Tab>
                    <Tab value={3}>3</Tab>
                    <Tab value={4}>4</Tab>
                    <Tab value={5}>5</Tab>
                    <Tab value={6}>6</Tab>
                </TabsList>
                <TabPanel value={1}> page 1</TabPanel>
                <TabPanel value={2}> page 2</TabPanel>
                <TabPanel value={3}> page 3</TabPanel>
                <TabPanel value={4}> page 4</TabPanel>
                <TabPanel value={5}> page 5</TabPanel>
                <TabPanel value={6}> page 6</TabPanel>
            </Tabs>
            </Grid>
        </>
    );
}

export default SliderBooks;

import { SliderBooks, Dashboard , Copyright } from "../../Components/index";

const DashboardBooks = () => {
    return (
        <Dashboard>
            <SliderBooks />
            <Copyright sx={{ pt: 4 }} />
        </Dashboard>
    );
};

export default DashboardBooks;
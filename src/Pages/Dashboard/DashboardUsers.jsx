import React from "react";
import SliderUers from "../../Components/DbComponents/Users/SliderUsers";
import { Dashboard , Copyright } from "../../Components/index";

function DashboardUsers() {
    return (
        <>
            <Dashboard>
                <SliderUers/>
                <Copyright sx={{ pt: 4 }} />
            </Dashboard>
        </>);
}

export default DashboardUsers;

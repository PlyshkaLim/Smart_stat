import React from "react";
import p from "./MainPage.module.css";
import SideBar from "../SideBar/SideBar";

const MainPage = () => {


    return (
        <div className={p.mainPage}>
            <SideBar/>
            <div className={p.content}>
                MainPage Content<br/>

            </div>
        </div>
    )
}

export default MainPage;
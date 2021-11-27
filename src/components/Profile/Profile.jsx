import React from "react";
import styles from "./Profile.module.css";
import SideBar from "../SideBar/SideBar";

const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <div className={styles.sideBar}>
                <SideBar/>
            </div>
            <div>
                Content Profile Page
            </div>
        </div>
    )
}

export default Profile;
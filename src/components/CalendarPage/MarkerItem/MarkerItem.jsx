import React from "react";
import CircleSVG from "../../common/CircleSVG";
import styles from "./MarkerItem.module.css";

const MarkerItem = (props) => {
    return (
        <div className={styles.item}>
            <span className={styles.color}>
                <CircleSVG color={props.color}/>
            </span>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
}

export default MarkerItem;
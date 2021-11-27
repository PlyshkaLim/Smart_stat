import React from "react";
import CircleSVG from "../../common/CircleSVG";
import css from "./MarkerItem.module.css";

const MarkerItem = (props) => {
    return (
        <div className={css.item}>
            <span className={css.color}>
                <CircleSVG color={props.color}/>
            </span>
            <span className={css.text}>
                {props.text}
            </span>
        </div>
    )
}

export default MarkerItem;
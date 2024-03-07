import React from "react";
import styles from "../style/Tracklist.module.css"

function Tracklist(){
    return(
        <div className={styles.tracklistwrapper}>
            <h1 className={styles.header}>Add tracks to your playlist</h1>
        </div>
    )
}

export default Tracklist;
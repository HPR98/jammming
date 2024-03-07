import React from "react";
import styles from "../style/SearchResult.module.css"

function SearchResult(){
    return(
        <div className={styles.resultwrapper}>
            <h1 className={styles.header}>Results</h1>
        </div>
    )
}

export default SearchResult;
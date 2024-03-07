import React from "react";
import styles from "../style/SearchBar.module.css"

function SearchBar (){
    return(
        <div className={styles.SearchBar}>
            <form className={styles.formStyle}>
                <label className={styles.label}>Search Spotify</label>
                <input type="text" className={styles.input}
                    placeholder="Type your search in here"
                />
            </form>
        </div>
    )
}

export default SearchBar;
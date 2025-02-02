import React from "react";

export default function Header ({isDarkMode, handleDarkModeClick}){
        return (
            <header>
                <h2>Shopster</h2>
                <button onClick={handleDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        );
    
}

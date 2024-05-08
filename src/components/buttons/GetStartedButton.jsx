import React from "react";

export default function GetStartedButton(props) {
    return (
        <button
            style={{ padding: "0.5rem" }}
            onClick={(e) => {
                e.stopPropagation();
                props.onClick();
            }}
        >
            Get Started
        </button>
    );
}

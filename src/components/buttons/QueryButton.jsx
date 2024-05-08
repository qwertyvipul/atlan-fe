import React from "react";

export default function QueryButton(props) {
    return (
        <button
            style={{ padding: "0.5rem" }}
            onClick={(e) => {
                e.stopPropagation();
                props.onClick();
            }}
        >
            New Query
        </button>
    );
}

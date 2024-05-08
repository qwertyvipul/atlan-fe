import React from "react";

export default function QDCloseButtons(props) {
    return (
        <button style={{ padding: "0.5rem" }} onClick={props.onClick}>
            Close
        </button>
    );
}

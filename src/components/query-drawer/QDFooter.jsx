import React from "react";
import QDCloseButton from "./QDCloseButton";

export default function QDFooter(props) {
    return (
        <div
            style={{
                padding: "1rem 0",
                textAlign: "center",
            }}
        >
            <QDCloseButton onClick={props.onClick} />
        </div>
    );
}

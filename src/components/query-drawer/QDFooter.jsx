import React from "react";
import QDCloseButton from "./QDCloseButton";
import { Box, Stack } from "@mui/material";

export default function QDFooter(props) {
    return (
        <div
            style={{
                padding: "1rem 0",
                borderTop: "1px solid black",
                textAlign: "center",
            }}
        >
            <QDCloseButton onClick={props.onClick} />
        </div>
    );
}

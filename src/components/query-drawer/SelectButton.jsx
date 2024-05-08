import React from "react";
import { Button } from "@mui/material";

export default function SelectButton(props) {
    return (
        <Button variant="contained" onClick={props.onClick}>
            Select
        </Button>
    );
}

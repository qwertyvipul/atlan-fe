import React from "react";
import { Stack, Paper } from "@mui/material";
import SelectButton from "./SelectButton";

export default function QDQuery(props) {
    return (
        <Paper style={{ margin: "0.5rem 0", padding: "1rem", width: "100%" }}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <div>{props.query}</div>
                <SelectButton
                    onClick={() => props.onQuerySelect(props.query)}
                />
            </Stack>
        </Paper>
    );
}

import React from "react";
import { Stack, Paper } from "@mui/material";
import SelectButton from "./SelectButton";
import queries from "../../data/queries";
import SQLQuery from "../SQLQuery";

export default function QDQuery(props) {
    return (
        <Paper
            style={{ margin: "0.5rem 0", padding: "0rem 1rem", width: "100%" }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <div style={{ width: "100%", marginRight: "0.5rem" }}>
                    <SQLQuery query={queries[props.queryID].query} />
                </div>
                <SelectButton
                    onClick={() => props.onQuerySelect(props.queryID)}
                />
            </Stack>
        </Paper>
    );
}

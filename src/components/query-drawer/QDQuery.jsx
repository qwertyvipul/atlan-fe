import React from "react";
import { Stack } from "@mui/material";
import SelectButton from "./SelectButton";
import queries from "../../data/queries";
import SQLQuery from "../SQLQuery";

export default function QDQuery(props) {
    return (
        <div
            style={{
                margin: "0.5rem",
                padding: "0rem 1rem",
                background: "#ddd",
            }}
            elevation={5}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <div style={{ width: "100%", margin: "0.5rem" }}>
                    <SQLQuery query={queries[props.queryID].query} />
                </div>
                <SelectButton
                    onClick={() => props.onQuerySelect(props.queryID)}
                />
            </Stack>
        </div>
    );
}

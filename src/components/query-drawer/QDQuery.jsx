import React from "react";
import { Grid } from "@mui/material";
import SelectButton from "./SelectButton";
import queries from "../../data/queries";
import SQLQuery from "../SQLQuery";

export default function QDQuery(props) {
    return (
        <div
            style={{
                margin: "0.5rem",
                padding: "0.5rem 1rem",
                background: "#ddd",
            }}
        >
            <Grid
                container
                spacing={1}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Grid item xs={12} md={10}>
                    <SQLQuery query={queries[props.queryID].query} />
                </Grid>
                <Grid item sx={{ textAlign: "center" }} xs={12} md={2}>
                    <SelectButton
                        onClick={() => props.onQuerySelect(props.queryID)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

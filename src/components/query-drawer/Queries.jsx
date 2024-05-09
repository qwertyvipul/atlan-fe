import React from "react";
import { Paper, Box, Stack } from "@mui/material";
import QDQuery from "./QDQuery";

import queries from "../../data/queries";

export default function Queries(props) {
    return (
        <div>
            <Box
                sx={{
                    "& .MuiPaper-root": {
                        margin: "0.5rem",
                        padding: "1rem",
                        width: "100%",
                    },
                }}
            >
                <Stack>
                    {Object.keys(queries).map((id) => {
                        return (
                            <QDQuery
                                key={id}
                                queryID={id}
                                onQuerySelect={props.onQuerySelect}
                            />
                        );
                    })}
                </Stack>
            </Box>
        </div>
    );
}

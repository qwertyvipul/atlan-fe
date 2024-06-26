import React from "react";
import { Stack } from "@mui/material";
import SiteLogo from "./SiteLogo";
import QueryButton from "./buttons/QueryButton";

export default function SiteHeader(props) {
    return (
        <div style={{ padding: "1rem 0" }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <SiteLogo />
                <QueryButton onClick={props.openDrawer} />
            </Stack>
        </div>
    );
}

import React from "react";
import { Drawer } from "@mui/material";
import QDFooter from "./QDFooter";
import { Box, Container, Stack } from "@mui/material";
import Queries from "./Queries";

export default function QueryDrawer(props) {
    return (
        <div>
            <Drawer anchor="bottom" open={true}>
                <Container maxWidth="md" style={{ background: "lightblue" }}>
                    <Stack>
                        <Queries onQuerySelect={props.onQuerySelect} />
                        <QDFooter onClick={props.onClose} />
                    </Stack>
                </Container>
            </Drawer>
        </div>
    );
}

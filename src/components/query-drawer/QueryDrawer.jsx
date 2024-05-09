import React from "react";
import { Drawer } from "@mui/material";
import QDFooter from "./QDFooter";
import { Container, Stack } from "@mui/material";
import Queries from "./Queries";

export default function QueryDrawer(props) {
    return (
        <div>
            <div
                style={{
                    background: "transparent",
                    height: "100vh",
                    position: "fixed",
                    top: "0",
                }}
                onClick={props.onClose}
            >
                <Drawer anchor="bottom" open={true}>
                    <Container maxWidth="md">
                        <Stack>
                            <div
                                style={{
                                    maxHeight: "100vh",
                                    padding: "2px",
                                }}
                            >
                                <Queries onQuerySelect={props.onQuerySelect} />
                                <QDFooter onClick={props.onClose} />
                            </div>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: "0",
                                    left: "0",
                                    width: "100%",
                                    background: "#fff",
                                    borderTop: "1px solid #eee",
                                }}
                            >
                                <Container maxWidth="md">
                                    <QDFooter onClick={props.onClose} />
                                </Container>
                            </div>
                        </Stack>
                    </Container>
                </Drawer>
            </div>
        </div>
    );
}

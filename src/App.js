import "./App.css";

import { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import SiteHeader from "./components/SiteHeader";
import SiteBody from "./components/SiteBody";
import QueryDrawer from "./components/query-drawer/QueryDrawer";

function App() {
    const [queryID, setQueryID] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);

    const openDrawer = () => {
        setShowDrawer(true);
    };

    const closeDrawer = () => {
        setShowDrawer(false);
    };

    const handleQuerySelect = (id) => {
        setQueryID(id);
        setShowDrawer(false);
    };

    return (
        <div>
            <div
                style={{ height: "100vh" }}
                onClick={(e) => {
                    setShowDrawer(false);
                }}
            >
                <Container maxWidth="md" style={{ background: "yellow" }}>
                    <Stack>
                        <SiteHeader openDrawer={openDrawer} />
                        <SiteBody
                            queryID={queryID}
                            isDrawerOpen={showDrawer}
                            openDrawer={openDrawer}
                        />
                    </Stack>
                </Container>
            </div>
            {showDrawer && (
                <QueryDrawer
                    onClose={closeDrawer}
                    onQuerySelect={handleQuerySelect}
                />
            )}
        </div>
    );
}

export default App;

import "./App.css";

import { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import SiteHeader from "./components/SiteHeader";
import SiteBody from "./components/SiteBody";
import QueryDrawer from "./components/query-drawer/QueryDrawer";

function App() {
    const [query, setQuery] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);

    const openDrawer = () => {
        setShowDrawer(true);
    };

    const handleQuerySelect = (query) => {
        setQuery(query);
        setShowDrawer(false);
    };

    return (
        <div
            style={{ height: "100vh" }}
            onClick={(e) => {
                setShowDrawer(false);
            }}
        >
            <Container maxWidth="md" style={{ background: "yellow" }}>
                <Stack>
                    <SiteHeader onQueryButtonClick={openDrawer} />
                    <SiteBody
                        query={query}
                        isDrawerOpen={showDrawer}
                        openDrawer={openDrawer}
                    />
                </Stack>
                {showDrawer && (
                    <QueryDrawer
                        onClose={() => setShowDrawer(false)}
                        onQuerySelect={handleQuerySelect}
                    />
                )}
            </Container>
        </div>
    );
}

export default App;

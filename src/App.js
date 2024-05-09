import "./App.css";

import { useState } from "react";
import { Container, Stack } from "@mui/material";
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
                <Stack>
                    <Container maxWidth="md">
                        <SiteHeader openDrawer={openDrawer} />
                    </Container>
                    <div
                        style={{
                            width: "100vw",
                            borderBottom: "1px solid #ddd",
                        }}
                    ></div>
                    <Container maxWidth="md">
                        <SiteBody
                            queryID={queryID}
                            isDrawerOpen={showDrawer}
                            openDrawer={openDrawer}
                        />
                    </Container>
                </Stack>
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

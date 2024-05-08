import React from "react";
import GetStartedButton from "./buttons/GetStartedButton";
import QueryAndGrid from "./site-body/QueryAndGrid";

export default function SiteBody(props) {
    return (
        <div style={{ height: "100%" }}>
            {props.query === null ? (
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                    <GetStartedButton onClick={props.openDrawer} />
                </div>
            ) : (
                <QueryAndGrid query={props.query} />
            )}
        </div>
    );
}
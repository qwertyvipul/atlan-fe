import React from "react";
import SBQuery from "./SBQuery";
import SBGrid from "./SBGrid";

export default function QueryAndGrid(props) {
    return (
        <div key={props.queryID}>
            <SBQuery queryID={props.queryID} />
            <SBGrid queryID={props.queryID} />
        </div>
    );
}

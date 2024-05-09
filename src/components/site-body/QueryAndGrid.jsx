import React from "react";
import queries from "../../data/queries";
import SBQuery from "./SBQuery";
import SBGrid from "./SBGrid";

export default function QueryAndGrid(props) {
    return (
        <div>
            <SBQuery queryID={props.queryID} />
            <SBGrid queryID={props.queryID} />
        </div>
    );
}

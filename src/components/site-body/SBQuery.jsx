import React from "react";
import SQLQuery from "../SQLQuery";

import queries from "../../data/queries";

export default function SBQuery(props) {
    return (
        <div>
            <SQLQuery query={queries[props.queryID].query} />
        </div>
    );
}

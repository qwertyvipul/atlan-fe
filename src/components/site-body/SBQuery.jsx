import React from "react";

import queries from "../../data/queries";

export default function SBQuery(props) {
    return <div>{queries[props.queryID].query}</div>;
}

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import queries from "../../data/queries";
import SQLQuery from "../SQLQuery";

export default function SBQuery(props) {
    return (
        <div>
            <SQLQuery query={queries[props.queryID].query} />
        </div>
    );
}

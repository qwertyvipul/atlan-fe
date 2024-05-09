import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function SQLQuery(props) {
    return (
        <div>
            <SyntaxHighlighter language="sql">{props.query}</SyntaxHighlighter>
        </div>
    );
}

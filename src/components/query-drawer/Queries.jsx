import React from "react";
import { Paper, Box, Stack } from "@mui/material";
import QDQuery from "./QDQuery";

import queries from "../../data/data";
console.log({ queries });

export default function Queries(props) {
    return (
        <div>
            <Box
                sx={{
                    "& .MuiPaper-root": {
                        boxSizing: "border-box",
                        margin: "0.5rem 0",
                        padding: "1rem",
                        width: "100%",
                        alignItems: "center",
                    },
                }}
            >
                <Stack>
                    {queries.map(({ id, query, results }) => {
                        return (
                            <QDQuery
                                key={id}
                                id={id}
                                query={query}
                                onQuerySelect={props.onQuerySelect}
                            />
                        );
                    })}
                    <QDQuery
                        query={`SELECT Orders.OrderID, Customers.CustomerName,
                        Orders.OrderDate FROM Orders INNER JOIN Customers ON
                        Orders.CustomerID=Customers.CustomerID;`}
                        onQuerySelect={props.onQuerySelect}
                    />
                    <QDQuery
                        query={`SELECT Orders.OrderID, Customers.CustomerName,
                        Orders.OrderDate FROM Orders INNER JOIN Customers ON
                        Orders.CustomerID=Customers.CustomerID;`}
                        onQuerySelect={props.onQuerySelect}
                    />
                    <QDQuery
                        query={`SELECT Orders.OrderID, Customers.CustomerName,
                        Orders.OrderDate FROM Orders INNER JOIN Customers ON
                        Orders.CustomerID=Customers.CustomerID;`}
                        onQuerySelect={props.onQuerySelect}
                    />
                    <QDQuery
                        query={`SELECT Orders.OrderID, Customers.CustomerName,
                        Orders.OrderDate FROM Orders INNER JOIN Customers ON
                        Orders.CustomerID=Customers.CustomerID;`}
                        onQuerySelect={props.onQuerySelect}
                    />
                </Stack>
            </Box>
        </div>
    );
}

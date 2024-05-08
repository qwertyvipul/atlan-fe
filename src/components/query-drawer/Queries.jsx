import React from "react";
import { Paper, Box, Stack } from "@mui/material";
import QDQuery from "./QDQuery";

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

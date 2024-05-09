import React from "react";

import queries from "../../data/queries";
import { DataGrid } from "@mui/x-data-grid";

export default function SBGrid(props) {
    const results = queries[props.queryID].results.map((result, _idx) => ({
        _idx: _idx,
        ...result,
    }));
    const result = results[0];

    const columns = Object.keys(result).map((key) => {
        if (key === "_idx") {
            return {
                field: key,
                headerName: "Hey",
            };
        }
        return {
            field: key,
            headerName: key,
            sortable: true,
            width: 150,
        };
    });
    return (
        <div style={{ background: "lightgreen" }}>
            <DataGrid
                getRowId={(row) => row._idx}
                rows={results}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                columnVisibilityModel={{
                    _idx: false,
                }}
                disableRowSelectionOnClick
            />
        </div>
    );
}

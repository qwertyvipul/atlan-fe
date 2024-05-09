import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import queries from "../../data/queries";

export default React.memo(function SBGrid(props) {
    const results = queries[props.queryID].results.map((result, _idx) => ({
        _idx: _idx,
        ...result,
    }));
    const result = results[0];

    const columns = Object.keys(result).map((key) => {
        return {
            field: key,
            headerName: key,
            sortable: true,
            width: 150,
        };
    });
    return (
        <div>
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
                sx={{
                    "& .MuiDataGrid-columnHeaders > div": {
                        background: "#ddd !important",
                    },
                }}
            />
        </div>
    );
});

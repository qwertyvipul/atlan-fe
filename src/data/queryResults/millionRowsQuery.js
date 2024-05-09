const queryResults = {
    query: "SELECT * FROM big_table",
    results: Array(1000000)
        .fill(null)
        .map((_, idx) => ({
            UniqueID: idx,
            CustomerName: `Name ${idx}`,
        })),
};

export default queryResults;

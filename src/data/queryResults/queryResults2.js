const queryResults = {
    query: `SELECT * FROM Products
    ORDER BY Price;`,
    results: [
        {
            ProductID: 33,
            ProductName: "Geitost",
            SupplierID: 15,
            CategoryID: 4,
            Unit: "500 g",
            Price: 2.5,
        },
        {
            ProductID: 24,
            ProductName: "Guaraná Fantástica",
            SupplierID: 10,
            CategoryID: 1,
            Unit: "12 - 355 ml cans",
            Price: 4.5,
        },
        {
            ProductID: 13,
            ProductName: "Konbu",
            SupplierID: 6,
            CategoryID: 8,
            Unit: "2 kg box",
            Price: 6,
        },
        {
            ProductID: 52,
            ProductName: "Filo Mix",
            SupplierID: 24,
            CategoryID: 5,
            Unit: "16 - 2 kg boxes",
            Price: 7,
        },
        {
            ProductID: 54,
            ProductName: "Tourtière",
            SupplierID: 25,
            CategoryID: 6,
            Unit: "16 pies",
            Price: 7.45,
        },
        {
            ProductID: 75,
            ProductName: "Rhönbräu Klosterbier",
            SupplierID: 12,
            CategoryID: 1,
            Unit: "24 - 0.5 l bottles",
            Price: 7.75,
        },
        {
            ProductID: 23,
            ProductName: "Tunnbröd",
            SupplierID: 9,
            CategoryID: 5,
            Unit: "12 - 250 g pkgs.",
            Price: 9,
        },
        {
            ProductID: 19,
            ProductName: "Teatime Chocolate Biscuits",
            SupplierID: 8,
            CategoryID: 3,
            Unit: "10 boxes x 12 pieces",
            Price: 9.2,
        },
    ],
};

export default queryResults;

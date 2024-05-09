const queryResults = {
    query: `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
    FROM Orders
    INNER JOIN Customers
    ON Orders.CustomerID=Customers.CustomerID;`,
    results: [
        {
            OrderID: 10308,
            CustomerName: "Ana Trujillo Emparedados y helados",
            OrderDate: "9/18/1996",
        },
        {
            OrderID: 10365,
            CustomerName: "Antonio Moreno Taquería",
            OrderDate: "11/27/1996",
        },
        {
            OrderID: 10383,
            CustomerName: "Around the Horn",
            OrderDate: "12/16/1996",
        },
        {
            OrderID: 10355,
            CustomerName: "Around the Horn",
            OrderDate: "11/15/1996",
        },
        {
            OrderID: 10278,
            CustomerName: "Berglunds snabbköp",
            OrderDate: "8/12/1996",
        },
        {
            OrderID: 10280,
            CustomerName: "Berglunds snabbköp",
            OrderDate: "8/14/1996",
        },
        {
            OrderID: 10384,
            CustomerName: "Berglunds snabbköp",
            OrderDate: "12/16/1996",
        },
        {
            OrderID: 10436,
            CustomerName: "Blondel père et fils",
            OrderDate: "2/5/1997",
        },
        {
            OrderID: 10297,
            CustomerName: "Blondel père et fils",
            OrderDate: "9/4/1996",
        },
        {
            OrderID: 10360,
            CustomerName: "Blondel père et fils",
            OrderDate: "11/22/1996",
        },
        {
            OrderID: 10265,
            CustomerName: "Blondel père et fils",
            OrderDate: "7/25/1996",
        },
        {
            OrderID: 10326,
            CustomerName: "Bólido Comidas preparadas",
            OrderDate: "10/10/1996",
        },
        {
            OrderID: 10331,
            CustomerName: "Bon app'",
            OrderDate: "10/16/1996",
        },
        {
            OrderID: 10340,
            CustomerName: "Bon app'",
            OrderDate: "10/29/1996",
        },
        {
            OrderID: 10362,
            CustomerName: "Bon app'",
            OrderDate: "11/25/1996",
        },
        {
            OrderID: 10389,
            CustomerName: "Bottom-Dollar Marketse",
            OrderDate: "12/20/1996",
        },
        {
            OrderID: 10410,
            CustomerName: "Bottom-Dollar Marketse",
            OrderDate: "1/10/1997",
        },
        {
            OrderID: 10411,
            CustomerName: "Bottom-Dollar Marketse",
            OrderDate: "1/10/1997",
        },
        {
            OrderID: 10431,
            CustomerName: "Bottom-Dollar Marketse",
            OrderDate: "1/30/1997",
        },
        {
            OrderID: 10289,
            CustomerName: "B's Beverages",
            OrderDate: "8/26/1996",
        },
        {
            OrderID: 10259,
            CustomerName: "Centro comercial Moctezuma",
            OrderDate: "7/18/1996",
        },
        {
            OrderID: 10370,
            CustomerName: "Chop-suey Chinese",
            OrderDate: "12/3/1996",
        },
        {
            OrderID: 10254,
            CustomerName: "Chop-suey Chinese",
            OrderDate: "7/11/1996",
        },
        {
            OrderID: 10290,
            CustomerName: "Comércio Mineiro",
            OrderDate: "8/27/1996",
        },
        {
            OrderID: 10435,
            CustomerName: "Consolidated Holdings",
            OrderDate: "2/4/1997",
        },
        {
            OrderID: 10391,
            CustomerName: "Drachenblut Delikatessend",
            OrderDate: "12/23/1996",
        },
        {
            OrderID: 10363,
            CustomerName: "Drachenblut Delikatessend",
            OrderDate: "11/26/1996",
        },
        {
            OrderID: 10311,
            CustomerName: "Du monde entier",
            OrderDate: "9/20/1996",
        },
        {
            OrderID: 10364,
            CustomerName: "Eastern Connection",
            OrderDate: "11/26/1996",
        },
        {
            OrderID: 10400,
            CustomerName: "Eastern Connection",
            OrderDate: "1/1/1997",
        },
        {
            OrderID: 10368,
            CustomerName: "Ernst Handel",
            OrderDate: "11/29/1996",
        },
        {
            OrderID: 10403,
            CustomerName: "Ernst Handel",
            OrderDate: "1/3/1997",
        },
        {
            OrderID: 10390,
            CustomerName: "Ernst Handel",
            OrderDate: "12/23/1996",
        },
        {
            OrderID: 10263,
            CustomerName: "Ernst Handel",
            OrderDate: "7/23/1996",
        },
        {
            OrderID: 10442,
            CustomerName: "Ernst Handel",
            OrderDate: "2/11/1997",
        },
        {
            OrderID: 10258,
            CustomerName: "Ernst Handel",
            OrderDate: "7/17/1996",
        },
        {
            OrderID: 10382,
            CustomerName: "Ernst Handel",
            OrderDate: "12/13/1996",
        },
        {
            OrderID: 10430,
            CustomerName: "Ernst Handel",
            OrderDate: "1/30/1997",
        },
        {
            OrderID: 10351,
            CustomerName: "Ernst Handel",
            OrderDate: "11/11/1996",
        },
        {
            OrderID: 10402,
            CustomerName: "Ernst Handel",
            OrderDate: "1/2/1997",
        },
        {
            OrderID: 10386,
            CustomerName: "Familia Arquibaldo",
            OrderDate: "12/18/1996",
        },
        {
            OrderID: 10347,
            CustomerName: "Familia Arquibaldo",
            OrderDate: "11/6/1996",
        },
        {
            OrderID: 10414,
            CustomerName: "Familia Arquibaldo",
            OrderDate: "1/14/1997",
        },
        {
            OrderID: 10408,
            CustomerName: "Folies gourmandes",
            OrderDate: "1/8/1997",
        },
        {
            OrderID: 10378,
            CustomerName: "Folk och fä HB",
            OrderDate: "12/10/1996",
        },
        {
            OrderID: 10327,
            CustomerName: "Folk och fä HB",
            OrderDate: "10/11/1996",
        },
        {
            OrderID: 10264,
            CustomerName: "Folk och fä HB",
            OrderDate: "7/24/1996",
        },
        {
            OrderID: 10434,
            CustomerName: "Folk och fä HB",
            OrderDate: "2/3/1997",
        },
        {
            OrderID: 10337,
            CustomerName: "Frankenversand",
            OrderDate: "10/24/1996",
        },
        {
            OrderID: 10396,
            CustomerName: "Frankenversand",
            OrderDate: "12/27/1996",
        },
        {
            OrderID: 10267,
            CustomerName: "Frankenversand",
            OrderDate: "7/29/1996",
        },
        {
            OrderID: 10342,
            CustomerName: "Frankenversand",
            OrderDate: "10/30/1996",
        },
        {
            OrderID: 10422,
            CustomerName: "Franchi S.p.A.",
            OrderDate: "1/22/1997",
        },
        {
            OrderID: 10328,
            CustomerName: "Furia Bacalhau e Frutos do Mar",
            OrderDate: "10/14/1996",
        },
        {
            OrderID: 10352,
            CustomerName: "Furia Bacalhau e Frutos do Mar",
            OrderDate: "11/12/1996",
        },
        {
            OrderID: 10366,
            CustomerName: "Galería del gastrónomo",
            OrderDate: "11/28/1996",
        },
        {
            OrderID: 10426,
            CustomerName: "Galería del gastrónomo",
            OrderDate: "1/27/1997",
        },
        {
            OrderID: 10303,
            CustomerName: "Godos Cocina Típica",
            OrderDate: "9/11/1996",
        },
        {
            OrderID: 10423,
            CustomerName: "Gourmet Lanchonetes",
            OrderDate: "1/23/1997",
        },
        {
            OrderID: 10268,
            CustomerName: "GROSELLA-Restaurante",
            OrderDate: "7/30/1996",
        },
        {
            OrderID: 10253,
            CustomerName: "Hanari Carnes",
            OrderDate: "7/10/1996",
        },
        {
            OrderID: 10250,
            CustomerName: "Hanari Carnes",
            OrderDate: "7/8/1996",
        },
        {
            OrderID: 10257,
            CustomerName: "HILARIÓN-Abastos",
            OrderDate: "7/16/1996",
        },
        {
            OrderID: 10395,
            CustomerName: "HILARIÓN-Abastos",
            OrderDate: "12/26/1996",
        },
        {
            OrderID: 10415,
            CustomerName: "Hungry Coyote Import Store",
            OrderDate: "1/15/1997",
        },
        {
            OrderID: 10375,
            CustomerName: "Hungry Coyote Import Store",
            OrderDate: "12/6/1996",
        },
        {
            OrderID: 10394,
            CustomerName: "Hungry Coyote Import Store",
            OrderDate: "12/25/1996",
        },
        {
            OrderID: 10380,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "12/12/1996",
        },
        {
            OrderID: 10309,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "9/19/1996",
        },
        {
            OrderID: 10429,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "1/29/1997",
        },
        {
            OrderID: 10298,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "9/5/1996",
        },
        {
            OrderID: 10373,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "12/5/1996",
        },
        {
            OrderID: 10335,
            CustomerName: "Hungry Owl All-Night Grocers",
            OrderDate: "10/22/1996",
        },
        {
            OrderID: 10315,
            CustomerName: "Island Trading",
            OrderDate: "9/26/1996",
        },
        {
            OrderID: 10318,
            CustomerName: "Island Trading",
            OrderDate: "10/1/1996",
        },
        {
            OrderID: 10321,
            CustomerName: "Island Trading",
            OrderDate: "10/3/1996",
        },
        {
            OrderID: 10323,
            CustomerName: "Königlich Essen",
            OrderDate: "10/7/1996",
        },
        {
            OrderID: 10325,
            CustomerName: "Königlich Essen",
            OrderDate: "10/9/1996",
        },
        {
            OrderID: 10413,
            CustomerName: "La maison d'Asie",
            OrderDate: "1/14/1997",
        },
        {
            OrderID: 10371,
            CustomerName: "La maison d'Asie",
            OrderDate: "12/3/1996",
        },
        {
            OrderID: 10358,
            CustomerName: "La maison d'Asie",
            OrderDate: "11/20/1996",
        },
        {
            OrderID: 10350,
            CustomerName: "La maison d'Asie",
            OrderDate: "11/11/1996",
        },
        {
            OrderID: 10425,
            CustomerName: "La maison d'Asie",
            OrderDate: "1/24/1997",
        },
        {
            OrderID: 10284,
            CustomerName: "Lehmanns Marktstand",
            OrderDate: "8/19/1996",
        },
        {
            OrderID: 10343,
            CustomerName: "Lehmanns Marktstand",
            OrderDate: "10/31/1996",
        },
        {
            OrderID: 10279,
            CustomerName: "Lehmanns Marktstand",
            OrderDate: "8/13/1996",
        },
        {
            OrderID: 10381,
            CustomerName: "LILA-Supermercado",
            OrderDate: "12/12/1996",
        },
        {
            OrderID: 10283,
            CustomerName: "LILA-Supermercado",
            OrderDate: "8/16/1996",
        },
        {
            OrderID: 10357,
            CustomerName: "LILA-Supermercado",
            OrderDate: "11/19/1996",
        },
        {
            OrderID: 10296,
            CustomerName: "LILA-Supermercado",
            OrderDate: "9/3/1996",
        },
        {
            OrderID: 10330,
            CustomerName: "LILA-Supermercado",
            OrderDate: "10/16/1996",
        },
        {
            OrderID: 10405,
            CustomerName: "LINO-Delicateses",
            OrderDate: "1/6/1997",
        },
        {
            OrderID: 10307,
            CustomerName: "Lonesome Pine Restaurant",
            OrderDate: "9/17/1996",
        },
        {
            OrderID: 10317,
            CustomerName: "Lonesome Pine Restaurant",
            OrderDate: "9/30/1996",
        },
        {
            OrderID: 10300,
            CustomerName: "Magazzini Alimentari Riuniti",
            OrderDate: "9/9/1996",
        },
        {
            OrderID: 10404,
            CustomerName: "Magazzini Alimentari Riuniti",
            OrderDate: "1/3/1997",
        },
        {
            OrderID: 10275,
            CustomerName: "Magazzini Alimentari Riuniti",
            OrderDate: "8/7/1996",
        },
        {
            OrderID: 10332,
            CustomerName: "Mère Paillarde",
            OrderDate: "10/17/1996",
        },
        {
            OrderID: 10339,
            CustomerName: "Mère Paillarde",
            OrderDate: "10/28/1996",
        },
        {
            OrderID: 10424,
            CustomerName: "Mère Paillarde",
            OrderDate: "1/23/1997",
        },
        {
            OrderID: 10439,
            CustomerName: "Mère Paillarde",
            OrderDate: "2/7/1997",
        },
        {
            OrderID: 10376,
            CustomerName: "Mère Paillarde",
            OrderDate: "12/9/1996",
        },
        {
            OrderID: 10277,
            CustomerName: "Morgenstern Gesundkost",
            OrderDate: "8/9/1996",
        },
        {
            OrderID: 10409,
            CustomerName: "Océano Atlántico Ltda.",
            OrderDate: "1/9/1997",
        },
        {
            OrderID: 10260,
            CustomerName: "Old World Delicatessen",
            OrderDate: "7/19/1996",
        },
        {
            OrderID: 10305,
            CustomerName: "Old World Delicatessen",
            OrderDate: "9/13/1996",
        },
        {
            OrderID: 10338,
            CustomerName: "Old World Delicatessen",
            OrderDate: "10/25/1996",
        },
        {
            OrderID: 10441,
            CustomerName: "Old World Delicatessen",
            OrderDate: "2/10/1997",
        },
        {
            OrderID: 10407,
            CustomerName: "Ottilies Käseladen",
            OrderDate: "1/7/1997",
        },
        {
            OrderID: 10354,
            CustomerName: "Pericles Comidas clásicas",
            OrderDate: "11/14/1996",
        },
        {
            OrderID: 10322,
            CustomerName: "Pericles Comidas clásicas",
            OrderDate: "10/4/1996",
        },
        {
            OrderID: 10353,
            CustomerName: "Piccolo und mehr",
            OrderDate: "11/13/1996",
        },
        {
            OrderID: 10392,
            CustomerName: "Piccolo und mehr",
            OrderDate: "12/24/1996",
        },
        {
            OrderID: 10427,
            CustomerName: "Piccolo und mehr",
            OrderDate: "1/27/1997",
        },
        {
            OrderID: 10397,
            CustomerName: "Princesa Isabel Vinhoss",
            OrderDate: "12/27/1996",
        },
        {
            OrderID: 10433,
            CustomerName: "Princesa Isabel Vinhoss",
            OrderDate: "2/3/1997",
        },
        {
            OrderID: 10336,
            CustomerName: "Princesa Isabel Vinhoss",
            OrderDate: "10/23/1996",
        },
        {
            OrderID: 10421,
            CustomerName: "Que Delícia",
            OrderDate: "1/21/1997",
        },
        {
            OrderID: 10261,
            CustomerName: "Que Delícia",
            OrderDate: "7/19/1996",
        },
        {
            OrderID: 10379,
            CustomerName: "Que Delícia",
            OrderDate: "12/11/1996",
        },
        {
            OrderID: 10291,
            CustomerName: "Que Delícia",
            OrderDate: "8/27/1996",
        },
        {
            OrderID: 10406,
            CustomerName: "Queen Cozinha",
            OrderDate: "1/7/1997",
        },
        {
            OrderID: 10372,
            CustomerName: "Queen Cozinha",
            OrderDate: "12/4/1996",
        },
        {
            OrderID: 10418,
            CustomerName: "QUICK-Stop",
            OrderDate: "1/17/1997",
        },
        {
            OrderID: 10273,
            CustomerName: "QUICK-Stop",
            OrderDate: "8/5/1996",
        },
        {
            OrderID: 10361,
            CustomerName: "QUICK-Stop",
            OrderDate: "11/22/1996",
        },
        {
            OrderID: 10285,
            CustomerName: "QUICK-Stop",
            OrderDate: "8/20/1996",
        },
        {
            OrderID: 10313,
            CustomerName: "QUICK-Stop",
            OrderDate: "9/24/1996",
        },
        {
            OrderID: 10286,
            CustomerName: "QUICK-Stop",
            OrderDate: "8/21/1996",
        },
        {
            OrderID: 10345,
            CustomerName: "QUICK-Stop",
            OrderDate: "11/4/1996",
        },
        {
            OrderID: 10262,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "7/22/1996",
        },
        {
            OrderID: 10272,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "8/2/1996",
        },
        {
            OrderID: 10294,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "8/30/1996",
        },
        {
            OrderID: 10346,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "11/5/1996",
        },
        {
            OrderID: 10401,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "1/1/1997",
        },
        {
            OrderID: 10314,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "9/25/1996",
        },
        {
            OrderID: 10316,
            CustomerName: "Rattlesnake Canyon Grocery",
            OrderDate: "9/27/1996",
        },
        {
            OrderID: 10288,
            CustomerName: "Reggiani Caseifici",
            OrderDate: "8/23/1996",
        },
        {
            OrderID: 10428,
            CustomerName: "Reggiani Caseifici",
            OrderDate: "1/28/1997",
        },
        {
            OrderID: 10443,
            CustomerName: "Reggiani Caseifici",
            OrderDate: "2/12/1997",
        },
        {
            OrderID: 10287,
            CustomerName: "Ricardo Adocicados",
            OrderDate: "8/22/1996",
        },
        {
            OrderID: 10299,
            CustomerName: "Ricardo Adocicados",
            OrderDate: "9/6/1996",
        },
        {
            OrderID: 10419,
            CustomerName: "Richter Supermarkt",
            OrderDate: "1/20/1997",
        },
        {
            OrderID: 10255,
            CustomerName: "Richter Supermarkt",
            OrderDate: "7/12/1996",
        },
        {
            OrderID: 10281,
            CustomerName: "Romero y tomillo",
            OrderDate: "8/14/1996",
        },
        {
            OrderID: 10282,
            CustomerName: "Romero y tomillo",
            OrderDate: "8/15/1996",
        },
        {
            OrderID: 10306,
            CustomerName: "Romero y tomillo",
            OrderDate: "9/16/1996",
        },
        {
            OrderID: 10387,
            CustomerName: "Santé Gourmet",
            OrderDate: "12/18/1996",
        },
        {
            OrderID: 10398,
            CustomerName: "Save-a-lot Markets",
            OrderDate: "12/30/1996",
        },
        {
            OrderID: 10324,
            CustomerName: "Save-a-lot Markets",
            OrderDate: "10/8/1996",
        },
        {
            OrderID: 10393,
            CustomerName: "Save-a-lot Markets",
            OrderDate: "12/25/1996",
        },
        {
            OrderID: 10440,
            CustomerName: "Save-a-lot Markets",
            OrderDate: "2/10/1997",
        },
        {
            OrderID: 10359,
            CustomerName: "Seven Seas Imports",
            OrderDate: "11/21/1996",
        },
        {
            OrderID: 10388,
            CustomerName: "Seven Seas Imports",
            OrderDate: "12/19/1996",
        },
        {
            OrderID: 10377,
            CustomerName: "Seven Seas Imports",
            OrderDate: "12/9/1996",
        },
        {
            OrderID: 10417,
            CustomerName: "Simons bistro",
            OrderDate: "1/16/1997",
        },
        {
            OrderID: 10341,
            CustomerName: "Simons bistro",
            OrderDate: "10/29/1996",
        },
        {
            OrderID: 10432,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "1/31/1997",
        },
        {
            OrderID: 10369,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "12/2/1996",
        },
        {
            OrderID: 10271,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "8/1/1996",
        },
        {
            OrderID: 10329,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "10/15/1996",
        },
        {
            OrderID: 10349,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "11/8/1996",
        },
        {
            OrderID: 10385,
            CustomerName: "Split Rail Beer & Ale",
            OrderDate: "12/17/1996",
        },
        {
            OrderID: 10302,
            CustomerName: "Suprêmes délices",
            OrderDate: "9/10/1996",
        },
        {
            OrderID: 10252,
            CustomerName: "Suprêmes délices",
            OrderDate: "7/9/1996",
        },
        {
            OrderID: 10310,
            CustomerName: "The Big Cheese",
            OrderDate: "9/20/1996",
        },
        {
            OrderID: 10438,
            CustomerName: "Toms Spezialitäten",
            OrderDate: "2/6/1997",
        },
        {
            OrderID: 10304,
            CustomerName: "Tortuga Restaurante",
            OrderDate: "9/12/1996",
        },
        {
            OrderID: 10319,
            CustomerName: "Tortuga Restaurante",
            OrderDate: "10/2/1996",
        },
        {
            OrderID: 10293,
            CustomerName: "Tortuga Restaurante",
            OrderDate: "8/29/1996",
        },
        {
            OrderID: 10276,
            CustomerName: "Tortuga Restaurante",
            OrderDate: "8/8/1996",
        },
        {
            OrderID: 10249,
            CustomerName: "Tradição Hipermercados",
            OrderDate: "7/5/1996",
        },
        {
            OrderID: 10292,
            CustomerName: "Tradição Hipermercados",
            OrderDate: "8/28/1996",
        },
        {
            OrderID: 10399,
            CustomerName: "Vaffeljernet",
            OrderDate: "12/31/1996",
        },
        {
            OrderID: 10367,
            CustomerName: "Vaffeljernet",
            OrderDate: "11/28/1996",
        },
        {
            OrderID: 10334,
            CustomerName: "Victuailles en stock",
            OrderDate: "10/21/1996",
        },
        {
            OrderID: 10251,
            CustomerName: "Victuailles en stock",
            OrderDate: "7/8/1996",
        },
        {
            OrderID: 10274,
            CustomerName: "Vins et alcools Chevalier",
            OrderDate: "8/6/1996",
        },
        {
            OrderID: 10295,
            CustomerName: "Vins et alcools Chevalier",
            OrderDate: "9/2/1996",
        },
        {
            OrderID: 10356,
            CustomerName: "Die Wandernde Kuh",
            OrderDate: "11/18/1996",
        },
        {
            OrderID: 10301,
            CustomerName: "Die Wandernde Kuh",
            OrderDate: "9/9/1996",
        },
        {
            OrderID: 10348,
            CustomerName: "Die Wandernde Kuh",
            OrderDate: "11/7/1996",
        },
        {
            OrderID: 10312,
            CustomerName: "Die Wandernde Kuh",
            OrderDate: "9/23/1996",
        },
        {
            OrderID: 10412,
            CustomerName: "Wartian Herkku",
            OrderDate: "1/13/1997",
        },
        {
            OrderID: 10437,
            CustomerName: "Wartian Herkku",
            OrderDate: "2/5/1997",
        },
        {
            OrderID: 10320,
            CustomerName: "Wartian Herkku",
            OrderDate: "10/3/1996",
        },
        {
            OrderID: 10266,
            CustomerName: "Wartian Herkku",
            OrderDate: "7/26/1996",
        },
        {
            OrderID: 10333,
            CustomerName: "Wartian Herkku",
            OrderDate: "10/18/1996",
        },
        {
            OrderID: 10270,
            CustomerName: "Wartian Herkku",
            OrderDate: "8/1/1996",
        },
        {
            OrderID: 10416,
            CustomerName: "Wartian Herkku",
            OrderDate: "1/16/1997",
        },
        {
            OrderID: 10256,
            CustomerName: "Wellington Importadora",
            OrderDate: "7/15/1996",
        },
        {
            OrderID: 10420,
            CustomerName: "Wellington Importadora",
            OrderDate: "1/21/1997",
        },
        {
            OrderID: 10269,
            CustomerName: "White Clover Markets",
            OrderDate: "7/31/1996",
        },
        {
            OrderID: 10344,
            CustomerName: "White Clover Markets",
            OrderDate: "11/1/1996",
        },
        {
            OrderID: 10248,
            CustomerName: "Wilman Kala",
            OrderDate: "7/4/1996",
        },
        {
            OrderID: 10374,
            CustomerName: "Wolski",
            OrderDate: "12/5/1996",
        },
    ],
};

export default queryResults;

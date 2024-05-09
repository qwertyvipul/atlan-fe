# atlan-fe

-   [Website](http://atlan-fe.qwertyvipul.io/)
-   [GitHub](https://github.com/qwertyvipul/atlan-fe)
-   [Brainstorming, design and though process](https://lucid.app/lucidchart/75d0fab6-2f30-4fc9-a156-71f42374e7be/view)

## Development

The project was initialized using [create-react-app](https://create-react-app.dev/) and uses [Material UI](https://mui.com/material-ui/) as the base UI components library and [MUI X Data Grid](https://mui.com/x/api/data-grid/data-grid/) to render React data grids.

### Steps

```bash
# Setup project
npx create-react-app atlan-fe

# Clean un-necessary code
# Install MUI
npm install @mui/material @emotion/react @emotion/styled

# Install MUI X Data Grid
npm install @mui/x-data-grid

# Syntax highlighter
npm install react-syntax-highlighter
```

## Screenshots

-   The home page has `Get Started` call to action.
    ![Get started](/images/i1.png)

-   Clicking `Get Started` or `New Query` buttons opens up the query drawer, with the list of pre-defined queries.
    ![Open query drawer](/images/i2.png)

*   You can use the `Select` button corresponding to each query to select that query.
    ![Browser through queries](/images/i3.png)

*   Clicking the `Select` button closes the drawer and render the Grid on the home page.
    ![Select a query](/images/i4.png)

*   You can also render millions of rows in the grid without any concern.
    ![Render million rows](/images/i5.png)

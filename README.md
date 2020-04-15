# plugsheet
Quickly serve large table pages with colored cell data.

### Makes use of
- Node.js
- [socket.io](https://socket.io/)
- [Tabulator](http://tabulator.info/)

Updates connected clients upon receiving a request to `/update` with new JSON data in the following format

```json
{
    "colors": {
        "2,1": "#f00"
    },
    "data": [
        {"column 1": "r1c1", "column 2": "r1c2"},
        {"column 2": "r2c1", "column 2": "r2c2"}
    ]
}
```

The previous data would render a 2x2 table with the third cell (row 2, column 1) colored red.
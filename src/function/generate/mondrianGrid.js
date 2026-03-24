/* A S S I G N
* * * * * * */

// Split item
// ==> Split item into two independent items
// ==> Save item coordinates in Array
function splitItem({

    row = 1,                // row
    column = 1,             // column
    width = 1,              // width
    height = 1,             // height

    centerDrift = 0,        // 0 split at center, 1 split randomly
    splitWidth = true       // split along width

}) {

    // Filter out items that are too small
    const splitHeight = !splitWidth;
    if (splitWidth && width < 2) return [{ column, row, width, height }];
    if (splitHeight && height < 2) return [{ column, row, width, height }];

    // Determine split point
    const span = splitWidth ? width : height;
    const center = span / 2;
    const range = span / 2 - 1;
    const drift = (Math.random() * 2 - 1) * centerDrift;
    const split = Math.round(center + range * drift);

    // Return split items
    return [{
        row: row,
        column: column,
        width: splitWidth ? split : width,
        height: splitHeight ? split : height
    }, {
        row: splitHeight ? row + split : row,
        column: splitWidth ? column + split : column,
        width: splitWidth ? width - split : width,
        height: splitHeight ? height - split : height
    }];

}

/* E X P O R T
* * * * * * */

// Mondrian grid
// ==> Create Mondrian grid of randomly distributed items
// ==> Save item coordinates in Array
export default function mondrianGrid({

    rows = 2,
    columns = 2,
    cells = rows * columns,
    items = 4

}) {

    // Make sure there's space
    if (rows * columns * items === 0) return [];
    cells = Math.min(cells, rows * columns);
    items = Math.min(items, cells);

    // Build item Array
    const itemArray = [{ row: 1, column: 1, width: columns, height: rows }];
    for (let index = 1; index < items; index++) {

        // Add items with areas that can be split
        // Add multiple copies of items with large areas
        let itemIndex = -1;
        const array = itemArray.reduce((array, item) => {
            itemIndex++;
            const area = item.width * item.height;
            if (area > 1)
                for (let i = 0; i < area; i++)
                    array.push({ ...item, index: itemIndex});
            return array;
        }, []);

        // Pick item at random
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];

        // Split item in two
        const centerDrift = Math.max(0, (items / cells - 0.2) * 0.25);
        const splitWidth =
            item.width > item.height ? true :
                item.width < item.height ? false :
                    Math.random() > 0.5 ? true : false;
        const [itemA, itemB] = splitItem({ ...item, centerDrift, splitWidth });

        // Replace item in array
        itemArray.splice(item.index, 1);
        itemArray.push(itemA, itemB);

    }

    // Return item array
    return itemArray;

}
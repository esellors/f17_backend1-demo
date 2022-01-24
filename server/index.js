const express = require('express');
const app = express();
const cors = require('cors')

app.use( cors() )
app.use( express.json() )

const mockDb = [
    'pencil', 'pen', 'stick', 'dirt', 'leaf', 'elephant', 'the one ring', 'desk', 'lightbulb', 'my axe'
]

app.get('/api/inventory', function(req, res) {
    const { item } = req.query;

    if (item) {
        const filteredItems = mockDb.filter((el) => {
            return el.includes(item)
        })

        res.status(200).send(filteredItems)
    } else {
        console.log('hit')
        // res.sendStatus(200)
        res.status(200).send(mockDb)
    }
})

app.get('/api/inventory/:itemInd', (req, res) => {
    res.status(200).send(mockDb[+req.params.itemInd])
})




app.listen(5050, () => console.log('Server running on port 5050'))
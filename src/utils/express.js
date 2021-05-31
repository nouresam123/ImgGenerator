const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('All Copyright\'s Go\'s To: N1R0'))
app.listen(port, () => console.log(`Express App Is Online`))
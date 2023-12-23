import express from 'express';
const Stats = async () => {
const app = express();
const port = 6790;
const timeNow = new Date().toLocaleString("en-US", { timeZone: 'America/New_York' });

app.listen(port, () => console.log(`Status: listening at http://localhost:${port}`));

app.get('/stats', async (req, res) => { res.status(200).json({ Owner: "Jake Asunto", Time: timeNow.toString() }).end();
});
}

export default Stats;
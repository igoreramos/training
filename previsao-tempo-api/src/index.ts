import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/previsao-tempo", async (req: Request, res: Response) => {
    try {
        const apiKey = "2f1453bc17ca2b6457e52f20d1c0b916";
        const cidade = req.query.cidade as string;

        if (!cidade) {
            return res.status(400).json({ error: "Parâmetro cidade é obrigatório." });
        }

        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
        );

        const previsao = response.data.weather[0].description;
        res.json({ cidade, previsao });
    } catch (error: any) {
        console.error("Erro:", error.message);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});

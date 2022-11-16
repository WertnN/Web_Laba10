const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

app.use("/getId", (_, res) => {
	// генерируем идентификатор
	const id = uuidv4();
	// отправляем его клиенту
	res.json(id);
});

app.listen(process.env.PORT || 3000, () => console.log("server ready"));
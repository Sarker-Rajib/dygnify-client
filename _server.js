const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middlewares
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://<--user-->:<--password-->@cluster0.yw8lqr5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const test = client.db("dygnify").collection("data");
    const applications = client.db("dygnify").collection("loanApplication");

    app.get("/test", async (req, res) => {
      const query = {};

      const result = await test.find(query).toArray();
      res.send(result);
    });

    app.post("/application", async (req, res) => {
      const form = req.body;

      const result = await applications.insertOne(form);
      res.send(result);
    });

    app.get("/applications", async (req, res) => {
      const query = {};

      const result = await applications.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
};
run();

// =============================================
app.get("/", (req, res) => {
  res.send("=== Welcome to dygnify server ===");
});

app.listen(port, (req, res) => {
  console.log(`dygnify server running on port ${port}`);
});

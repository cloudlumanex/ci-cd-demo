const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, I'm Emmanuel Ulu, a DevOps and Cloud Engineer passionate about AWS, Kubernetes, Terraform, and CI/CD.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
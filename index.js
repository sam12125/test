const app = require("express")()

app.get("/", (req,res) => 
    res.send("App working")
);

const PORT = process.env.PORT || 8080

app.listen(PORT)
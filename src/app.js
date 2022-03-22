const express = require("express");
const async = require("hbs/lib/async");
const mongoose = require("mongoose");
require("./db/conn");
const Employee = require("./models/employees");

const app = express();
const port = process.env.port || 3300;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello there");
});

app.post("/employee", async(req,res) => {
    try {
        const empData = new Employee(req.body);
        const result = await empData.save();
    }
    catch(e) {
        res.status(404).send(e);
    }
})

app.get("/employee", async(req,res) => {
    try {
        const result = await Employee.find();
        res.send(result);
    }
    catch(e) {
        res.status(404).send(e);
    }
})

app.patch("/employee/:name", async (req,res) => {
    try {
        const name = req.params.name;
        const updateEmployee = await Employee.findOneAndUpdate(name, req.body, {
            new:true
        });
    }
    catch(e) {
        console.log(e);
    }
})

app.delete("/employee/:name", async(req,res) => {
    try {
        const name = req.params.name;
        const deleteData = await Employee.findOneAndDelete();
    }
    catch(e) {
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});
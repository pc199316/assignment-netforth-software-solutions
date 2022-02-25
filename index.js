const express = require("express");
const mongoose = require("mongoose");
const db = require("./src/config/db.config");
const Userdata = require("./models/userSchemna");
const Jobdata = require("./models/jobSchema");
const app = express();


const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is working")
})


//fetching employee details
app.get("/employees", async (req, res) => {
    try {
        const employeedata1 = await Userdata.find();
        res.send(employeedata1);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }
})

//fetching one employee detail
app.get("/employees/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const employeedata2 = await Userdata.findById({ _id: _id });
        res.send(employeedata2);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }
})

// fetching employees by their jobs assigned
app.get("/employees/jobs/:jobassigned", async (req, res) => {
    try {
        const jobassigned = req.params.jobassigned;
        const employeedata3 = await Userdata.find({ jobassigned: jobassigned });
        res.send(employeedata3);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }
})


//fetching employees by their name
app.get("/employees/name/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const employeeName = await Userdata.find({ name: name });
        res.send(employeeName);
        // console.log(employeeName)
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }
})



//list of all jobs

app.get("/jobs", async (req, res) => {
    try {
        const jobdata1 = await Jobdata.find();
        res.send(jobdata1);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }
})
//employee data posting request
app.post("/employees", async (req, res) => {
    try {
        const user = new Userdata(req.body);
        await user.save();
        res.send(user);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }

})


// jobs data posting request
app.post("/jobs", async (req, res) => {
    try {
        const job = new Jobdata(req.body);
        await job.save();
        res.send(job);
        res.status(201);
    } catch (error) {
        res.status(500).send(error);
    }

})
//update data
app.patch("/employees/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateEmloyee = await Userdata.findByIdAndUpdate({ _id: _id }, req.body, {
            new: true
        });
        res.send(updateEmloyee);
        res.status(201);
    } catch (error) {
        res.status(404).send(error);
    }
})

//delete data

app.delete("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteEmployee = await Userdata.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteEmployee);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(port, () => {
    console.log(`Listning to Port Number ${port}`);
})
const router = require('express').Router();
const Task = require('../../models/task');

router.get('/', async(req, res) => {
    const allTasks = await Task.findAll()
    res.json(allTasks);
})


router.post('/', async (req ,res) => {
    const newTask = await Task.create ({
        
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    });

    res.json(newTask);
})


module.exports = router;
// add middlewares here related to actions
function validateAction (req, res, next) {
    const { notes, description } = req.body
    if (!notes || notes.trim() === '' || !description || description.trim() === '') {
        res.status(400).json({message: "missing required name and/or description field(s)"})
    } else {
        req.notes = notes.trim()
        req.description = description.trim()
        next()
    }
}
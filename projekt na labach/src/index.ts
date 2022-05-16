import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

let notes = [{
    id: 1,
    title: "req.body.title",
    content: "req.body.content",
    createDate: "req.body.createDate",
    tags: "req.body.tags"
}]

app.post('/note', function (req: Request, res: Response) {
  var note = {
      id: req.body.id || Date.now,
      title: req.body.title,
      content: req.body.content,
      createDate: req.body.title || new Date,
      tags: req.body.titile || []
  }
  notes.push(note)
  res.status(200)
});

app.get('/note/:id', function (req: Request, res: Response) {
    var id = parseInt(req.params.id);
    let note = notes.find( note => note.id === id)
    if (note == undefined) {
        res.status(404).send()
    } else {
        res.status(200).send(note)
    }
})



app.listen(3000)


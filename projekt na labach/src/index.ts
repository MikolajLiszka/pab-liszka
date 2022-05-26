import express from 'express'
import {Request, Response} from 'express'
import fs from 'fs';
import Note from './models/note';
import Tag from './models/tags';

const app = express()
app.listen(3000)
app.use(express.json())

const notesContent = '.data/notes.json';
const tagsConstent = '.data/tags.json'

let listOfNotes: Note[] = [];
fs.readFile(notesContent, (err, data) => {
  if (err) throw err;
  listOfNotes =JSON.parse(data.toString());
});

let listOfTags: Tag[] = [];
fs.readFile(tagsConstent, (err, data) => {
  if(err) throw err;
  listOfTags = JSON.parse(data.toString());
});

app.get('/listOfNotes', (req: Request, res: Response) => {
  res.send(listOfNotes)
});

app.post('/listOfNotes', (req: Request, res: Response) => {
  let note = new Note(req.body)
  listOfNotes.push(note)
  fs.writeFileSync(notesContent, JSON.stringify(listOfNotes))

  if(note.tags !== undefined) {
    for(let i = 0; i < note.tags.length; i++) {
        if(!listOfTags.includes(note.tags[i])){
            let newTag = new Tag(note.tags[i])
            //zmienna dla nowego tagu (w srodku tag wpisany w notatce)
            listOfTags.push(newTag)
            fs.writeFileSync(tagsConstent, JSON.stringify(listOfTags))
        }
    }
}

  res.status(200).send('Notatka została dodana')
})

  




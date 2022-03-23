import express from 'express'
import {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send('POST Hello World')
})

app.listen(3000)

class Note
{
  id:number
  title:string
  content:string
  createdate:Date
  tags:Tag[]

  constructor(id:number,title:string = "", content:string = "", createdate:Date=new Date, tags:Tag[]=[])
  {
  this.id = id;
  this.title = title;
  this.content = content;
  this.createdate = createdate;
  this.tags = tags;
  }
}

class Tag
{
  id:number
  name:string

  constructor(id:number, name:string = "")

  {
  this.id = id;
  this.name = name;
  }
}

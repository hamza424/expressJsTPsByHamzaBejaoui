const express = require('express')
const app = express();

app.use(express.json())//to parse the body of the request
const PORT = 5000
let data = [
  { id: 1, name: "Bachir", age: 25 },
  { id: 2, name: "Kamel", age: 30 },
  { id: 3, name: "mohsen", age: 28 },
  { id: 4, name: "soniya", age: 40 },
  { id: 2, name: "lobna", age: 39 },
  { id: 5, name: "2hemi", age: 75 },
  { id: 6, name: "3imed", age: 60 },
  { id: 7, name: "nidhal", age: 15 },
  { id: 8, name: "nizar", age: 19 },
];
app.get('/', (req,res)=>{
    res.send({message:"hello from my server , i am working on it"})//can return all types of data
    res.json({message:"hamza"})//return json data
})
app.get('/file', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.listen(PORT,()=>{
    console.log( 'listening on port :' + PORT)
})
app.post('/api/user/create',(req,res)=>{
    const user = req.body
    data.push(user)
    res.json(user)
})
app.put('/api/user/update/:id',(req,res)=>{
    const id = Number(req.params.id)
    const users = data.map((user)=>{
        return user.id === id ? {...user,...req.body} : user
    })
    res.json(users)
})

app.get('/api/users',(req,res)=>{
    res.json(data)
})

app.get('/api/user/:id',(req,res)=>{
    const id = req.params.id
    const user = data.find((user)=>user.id == id)
    res.json(user)
})

app.delete('/api/user/delete/:id',(req,res)=>{
    const id = Number(req.params.id);
    const users = data.filter((user)=>user.id !== id)
    res.json(users)
})
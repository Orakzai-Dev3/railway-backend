const express = require('express')
const { redirect } = require('react-router-dom')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/login',
   async (req,res,next)=>{
        const {name , mail} = req.body
        const user = await users.find(data => data.name === name)
        if(!user){
            res.status(400).send({messeage:'inavlid',redirect:'/sigunp'})
        } else{
            return next()
        }

    },
    
    
    
    ()=>{

})

app.listen(3000)



//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const express=require('express')
//const res = require('express/lib/response')
//const { send } = require('process')
const app=express()
const http =require('http').createServer(app)
const PORT =3000//process.env.PORT || 3000
http.listen(PORT,() =>{
    console.log(`Listing to port ${PORT}`)
})

console.log(__dirname)
app.use(express.static(__dirname))
app.get('/',(req,res)=>
{
//res.send("hello pk messg")
res.sendFile(__dirname+'/index.html')
}
)

const io=require('socket.io')(http)

io.on('connection',(socket)=>{

    console.log('conected pk all good..')
    socket.on('message',(msg)=>{

        console.log(msg)
        socket.broadcast.emit('message',msg)
    })
})
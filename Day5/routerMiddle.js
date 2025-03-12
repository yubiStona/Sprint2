const express = require('express');
const app = express();
const router = express.Router();

//router level middleware
router.use((req,res,next)=>{
    console.log('router level middleware');
})

router.get('/profile',(req,res)=>{
    res.send('user profile')
})

//apply router to specific path
app.use('/users',router);
app.get('/',(req,res)=>{
    res.send('Home page');
})

app.listen(3000,()=>console.log('server listening on port 3000..'))
async function test() {
    

    setTimeout(()=>{
        console.log("this is setTimeout function");
    },1000)

    const msg=new Promise((resolve,reject)=>{
        resolve("hel there")
    })
    
    console.log(await msg);
}
test();
setTimeout(()=>{
  console.log("this is timeout function");
})
Promise.resolve().then(()=>{
    console.log("promise 1")
})

Promise.resolve().then(()=>{
    console.log("promise 2")
})


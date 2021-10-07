const {readFile, writeFile} = require('fs');

readFile('./myFolder/first.txt', 'utf8', (err, result) => {
if(err){
    console.log(err)
    return
 }
   const firstResult = result;
   console.log(firstResult);

   readFile('./myFolder/subMyFolder/second.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
      const secondResult = result;
      console.log(secondResult);

       writeFile('./myFolder/newAsyncFolder.txt', `This is the async version text and it contains both ${firstResult} AND ${secondResult}`, (err, result) => {
       if(err){
           console.log(err)
           return
       }
       readFile('./myFolder/newAsyncFolder.txt', 'utf8' , (err, result) => {
         if(err){
             console.log(err)
             return
         }
         console.log(result)
       })
       
   })

   })
})

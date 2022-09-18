// console.log('jhj')
document.querySelector("form").addEventListener('submit',submitform)
function submitform(e){
    e.preventDefault()
    // console.log("abcs")


    const payload={
        "brand":document.getElementById('brand').value,
      "year":document.getElementById("year").value,
      "type": document.getElementById("type").value,
      "kms":document.getElementById('kms').value,
      "Description":document.getElementById('desc').value,
      "Price":document.getElementById('price').value
    }


let data = JSON.stringify(payload)
        postuserdata(data)
        // alert('successfully registered')
}
        async function postuserdata(data){      
 
    const res=await fetch("https://your-api-project-shivani.herokuapp.com/cars",{
     
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:data,
   
    })  .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    }

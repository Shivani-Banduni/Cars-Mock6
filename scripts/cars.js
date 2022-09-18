var wholedata=[]


var cardiv=document.getElementById("cars");
async function getdata(){
    try{
        let res=await fetch('https://your-api-project-shivani.herokuapp.com/cars')
        let data=await res.json()
        wholedata=data
        console.log("whole",wholedata)
        appenddata(data)
    }
    catch(err){
console.log("err",err)
    }
}
getdata()

//displaying data function

function appenddata(data) {
    cardiv.innerHTML=null
console.log(data)
data.map((el)=>{
    var maindiv=document.createElement("div");
    maindiv.style="display:flex;gap:40px";
    var iddiv=document.createElement("h3");
    var img=document.createElement("img");
    img.src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    iddiv.innerHTML=el.id;

    var brand=document.createElement("h3");
    brand.innerHTML=`Brand :`+ el.brand ;

    var price=document.createElement("h3");
    price.innerHTML=`Price :`+ el.Price;

    var year=document.createElement("h3");
    year.innerHTML= `Year :` +el.year;

    var type=document.createElement("h3");
    type.innerHTML="Type :"+ el.type ;

    var Kms=document.createElement("h3");
    Kms.innerHTML=`KM :`+ el.kms ;

    var btn=document.createElement('button')
    btn.innerHTML='DELETE'

    btn.style='border-radius:10px;height:50px'

    maindiv.append(img,iddiv,brand,price,year,type,Kms,btn);
    cardiv.append(maindiv)
})
  }



//sort by price function
// document.getElementById("priceSort").addEventListener("onchange",handlePriceSort)
  function handlePriceSort(){
    let selected=document.getElementById("priceSort").value 
    // console.log( "hkjd", selected)
    if(selected=='high'){
        wholedata.sort(function(a,b) 
       { return b.Price-a.Price})
    }

    else if(selected=='low'){
        wholedata.sort(function(a,b){
            return a.Price-b.Price
        })
    }
    appenddata(wholedata)
  }



  //delete function

  
export default async function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"method not allowed"})
}

try{

const { cep } = req.body

if(!cep){
return res.status(400).json({error:"cep required"})
}

const response = await fetch(process.env.LOGGI_API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${process.env.LOGGI_TOKEN}`
},
body:JSON.stringify({
origin_zip:"09015610",
destination_zip:cep,
weight:1,
length:20,
width:15,
height:10
})
})

const data = await response.json()

const days = data.delivery_days || data.days || 3

res.status(200).json({days})

}catch(e){

res.status(200).json({days:5})

}

}

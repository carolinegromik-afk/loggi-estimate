export default async function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"method not allowed"})
}

try{

const { cep } = req.body

if(!cep){
return res.status(400).json({error:"cep required"})
}

res.status(200).json({
days:2
})

}catch(e){

res.status(200).json({
days:5
})

}

}

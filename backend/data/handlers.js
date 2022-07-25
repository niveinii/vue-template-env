export async function getData(req,res){
    try{
        const resp = {niv:'eini'}
        res.status(200).send(resp)
    }catch(e){
        res.status(500).send({error: 'could not retreive data'})
        console.log(e)
    }
}

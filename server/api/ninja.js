export default defineEventHandler (async(event)=> { 
   const {data} = await $fetch ('https://api.currencyapi.com/v3/latest?apikey=cur_live_uBbtvWKSJcSq9MjpSl3aD74eK6zzY171QAArQv71')

   //const age =  await readBody(event)
    
    return data
})
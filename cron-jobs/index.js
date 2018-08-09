const fs = require("fs")
const moment = require('moment')
const fetch = require('node-fetch')
const os = require("os")
const emoji = require('node-emoji')
const cron = require("node-cron")



 async function getRates(dateLog) {

  const USDtoMXNUrl = 'https://exchangeratesapi.io/api/latest?base=USD&symbols=MXN'
  const EURtoMXNUrl = 'https://exchangeratesapi.io/api/latest?base=EUR&symbols=MXN' 
  const GBPtoMXNUrl = 'https://exchangeratesapi.io/api/latest?base=GBP&symbols=MXN' 

  try {

    const resUSDtoMXN =  await fetch(USDtoMXNUrl)
    const resUSDtoMXNJson = await resUSDtoMXN.json()

    const resEURtoMXN = await fetch(EURtoMXNUrl)
    const EURtoMXNJson = await resEURtoMXN.json()

    const resGBPtoMXN = await fetch(GBPtoMXNUrl)
    const GBPtoMXNJson = await resGBPtoMXN.json()
    
    const {MXN: USD} = resUSDtoMXNJson.rates
    const {MXN: EUR} = EURtoMXNJson.rates
    const {MXN: GBP} = GBPtoMXNJson.rates
    const CreatedDate = Date.now()
    const Active = true

    const item = {USD, EUR, GBP, CreatedDate, Active}

    const data = `${dateLog} - Exchange Rates USD: ${USD} , EUR: ${EUR}, GBP: ${GBP}  - ${emoji.get('thumbsup')}`
    
    
    fs.writeFileSync('cron-jobs.txt', data + os.EOL, {'flag':'a'}, function(err, data){
      if (err) console.log(err)
      console.log("Successfully Written to File.")
    }) 
  
    

  } catch (error) {

    const data = `${dateLog} - Error al querer obtener Exanges Rates - ${emoji.get('white_frowning_face')}`
  
    fs.writeFileSync('cron-jobs.txt', data + os.EOL, function(err, data){
      if (err) console.log(err)
      console.log("Writte ERROR to File.")
    }) 
  
  }
  
}

const dateLog = moment().format('MMMM Do YYYY, h:mm:ss a')


// schedule tasks to be run on the server
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )
// update at 11:59pm every day
// 59 23 * * * 
cron.schedule("* * * * *", function() { 
  
  console.log(`${emoji.get('gem')} - Cron Job Excecute at ${dateLog} - ${emoji.get('gem')}`)

  const data = `${emoji.get('gem')} - Cron Job Excecute at ${dateLog} - ${emoji.get('gem')}`

  fs.writeFileSync('cron-jobs.txt', data + os.EOL, {'flag':'a'}, function(err, data){
    if (err) console.log(err)
  }) 
  
  getRates(dateLog)
})


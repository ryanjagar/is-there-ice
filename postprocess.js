// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts' 

const daysToKeep = -10
// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)
console.log(json)


const newFilename = filename.replace("./raw-data/raw-", "")
//const newFilename = `yxy-weather.json` // name of a new file to be saved
try{
    const existingData = await readJSON(newFilename)
    existingData.push(json)
    
    await writeJSON(newFilename, existingData.slice(daysToKeep), null, 2) // create a new JSON file with just the Bitcoin price
    console.log(`Wrote a post process file.  There are now ${existingData.length} entries `)
}
catch(err){
    console.log(`File ${newFilename} does not exist so it was created.`)

    await writeJSON(newFilename, Array(json), null, 2)
}

// Optionally delete the original file
// await removeFile('./btc-price.json') // equivalent to removeFile('btc-price.json')

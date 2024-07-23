const { MongoClient } = require("mongodb");
const { NextResponse } = require("next/server");
const dotenv = require("dotenv");
dotenv.config();
const res = NextResponse;
const dbClient = new MongoClient(process.env.Atlas_URI)

export async function GET(req) {
    try {
        await dbClient.connect()
        const dataBase = dbClient.db(process.env.Atlas_DB);
        const collection = dataBase.collection('record');
        const cursor=collection.find()
        const arr=[]
        for await (const data of cursor){
            arr.push(data)
        }
        // return res.json({ 'response': 'Api called Successfully!' })
        return res.json(arr)
    }
    catch (err) {
        console.error(err);
        return res.json({ 'response': 'Internel Server Error!' })
    }
    finally {
        dbClient.close()
    }
}


export async function POST(req) {
    try {
        await dbClient.connect();
        console.log('client connected')
        let data = await req.json()
        const dataBase = dbClient.db(process.env.Atlas_DB);
        const collection = dataBase.collection('record');
        const result = await collection.insertOne(data)
        // console.log(result);
        return res.json({ 'response': "Data Inserted Successfully!", "User": data.Username })
    }
    catch (err) {
        // console.error(err);
        return res.json({ 'response': 'Internel Server Error!' })
    }
    finally {
        dbClient.close()
    }

}

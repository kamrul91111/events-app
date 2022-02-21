import fs, { read } from 'fs'
import path from 'path'

// store to file (or in db)
const filePath = path.join(process.cwd(), 'data', 'feedback.json')

const handler = (req, res) => {
  // find out which kind of request
  if (req.method === 'POST') {
    const email = req.body.email
    const feedback = req.body.feedback

    // data to save
    const newFeedback = {
      email: email,
      feedback: feedback,
      id: new Date().toISOString()
    }

    const readData = fs.readFileSync(filePath)
    const data = JSON.parse(readData) //turn json to js object
    data.push(newFeedback) //push new data
    fs.writeFileSync(filePath, JSON.stringify(data)) //write the new file

    res.status(200).json({ message: 'Success', feedback: newFeedback })
  } else if (req.method === 'GET') {
    const readData = fs.readFileSync(filePath)
    const data = JSON.parse(readData) //turn json to js object
    res.status(200).send(data)
  }
}

export default handler

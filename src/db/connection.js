import mongoose from "mongoose"

const main = async () => {
  try {
    mongoose.set('strictQuery', true)

    console.log('MongoDB: connected')

    await mongoose.connect(process.env.DB_URL)
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export {
  main
}
import mongoose from 'mongoose';
 
async function connectDB () {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog' , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfully!!');
    } catch (error) {
        console.log('Connect Failure!!');
    }
}

export default connectDB;

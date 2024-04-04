
const registerUser = async(req , res)=>{
    try{
      res.status(200).json({ message: 'User registered successfully' });
    }catch(err)
    {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
export default registerUser
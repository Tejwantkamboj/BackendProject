const getUser = (req, res) => {
    try {
        // const newUser = req.body;
        // console.log("new user" ,  newUser) 
        res.status(201).json("user created succesfully");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default getUser
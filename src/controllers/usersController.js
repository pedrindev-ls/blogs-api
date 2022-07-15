const jwtService = require('../services/jwtService');
const usersService = require('../services/usersService');

const usersController = {
  add: async (req, res) => {
    try {
      const newUser = usersService.validateRegister(req.body);

      const addNewUser = await usersService.addUser(newUser);
      console.log(addNewUser);
      
      const { displayName, email, image } = newUser;
      const token = jwtService.createToken({ displayName, email, image });
      
      res.status(201).json({ token });
    } catch (error) {
      if (error.message === 'User already registered') {
        res.status(409).json({ message: error.message });
      }
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = usersController;
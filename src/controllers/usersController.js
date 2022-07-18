const jwtService = require('../services/jwtService');
const usersService = require('../services/usersService');

const usersController = {
  add: async (req, res) => {
    try {
      const newUser = usersService.validateRegister(req.body);

      await usersService.addUser(newUser);
      
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
  getUser: async (req, res) => {
    try {
      const { authorization } = req.headers;

      jwtService.validateToken(authorization);

      const users = await usersService.getUsers();
  
      return res.status(200).json(users);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },
  getUserId: async (req, res) => {
    try {
      const { authorization } = req.headers;
      const { id } = req.params;

      jwtService.validateToken(authorization);

      const user = await usersService.getId(id);

      return res.status(200).json(user);
    } catch (error) {
      if (error.message === 'User does not exist') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(401).json({ message: error.message });
    }
  },
};

module.exports = usersController;
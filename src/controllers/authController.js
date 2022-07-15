const authService = require('../services/authService');
const jwtService = require('../services/jwtService');

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = authService.validateBody(req.body);
  
      await authService.login(email, password);
      const token = jwtService.createToken(email);
  
      return res.status(200).json({ token });
    } catch (error) {
      if (error.message === '"email" is not allowed to be empty') { 
        return res.status(400).json({ message: 'Some required fields are missing' }); 
      }
      res.status(400).json({ message: 'Invalid fields' });
    }
  },
};

module.exports = authController;
const User = require('../../models/user')
const sha256 = require('sha256')
const functions = require('../../functions')
const nodemailer = require("nodemailer");

// Get all user method
const getAll = (req, res) => {
  User.find({}, { password: 0 }, (err, users) => {
    if (err) res.send({ msg: 'can`t get the user list', error: err })
    res.send(users)
  })
}

// Insert user method
const insertUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    dni: req.body.dni,
    email: req.body.email,
    password: sha256(req.body.password),
    category: req.body.category,
  })
  user.save(err => {
    if (err) res.send({ msg: 'Cant`t save the user', error: err })
    res.send({ msg: 'account saved' })
  })
}

//SignIn user method
const signIn = (req, res) => {
  const { email, password } = req.body
  User.findOne(
    { email, password: sha256(password) },
    { password: 0 },
    (err, user) => {
      console.log(user)
      if (err) return res.status(500).send({ msg: 'Server Error', error: err })
      if (!user)
        return res
          .status(404)
          .send({ msg: 'Invalid Email or password', error: err })
      req.user = user
      res.status(200).send({
        messagge: 'you are logged',
        token: functions.createToken(user),
        user
      })
    }
  )
}

//  SignUp user method
const signUp = (req, res) => {
  const user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    dni: req.body.dni,
    email: req.body.email,
    password: sha256(req.body.password),
    category: req.body.category,
  })
  user.save(err => {
    if (err) res.status(500).send({ msg: `Can't save the user: ${err}` })
    res.status(200).json({ token: functions.createToken(user) })
  })
}

//  Remove user method
const removeUser = (req, res) => {
  User.deleteOne({ _id: req.params.id }, err => {
    if (err)
      res.send({ msg: `Cant't delete the user ${req.params.id}`, error: err })
    res.send('User deleted')
  })
}

const forgotPassword = async (req, res) => {
  const { dni } = req.body;
  const client = await User.findOne({ dni });
  if (!client) {
    res.send({ msg: 'Client not found' });
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'julianoacunia@gmail.com', // generated ethereal user
      pass: 'cjlntysxlgmeeemo', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Soporte de Artesanos Unidos" <artesanosunidos@soporte.com>', // sender address
    to: `${client.email}`, // list of receivers
    subject: "Recuperacion de contraseña", // Subject line
    html: `<p>Para reestablecer su contraseña ingrese al siguiente: <a href="http://localhost:3000/recover-password/${client._id}">link</a></p>`
  });

  if (!info) {
    res.send({ msg: 'No se pudo enviar el mail' })
  }

  res.send({ msg: "Se envio un mail a su casilla de correo", data: client })
};

const changePassword = async (req, res) => {
  const { password, confirmPassword, id } = req.body;
  const client = await User.findOne({ _id: id });
  console.log('CLIENT', client);
  if (!client) {
    res.send({ msg: 'Client not found' });
  }

  if (password !== confirmPassword) {
    res.send({ msg: 'Las contraseñas no son iguales' });
  }

  const response = await User.findOneAndUpdate(
    { _id: id },
    { password: sha256(password) },
    { new: true }
  );

  res.send({ msg: "Se cambio ha cambiado su contraseña", data: response })
};

module.exports = {
  getAll,
  insertUser,
  signIn,
  signUp,
  removeUser,
  forgotPassword,
  changePassword,
}
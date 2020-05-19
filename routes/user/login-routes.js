// ALL THE USER LOGIN-RELATED ROUTES ARE HANDLED BY THIS FILE

const app = require('express').Router(),
  db = require('../../config/db'),
  User = require('../../config/User'),
  mw = require('../../config/Middlewares'),
  { uniqBy } = require('lodash')

// import {loginWithOAuth} from '../../firebase/login' 

// USER LOGIN GET ROUTE
app.get('/login', mw.NotLoggedIn, (req, res) => {
  let options = {
    title: 'Login To Continue',
    users: req.cookies.users ? JSON.parse(req.cookies.users).slice(0, 15) : [],
  }
  res.render('login', { options })
})

// LOGS THE USER IN
app.post('/user/login', async (req, res) => {
  try {
    let {
      body: { username: rusername, password: rpassword },
      session,
    } = req

    req.checkBody('username', 'Username is empty!!').notEmpty()
    req.checkBody('password', 'Password field is empty!!').notEmpty()

    let errors = await req.getValidationResult()
    if (!errors.isEmpty()) {
      let array = []
      errors.array().forEach(e => array.push(e.msg))
      res.json({ mssg: array })
    } else {
      let [{ userCount, id, password, email_verified }] = await db.query(
        'SELECT COUNT(id) as userCount, id, password, email_verified from users WHERE username=? LIMIT 1',
        [rusername]
      )

      if (userCount == 0) {
        res.json({ mssg: 'User not found!!' })
      } else {
        let same = User.comparePassword(rpassword, password)
        if (!same) {
          res.json({ mssg: 'Wrong password!!' })
        } else {
          session.id = id
          session.username = rusername
          session.email_verified = email_verified
          session.isadmin = false

          await db.query('UPDATE users SET isOnline=? WHERE id=?', ['yes', id])

          res.json({
            mssg: `Welcome ${rusername}!!`,
            success: true,
          })
        }
      }
    }
  } catch (error) {
    db.catchError(error, res)
  }
})

// LOGS THE USER IN USING GOOGLE_OAUTH
app.post('/google_oauth/login', async (req, res) => {
  try {
    let {
      body: {token: token, user: user},
      session,
    } = req

    console.log(session)

    

    let errors = await req.getValidationResult()
    if (!errors.isEmpty()) {
      let array = []
      errors.array().forEach(e => array.push(e.msg))
      res.json({ mssg: array })
    } else {
      let  { user_id, username } = user

      console.log(token)
    
      session.id = user_id
      session.tokenId = token
      session.username = username
      session.email_verified = true
      session.isadmin = false

      // console.log(session)

      // await db.query('UPDATE users SET isOnline=? WHERE id=?', ['yes', id])

      res.json({
        success: true,
      })
        }
      
  } catch (error) {
    res.json({
        success: false,
        mssg: error.message
      })
  }
})

// LOGS USER OUT
app.get('/logout', mw.LoggedIn, async (req, res) => {
  try {
    let { id, username } = req.session,
      user = { id, username },
      oldUsers = req.cookies.users ? JSON.parse(req.cookies.users) : [],
      users = []

    oldUsers.map(o => users.push(o))
    let final = uniqBy([user, ...users], 'id')
    res.cookie('users', `${JSON.stringify(final)}`)

    let u = {
      isOnline: 'no',
      lastOnline: new Date().getTime(),
    }
    await db.query('UPDATE users SET ? WHERE id=?', [u, id])

    let url = req.session.reset() ? '/login' : '/'
    res.redirect(url)
  } catch (error) {
    console.log(error)
  }
})

module.exports = app

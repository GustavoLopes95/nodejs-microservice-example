const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const makeUserModel = require('../database/mongodb/models/user');

return makeUserModel({ mongoose, bcrypt });
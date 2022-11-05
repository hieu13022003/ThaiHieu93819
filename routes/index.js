var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//SCHEMA
let User4Schema = mongoose.Schema({
    LatLong: {
        type: Number,
    },
    Role: {
        type: String,
    },
    OpenHour: {
        type: Number,
    },
    DefaultAccount: {
        type: String,
    },
    BankName: {
        type: String,
    },
    BranchName: {
        type: String,
    }
});

//MODEL
let User4 = mongoose.model('User4', User4Schema);

/* GET home page. */
router.get('/', function(req, res, next) {
    User4.find({}, (Error, data) => {
        console.log("Du lieu", data);
        res.render('index', { User4s: data });
    });
});
router.get('/form-add', function(req, res, next) {
    res.render('form-add', {});
});
router.post('/add', function(req, res, next) {
    User4.create(req.body);
    res.redirect('/');
});
router.get('/form-update/:id', function(req, res, next) {
    User4.findById(req.params.id, (Error, data) => {
        res.render('form-update', { User4s1: data });
    });
});
router.post('/update', function(req, res, next) {
    User4.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
        res.redirect('/');
    });
});
router.get('/form-delete/:id', function(req, res, next) {
    User4.findByIdAndDelete(req.params.id, (Error, data) => {
        res.redirect('/');
    });
});



module.exports = router;
const debug = require('debug')('api');
Contact = require('./contactModel');

exports.index = function(req, res) {
    Contact.get(function (err, contacts) {
        if(err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "succes",
            message: "Contact Retreived succesfully",
            data: contacts,
        });
    })
};

exports.new = function(req, res) {
    debug('Post command');
    debug(req.body);
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
            if (err)
                res.send(err);
            contact.name = req.body.name ? req.body.name : contact.name;
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
    // save the contact and check for errors
            contact.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Contact Info updated',
                    data: contact
                });
            });
    });
};

    exports.delete = function (req, res) {
        Contact.remove({
            _id: req.params.contact_id
        }, function (err, contact) {
            if (err)
                res.send(err);
                res.json({
                status: "success",
                message: 'Contact deleted'
            });
        });
    };
const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', function(req, res){
  res.json({
      status: 'API Its working',
      message: 'ToDo Rest API'
  });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
module.exports = router;
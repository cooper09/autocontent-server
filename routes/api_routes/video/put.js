var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Video;

module.exports = function(req, res){
  var body =  require('./').scrub(req.body);
  var identifier = req.params.identifier;
  if( identifier == null ) {
    res.status(401).send("no 'identifier' provided provided");
  }else{
    updateRecord(identifier, body, function  (results) {
      res.json(results);
    });
  }
}

function updateRecord (identifier, changes, cb) {
  Model.update(changes,{where:{id:identifier}}).then(cb);
}

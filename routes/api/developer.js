const developerRoutes = require("express").Router();
const DeveloperModel = require("../../models/Developer");





developerRoutes.route('/').get(function(req, res) {
  DeveloperModel.find(function(err, developer) {
      if (err) {
          console.log(err);
      } else {
          res.json(developer);
      }
  });
});


developerRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  DeveloperModel.findById(id, function(err, developer) {
      res.json(developer);
  });
});



developerRoutes.route('/update/:id').post(function(req, res) {
  DeveloperModel.findById(req.params.id, function(err, developer) {
      if (!developer)
      
          res.status(404).send("data is not found");
      else

      developer.DeveFirst_Name = req.body.DeveFirst_Name;
      developer.DeveLast_name = req.body.DeveLast_name;
      developer.DeveRole = req.body.DeveRole;
      developer.Job_completed=req.body.Job_completed;

      developer.save().then(developer => {
              res.json('developer updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});



developerRoutes.route("/delete/:id").delete(function(req, res)  {
    DeveloperModel.findByIdAndRemove(req.params.id, function(err, developer) {
        if (!developer)
        
            res.status(404).send("data is not found");
        else
  
        developer.remove().then(developer => {
                res.json('developer deleted!');
            })
            .catch(err => {
                res.status(400).send("deletion not possible");
            });
    });
  });


developerRoutes.route('/add').post(function(req, res) {
  let developer = new DeveloperModel(req.body);
  developer.save()
      .then(developer => {
          res.status(200).json({'developer': 'developer added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new developer failed');
      });
});







module.exports = developerRoutes;
const projectRoutes = require("express").Router();
const ProjectModel = require("../../models/Project");


// developerRoutes.get("/api/developer", async (request, response) => {
//   const developer = await DeveloperModel.find({});

//   try {
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


projectRoutes.route('/').get(function(req, res) {
    ProjectModel.find(function(err, project) {
      if (err) {
          console.log(err);
      } else {
          res.json(project);
      }
  });
});


projectRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    ProjectModel.findById(id, function(err, project) {
        res.json(project);
    });
  });

projectRoutes.route('/add').post(function(req, res) {
    let project = new ProjectModel(req.body);
    project.save()
        .then(project => {
            res.status(200).json({'project': 'project added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new project failed');
        });
  });



  projectRoutes.route("/delete/:id").delete(function(req, res)  {
    ProjectModel.findByIdAndRemove(req.params.id, function(err, project) {
        if (!project)
        
            res.status(404).send("data is not found");
        else
  
        project.remove().then(project => {
                res.json('project deleted!');
            })
            .catch(err => {
                res.status(400).send("deletion not possible");
            });
    });
  });
  projectRoutes.route('/update/:id').post(function(req, res) {
    ProjectModel.findById(req.params.id, function(err, project) {
        if (!project)
        
            res.status(404).send("data is not found");
        else
  
        project.Project_Name = req.body.Project_Name;
        project.DeveFirst_Name = req.body.DeveFirst_Name;
        project.Project_Detail = req.body.Project_Detail;
        project.DeveRole = req.body.DeveRole;
        project.Job_completed=req.body.Job_completed;
  
        project.save().then(project => {
                res.json('project updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
  });
module.exports = projectRoutes;
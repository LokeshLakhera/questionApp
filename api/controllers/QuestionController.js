/**
 * QuestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list:function(req, res){
    Question.find({}).exec(function(err, question){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.view('list', {question:question});
    });
  },
  add: function(req, res){
    res.view('add');
  },
  create:function(req, res){
    var questionDescription = req.body.questionDescription;
    var option_1 = req.body.option1;
    var option_2 = req.body.option2;
    var option_3 = req.body.option3;
    var option_4 = req.body.option4;

    Question.create({questionDescription:questionDescription, option1:option_1,option2:option_2,option3:option_3,option4:option_4}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/question/list');
    });
  }
};

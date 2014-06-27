var express = require('express');
var router = express.Router();

/*首页*/
router.get('/',function(req,res){
    res.render('admin/index',{title:'后台管理'});
})

/*文章管理*/
router.get('/briefcase_add',function(req,res){
    res.render('admin/briefcase_add',{title:'添加新文章——后台管理'});
})

module.exports = router;
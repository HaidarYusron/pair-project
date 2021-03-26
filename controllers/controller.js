const { Item } = require('../models/index')
class Controller {

    static showItems (req,res){
        Item.findAll()
            .then((items)=>{
                res.render('item',{items})
            })    
            .catch((err)=>{
                res.send(err)
            })
        
    }

    static addItem (req,res){
        res.render('addItem')
    }

    static postAddItem (req,res){
        let input = req.body

        Item.create(input)
            .then((item)=>{
                res.redirect('/items')
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static deleteItem (req,res){
        Item.destroy({
            where:{id:+req.params.id}
        })
            .then(()=>{
                res.redirect('/items')
            })
            .catch((err)=>{
                res.send(err)
            })
    }

    static update (req,res){
        Item.findOne({
            where: {id: +req.params.id}
        })
            .then((data)=>{
                res.render('itemUpdate',{item:data,id:+req.params.id})
            })
    }
    static postUpdate (req,res){
        let input = req.body

        Item.update(input,{
            where:{id: req.params.id}
        })
        .then(()=>{
            res.redirect('/items')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static buyItem(req,res){
        Item.findAll()
            .then((items)=>{
                res.render('user',{items})
            })    
            .catch((err)=>{
                res.send(err)
            })
    }

    static clickBuy(req,res){
        Item.findOne({
            where: {id:+req.params.id}
        })
        .then((item)=>{
            item.decrement('stock')
            res.redirect(`/items/user/${+req.params.id}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static basket(req,res){
        
    }
}


module.exports = Controller
import Route from '@ember/routing/route';

const Data = Object.extend({
  contacts: Ember.computed('filter','datas.@each.deleted',function(){

  })
})

const Listes = Ember.Object.extend({
  datas:[],
  contacts:[],
  deleteds:[],
  deletedCount:Ember.computed('deleteds.[]',function () {
    return this.get('deleteds').map(
      (id)=>this.get('deleteds').findBy('id',id)
    );
  })
});

export default Route.extend({
  model(){
    let storedContact=this.get('store').findAll('contacts');
    return Data
    return Listes.create({
      datas:[
        {
          "nom":"VITIS",
          "prenom":"Benjamin",
          "email":"roux@etu.unicaen.fr"
        },
        {
          "nom":"LENOIR",
          "prenom":"Julien",
          "email":"rinner@etu.unicaen.fr"
        }
      ],
      action:{
        delete:function(contact){
          deleteds.pushObjects(contacts);
          datas.removeObjects(contacts);
        },
        cancelDeletion:function(deleteds){


        }
      }
    })
}
});

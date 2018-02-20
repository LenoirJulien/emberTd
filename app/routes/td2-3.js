import Route from '@ember/routing/route';

const Data = Ember.Object.extend({
  contacts: Ember.computed('filter','datas.@each.isDeleted',function(){
    let notDeleted = this.get('datas').filterBy('deleted',false);
    let filter = this.get('filter');
    if(filter){
      return notDeleted.filter(
        (item)=>{return item.get('nom').includes(filter) || item.get('prenom').includes(filter) || item.get('email').includes(filtrer);}
      );
    }
  })
});

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
        addnew:function(){
          let store = this.get('store');
          let c = Object.create({
            "nom":"Smith"
          })
          let contact = store .createRecord(c);
          contact.save();
        },
        delete:function(contact){
          contact.deleteRecord();
        },
        cancelDeletion:function(deleteds){
          deleteds.forEach(
            (item)=>{item.rollbackAttribute();}
          );
        }
      }
    })
}
});

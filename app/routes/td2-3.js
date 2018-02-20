import Route from '@ember/routing/route';

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
    return Listes.create({
      action:{
        delete:function(contact){

        },
        cancelDeletion(deleteds){

        }
      }
    })
}
});

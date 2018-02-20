import Route from '@ember/routing/route';


export default Route.extend({
  model(){
    return Object.create({nom:'test'})
  },
  actions:{
    addContact:function(data){
      let store = this.get('store');
      let contact =store.createRecord('contact',JSON.parse(JSON.stringify(data)));
      contact.save();
      this.transitionTo("contacts");
    }
  }
});

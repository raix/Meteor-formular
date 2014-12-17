raix:formular
=============

The Formular is a simple helper when handling formulars.

Well just a fast self explaining example:
```js
var formDescriptor = {    
  'name': '#name',
  'description': '#description',
  'status': "[name='status']:checked",
  'reference': '#reference',
  'updatedAt': function() { return getCorrectTimeStamp(); },
  'udate': function() { return serverTimeNow(); },
  'updatedBy': function() { return Meteor.userId(); },
  'nameStatus': function(form) {
    return form.name + ' ' + form.status;
  },
  'error': function(form) {
    // Validation
    if (!form.name || !form.name.length) return 'Name may not be empty';
    if (!form.description || !form.description.length) return 'Description may not be empty';
  }
};

Template.dataForm.events({
  'click .btnUpdate': formular(formDescriptor, function(form, evt, temp) {
    if (form.error) {
      alert(form.error);
    } else {

      // Update the issue name
      issues.update({
        _id: this._id
      }, {
        $set: {
          name: form.name,
          reference: form.reference,
          updatedAt: form.updatedAt,
          updatedBy: form.updatedBy,
          udate: form.udate
        }
      });

    }
  })
});
```
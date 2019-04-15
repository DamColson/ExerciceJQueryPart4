function compare(){
  var regexPhone = /^(\+33 |0)[1-9]([- .]?(\d\d)){4}$/
  var regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  var regexFirstName = /^[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[-]?[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+$/
  var regexLastName = /^([A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ ]?)+$/
  if(!regexPhone.test($('#phone').val())) {
    $('#negative').text(function(){
      return 'Le numéro de téléphone séléctionné est incorrect';
    });
  }else if(!regexMail.test($('#mail').val())) {
    $('#negative').empty();
    $('#negative').text(function(){
      return 'Le mail sélectionné est incorrect';
    });
  }else if(!regexFirstName.test($('#firstName').val())){
    $('#negative').empty();
    $('#negative').text(function(){
      return 'Le Prénom sélectionné est incorrect';
    });
  }else if(!regexLastName.test($('#lastName').val())){
    $('#negative').empty();
    $('#negative').text(function(){
      return 'Le Nom sélectionné est incorrect';
    });
  }else{
    $('#negative').empty();
    $('#negative').text(function(){
      return 'Félicitation, vous savez remplir un formulaire';
    });
  }
}

$('#check').click(compare);

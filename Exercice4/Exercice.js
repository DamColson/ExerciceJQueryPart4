function compare(){
  var regexJobBPlace = /^([A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ -]?)+$/
  var regexFirstName = /^[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[-]?[A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+$/
  var regexLastName = /^([A-Za-zàáâäçèéêëìíîïñòóôöùúûü]+[ ]?)+$/
  var regexDate = /^([0-2][0-9]|([3])[0-1])[\/\-.]([0][1]|[1]|[0][3-9]|[1][0-2])[\/\-.]([0-9]{4})$/
  var regexFebruary = /^([0-2][0-9]|)[\/\-.]([0][2])[\/\-.]([0-9]{4})$/
  if(!regexDate.test($('#birthday').val()) && !regexFebruary.test($('#birthday').val())) {
    $('#error').text(function(){
      return 'La date de naissance séléctionnée est incorrect';
    });
  }else if(!regexJobBPlace.test($('#job').val())||(!regexJobBPlace.test($('#birthPlace').val()))) {
    $('#error').empty();
    $('#error').text(function(){
      return 'L\'emploi ou le lieu de naissance sélectionné est incorrect';
    });
  }else if(!regexFirstName.test($('#firstName').val())){
    $('#error').empty();
    $('#error').text(function(){
      return 'Le Prénom sélectionné est incorrect';
    });
  }else if(!regexLastName.test($('#lastName').val())){
    $('#error').empty();
    $('#error').text(function(){
      return 'Le Nom sélectionné est incorrect';
    });
  }else{
    $('#recap').empty();
    $('#recap').text(function(){
      return $('#gender').val()+' '+$('#firstName').val()+' '+$('#lastName').val()+' né(e) le '+$('#birthday').val()+ ' à '+$('#birthPlace').val()+' travaille actuellement en tant que '+$('#job').val()+' pour '+$('#firm').val();
    });
  }
}

$('#check').click(compare);

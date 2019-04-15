


function moy(){
  if(parseFloat(($('#grade1').val()))<0 || parseFloat(($('#grade1').val()))<0 || parseFloat(($('#grade3').val()))<0 || parseFloat(($('#grade4').val()))<0 || parseFloat(($('#grade5').val()))<0){
    $('#gradeForm').addClass('d-none');
    $('#negative').text(function(){
      return 'Inférieur à 0 ? Vraiment? Je sais que tu es mauvais mais quand même !! Allez, recommence !!';
    });
    $('#reset').removeClass('d-none');
  }else if(parseFloat(($('#grade1').val()))>20 || parseFloat(($('#grade1').val()))>20 || parseFloat(($('#grade3').val()))>20 || parseFloat(($('#grade4').val()))>20 || parseFloat(($('#grade5').val()))>20){
    $('#gradeForm').addClass('d-none');
    $('#tooMuch').text(function(){
      return 'Supérieur à 20 ? Vraiment? Tu me prendrais pas pour un jambon la par hasard ? !! Allez, recommence !!';
    });
    $('#reset').removeClass('d-none');

  }else{
  var gradeTable=[parseFloat(($('#grade1').val())),parseFloat(($('#grade2').val())),parseFloat(($('#grade3').val())), parseFloat(($('#grade4').val())),parseFloat(($('#grade5').val()))];
  var sum = 0;
  for(i=0;i<gradeTable.length;i++){
    sum +=gradeTable[i];
  }
  var avrg = sum/gradeTable.length;
  if(avrg<10){
    console.log($('#firstName').val());
    $('#conclusion').addClass('text-danger');
    $('#gradeForm').addClass('d-none');
    $('#conclusion').text(function(){
      return avrg + ' de moyenne hein ... Pourquoi ne suis je pas étonné '+($('#firstName').val())+' ?';
    });
    $('#reset').removeClass('d-none');
  }else if(avrg>=10 && avrg<13){
    $('#conclusion').addClass('text-orange');
    $('#gradeForm').addClass('d-none');
    $('#conclusion').text(function(){
      return avrg + ' de moyenne ! Pas trop mal '+($('#firstName').val())+', au moins tu as la moyenne, j\'en attendais pas tant, bonne surprise !';
    });
    $('#reset').removeClass('d-none');
  }else if(avrg>=13 && avrg<16){
    $('#conclusion').addClass('text-dark');
    $('#gradeForm').addClass('d-none');
    $('#conclusion').text(function(){
    return  'Fiouuuu '+ avrg + ' de moyenne ! C\'est ta mère qui va être fier '+($('#firstName').val())+' !! Et moi qui te prenais pour un p\'tit singe !';
    });
    $('#reset').removeClass('d-none');
  }else if(avrg>=16 && avrg<20){
    $('#conclusion').addClass('text-success');
    $('#gradeForm').addClass('d-none');
    $('#conclusion').text(function(){
    return  'wow '+ avrg + ' de moyenne ! Tu as toujours été malin '+($('#firstName').val())+' ? Diantre j\'aurais juré le contraire !';
    });
    $('#reset').removeClass('d-none');
  }else{
    $('#conclusion').addClass('text-red');
    $('#gradeForm').addClass('d-none');
    $('#conclusion').text(function(){
      return 'Hum... '+ avrg + ' de moyenne hein... mouais je n\'y crois pas une seule seconde, t\'es pas assez futé pour ça '+($('#firstName').val())+' !! Pour la peine, 0 et je vais convoquer tes parents !! !';
    });
    $('#reset').removeClass('d-none');
  }
  }
}
$('#disaster').click(moy);
$('#reset').click(function(){
  location.reload();
});

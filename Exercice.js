var shif = ['Pierre', 'Papier', 'Ciseau'];
var scoreOpponent = 0;
var yourScore = 0;

function shiFuMi() {
  $('#draw').empty();
  $('#failure').empty();
  $('#success').empty();
  var indexShif = Math.floor(Math.random() * 3);
  if (($('#shifumi').val()) == shif[indexShif]) {
    $('#choice').text(function(){
      return 'Votre adversaire a choisi '+shif[indexShif];
    })
    $('#draw').text(function() {
      return 'Egalité, essayez encore !!';
    });
    $('#score').text(function(){
      return 'Votre score : '+yourScore+ ' Pc Score : '+scoreOpponent;
    });
  } else if ((($('#shifumi').val() == 'Pierre') && (indexShif == 1)) || (($('#shifumi').val() == 'Ciseau') && (indexShif == 0)) || (($('#shifumi').val() == 'Papier') && (indexShif == 2))) {
    scoreOpponent++;
    $('#choice').text(function(){
      return 'Votre adversaire a choisi '+shif[indexShif];
    })
    $('#failure').text(function() {
      return 'Vous avez perdu, essayez encore !!'
    });
    $('#score').text(function(){
      return 'Votre score : '+yourScore+ ' Pc Score : '+scoreOpponent;
    });
  }else{
    yourScore++;
    $('#choice').text(function(){
      return 'Votre adversaire a choisi '+shif[indexShif];
    })
    $('#success').text(function(){
      return ' Félicitation, vous avez gagné, mais vous pouvez quand même rejouer !!!'
    });
    $('#score').text(function(){
      return 'Votre score : '+yourScore+ ' Pc Score : '+scoreOpponent;
    });
  }
}

$('#compare').click(shiFuMi);

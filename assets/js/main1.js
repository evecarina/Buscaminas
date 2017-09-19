let array=[ '  1 12*',
            '* *11 2',
            ' 3* *  ',
            '1 1* *1',
            '**11  1',
            '* *1  2',
            '**1 1 1'];
// creando un tabla de 7*7
function dibujarTabla(){
for(var i=0;i<7;i++){
  $('#tabla').append('<tr></tr>');
  for(j=0;j<7;j++){
    $('#tabla').append(`<td id='${i}${j}'></td></tr>`);
  }
}
}
dibujarTabla();
// al hacer click dibujara el contenido del array

 $("td").click(function(event) {
   $(this).attr('id');
   let posicion=this.id
   posicion.split(" ");
   let i=posicion[0];
   let j=posicion[1];
  //  console.log(posicion[0]);
   $(this).append(array[i][j]);
  // al hacer click si es una bomba explotara
  if(array[i][j]==" "){
    $(this).css("background-color", "#ffd659");
  }
  if(array[i][j]=="*"){
    alert('perdistes');
    $('td').unbind('click');
  }
  });

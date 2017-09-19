const app={
array:[     '  1 12*',
            '* *11 2',
            ' 3* *  ',
            '1 1* *1',
            '**11  1',
            '* *1  2',
            '**1 1 1'],
iniciar :function(){
  app.dibujarTabla();
  app.ejecutar();
},

dibujarTabla : function(){
for(var i=0;i<7;i++){
  $('#tabla').append('<tr></tr>');
  for(j=0;j<7;j++){
    $('#tabla').append(`<td id='${i}${j}'></td></tr>`);
  }
}
},
// al hacer click dibujara el contenido del array
ejecutar:function(){
  $('#btn_reiniciar').click(app.reiniciar);
  $("td").click(function(event) {
    $(this).attr('id');
    let posicion=this.id
    posicion.split(" ");
    let i=posicion[0];
    let j=posicion[1];
   //  console.log(posicion[0]);
    $(this).append(app.array[i][j]);
   // al hacer click si es una bomba explotara
   if(app.array[i][j]==" "){
     $(this).css("background-color", "#ffd659");
   }
   if(app.array[i][j]=="*"){
     alert('perdistes');
     $('td').unbind('click');
   }
   });
},
reiniciar:function(){
    $("table").empty();
    app.iniciar();
}
}
$(document).ready( app.iniciar );

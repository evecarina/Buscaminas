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
  $("td").click(app.configuracion);
},
configuracion :function(event){
  $(this).attr('id');
  let posicion=this.id
  posicion.split(" ");
  let i=posicion[0];
  let j=posicion[1];
  $(this).append(app.array[i][j]);
  if(app.array[i][j]==" "){
     $(this).css("background-color", "#ffd659");
   }
  if(app.array[i][j]=="*"){
     $(this).empty();
     $(this).append('<img src="assets/img/bombita.gif" alt="">')
     alert('perdistes');
    //  cuando el jugador pierde no podra hacer click
     $('td').unbind('click');
   }
},
reiniciar:function(){
    $("table").empty();
    app.iniciar();
}
}
$(document).ready( app.iniciar );

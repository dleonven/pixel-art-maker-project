// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function createGrid(rows, columns){

  $('#pixel_canvas').children().remove();

  let tr = $("<tr />", {
  class: 'row'
  });

  let square = $("<th />", {
  class: 'square'
  });

  for(var i=0; i<rows; i++){
    $('#pixel_canvas').append(tr.clone());
    for(var j=0; j<columns; j++){
      $('#pixel_canvas').append(square.clone());
    }
  }

  

}






function makeGrid() {

  $('#sizePicker').submit(function(event){

    event.preventDefault();

    rows = $('#input_height').val();
    columns = $('#input_width').val();

    createGrid(rows,columns);



    $('th').click(function(){
      let pickedColor = $('#colorPicker').val();
      let th = $(this);
      let color = th.css('background-color');
      if(color=="rgba(0, 0, 0, 0)"){
        th.css('background-color',pickedColor);
      }
      else{
        th.css('background-color',"rgba(0, 0, 0, 0)");
      }
    });




  });
}

makeGrid();

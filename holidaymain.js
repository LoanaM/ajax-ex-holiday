$(document).ready(function(){
  //genero automaticamente il selettore annuale
  generateOptions(2000,2017,'#anni')

  $(document).on('click','#button',function(){
    var mese = $('#mesi').val()
    var paese = $('#country').val()
    var anno = $('#anni').val()

    $.ajax ({
      url: 'https://holidayapi.com/v1/holidays',
      method: "GET",
      data: {
          key:'32d92b68-8aae-4bc5-bab4-597ffee7b838',
          country: paese,
          month: mese,
          year: anno,
        },
      success: function(data) {
        for (var i = 0; i < data.holidays.length; i++) {
          $('.result').append(data.holidays[i].date + moment(data.holidays[i].date).format('dddd') + '<br>')
          
        }
        console.log(data);

      },
      error: function(){
        alert('error');
      }
    });

  });




//funzione che genera un numero di opzioni
function generateOptions(numberinit, numberfin, id) {
  var selectContainer = $(id)
  for (var i = numberinit; i <= numberfin; i++) {
    selectContainer.append('<option value=' + i + '>' + i + '</option>')
  }
}

});

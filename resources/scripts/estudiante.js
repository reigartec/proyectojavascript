var Estudiante = function(){
  var self = this;
  self.id="";
  self.nombre ="";
  self.matricula ="";
  self.ident = "";
  self.tel ="";
  self.email="";
};
  
function agregarEstudiante(estu){
  var rowEstudiante = "<tr id=\""+estu.id+"\">"
  +"<td>"+"<input type=\"checkbox\" value=\""+estu.id+"\" class=\"check\">"+"</td>"
  +"<td>"+estu.id+"</td>"
  +"<td>"+estu.nombre+"</td>"
  +"<td>"+estu.matricula+"</td>"
  +"<td>"+estu.ident+"</td>"
  +"<td>"+estu.tel+"</td>"
  +"<td>"+estu.email+"</td>"+
  "</tr>";

  $("#cuerpo").append(rowEstudiante);

  //alert(estu.nombre+rowEstudiante);
}





function guardarDB(estu){

  myStorage = window.localStorage;

  var estudiantes = [];
  var dbEstudiantes = myStorage.getItem(estu.id); //myStorage.getItem("estudiantes");//

  if(dbEstudiantes != null){
    estudiantes = JSON.parse(dbEstudiantes);
  }

  estudiantes.push(estu);
  myStorage.setItem(estu.id, JSON.stringify(estu));
  //myStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  
}

function eliminarEstudiante()
{

  var seleccionado = new Array();
  var n = jQuery(".check:checked").length;
  if (n > 0){
      jQuery(".check:checked").each(function(){
          seleccionado.push($(this).val());
          
      });
  }

  for (var i in seleccionado) {
    
    $( "#"+seleccionado[i]).remove();
    //alert(seleccionado[i]);
    //myStorage = window.localStorage;
    window.localStorage.removeItem(seleccionado[i].toString());
//    alert("Han sido eliminados! "+seleccionado[i].toString());
    /*window.localStorage.removeItem("540");
    alert("Eliminado el 540");*/
  }
  alert("Han sido eliminados! ");


  
}

$(document).ready(function() {

  /*$(".check").click('change', function(e) {
    alert('Hola');
  });*/
  
  myStorage = window.localStorage;
  var dbEstudiantes;
  for (var a in myStorage) {
    //console.log(a, ' = ', myStorage[a]);
    dbEstudiantes = myStorage.getItem(a);
    console.log(myStorage.getItem(a));
    if(dbEstudiantes != null){
      var estudiantes = JSON.parse(dbEstudiantes);
      agregarEstudiante(estudiantes);

     /* $.each(estudiantes, function(i, v){
        agregarEstudiante(v);

      });*/
    }
 }
  
    /*var dbEstudiantes = myStorage.getItem("...");
    if(dbEstudiantes != null){
      var estudiantes = JSON.parse(dbEstudiantes);

      $.each(estudiantes, function(i, v){
        agregarEstudiante(v);

      });
    }*/


    //alert('Hola'+ id);
   // myStorage = window.localStorage;
   // myStorage.removeItem($);
   // $( "#"+id).remove();
  jQuery(".check").click(function(){
    var seleccionado = new Array();
    var n = jQuery(".check:checked").length;
    if (n > 0){
        jQuery(".check:checked").each(function(){
            seleccionado.push($(this).val());
            
        });
    }
    //eliminarEstudiante(seleccionado);
    //alert(selectedCountry);
});
  
$('#select_all').click(function() {
  var c = this.checked;
  console.log(c);
  $(':checkbox').prop('checked',c);
});



  $("#agregar-estudiante").click(function() {

    var id = $("#ID").val();
    var nombre = $("#NOMBRE").val();
    var matricula = $("#MATRICULA").val();
    var ident = $("#IDENTIFICACION").val();
    var tel = $("#TELEFONO").val();
    var email = $("#EMAIL").val();


    var estud = new Estudiante();
    estud.id = id;
    estud.nombre = nombre;
    estud.matricula = matricula;
    estud.ident = ident;
    estud.tel = tel;
    estud.email = email;

    agregarEstudiante(estud);
    guardarDB(estud);
    //alert('Hoooolaaaa!!!');
  });



});




/*
function agregar()
{
        var estud = new Estudiante();
        estud.id = document.getElementById("ID").value;
        estud.nombre = document.getElementById("NOMBRE").value;
        estud.matricula = document.getElementById("MATRICULA").value;
        estud.ident = document.getElementById("IDENTIFICACION").value;
        estud.tel = document.getElementById("TELEFONO").value;
        estud.email = document.getElementById("EMAIL").value;
        addRow(estud);
}


    function addRow(estu){

      var table = document.getElementById("estudiantes");
      var tbody = document.getElementById("cuerpo");
      var tr = document.createElement("tr");
   //   var txt = document.createTextNode(estu.id);
    for (var i in estu) {
      var td = document.createElement("td");
      var txt = document.createTextNode(estu[i]); 
      console.log(estu[i]+" - "+i);
      td.appendChild(txt);
      tr.appendChild(td);
      tbody.appendChild(tr);
      //table.appendChild(tbody);
   }
          
    };*/



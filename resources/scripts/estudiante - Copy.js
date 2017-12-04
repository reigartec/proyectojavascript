 var Estudiante = function(){
      var self = this;
      self.id="";
      self.nombre ="";
      self.matricula ="";
      self.ident = "";
      self.tel ="";
      self.email="";
    };


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
          
    };

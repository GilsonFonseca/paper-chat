(function myFunction() {
  'use strict';
       var sexo = null;
     var teste = document.getElementById('user1').value;
     if(document.getElementById('masc').checked)
         sexo = document.getElementById('masc');
     else
        if(document.getElementById('femin').checked)
            sexo = document.getElementById('femin');
        else
          alert("Selecione um sexo");
     alert(sexo.label);
     window.open("chat.html", "_self");
})();
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnSubmit").addEventListener("click", function(e){
  		e.preventDefault();
      var to_do = document.getElementById("newTodo");

      //Validation
  		if(!to_do.value || to_do.value.length < 1) {
  		  window.alert("Text is mandatory");
  		}
      else {
        var itm = document.createElement('LI');
        itm.className = "ui-state-default";
        itm.innerHTML = 
        '<li class= style="" id="item">' +
                    '<div class="checkbox">' +
                      '<label><input type="checkbox" value="" class="check">'+ to_do.value +'</label>' +
                    '</div>'
        '</li>';
        document.getElementById("myList").appendChild(itm); 
        to_do.value = "";
      }
	});
  document.getElementById("btnClear").addEventListener("click", function(e){
      e.preventDefault();
      var inputs = document.getElementsByClassName('check');
      for(var i=0;i<inputs.length;i++){
        inputs[i].checked = false;
      }
  });
  document.getElementById("btnMark").addEventListener("click", function(e){
      e.preventDefault();
      var inputs = document.getElementsByClassName('check');
      for(var i=0;i<inputs.length;i++){
        inputs[i].checked = true;
      }
  });
  document.getElementById("btnDelete").addEventListener("click", function(e){
      e.preventDefault();
      var node = document.getElementById("myList");
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
  });
});
$(document).ready(function () {


  $(form).submit(function (e){
    e.preventDefault()

    let tarefa = $("#tarefaInput").val();

    console.log(tarefa)

    if (tarefa === "") {
      alert("O campo tarefa deve ser preenchido.");
      return;
    }

    let tarefaCadastrada = false
    $("#tarefas li").each(function (){
      if($(this).text() === tarefa){
        tarefaCadastrada = true
      }
    })
    
    if (tarefaCadastrada){
      alert("A tarefa \"" + tarefa + "\" já existe.")
      $("#tarefas li").each(function() {
        if ($(this).text() === tarefa) {
          $(this).remove();
        }
      });
    }

    $("#tarefas").append("<li>" + tarefa + "</li>")
    
    $("#tarefaInput").val("")
   
    $("#tarefas li").click(function() {
      $(this).css("text-decoration", "line-through");
    })

    
  })

  
})
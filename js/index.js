var getIdSelected;
function btAdd() {
  document.getElementById("table-add").style.display = "block";
}
function bt3() {
  document.getElementById("container3").style.display = "block";
}
function btRegister() {
  alert("Cadastro efetuado com sucesso");
  document.getElementById("container1").style.display = "none";
}
function btEdit() {
  alert("Cadastro editado com sucesso");
  document.getElementById("container2").style.display = "none";
}
function btDelete() {
  alert("Cadastro deletado com sucesso");
  document.getElementById("container3").style.display = "none";
}
function btContact() {
  document.getElementById("comunicar").style.display = "grid";
}
//INSERT
function btRegister() {
  var insert1 = $("#inp1").val();
  var insert2 = $("#inp2").val();
  var insert3 = $("#inp3").val();
  var insert4 = $("#inp4").val();
  $.post(
    "php/Insert.php",
    {
      insert1: insert1,
      insert2: insert2,
      insert3: insert3,
      insert4: insert4,
    },
    function (data) {
      document.getElementById("container1").style.display = "none";
      alert("Jogador adicionado com sucesso");
      $("#inp1").empty();
      $("#inp2").empty();
      $("#inp3").empty();
      $("#inp4").empty();
    }
  );
}
//SEND
function btSend() {
  var myData = null;
  document.getElementById("tabela").style.display = "flex";
  $.post("php/Send.php", function (data) {
    myData = JSON.parse(data);
    for (i = 0; i < myData.length; i++) {
      var tableTr =
        "<tr><td><input id='' type='checkbox'></td>" +
        "<td><input id='col0' name='rowId' type='name'  value='" +
        myData[i][0] +
        "'></td>" +
        "<td><input id='col1' name='comeOn' type='name' value='" +
        myData[i][1] +
        "'></td>" +
        "<td><input type='col2' name='comeTwo' value='" +
        myData[i][2] +
        "'></td>" +
        "<td><input type='col2' name='comeTree' value='" +
        myData[i][3] +
        "'></td>" +
        "<td><input type='col2' name='comeFour' value='" +
        myData[i][4] +
        "'></td></tr>";
      $(".table").append(tableTr);
    }
  });
}
//UPDATE
function btUpdate() {
  $(".table tr")
    .has(":checked")
    .each(function () {
      let rowId = $(this).find('input[name="rowId"]').val();
      var update1 = $(this).find('input[name="comeOn"]').val();
      var update2 = $(this).find('input[name="comeTwo"]').val();
      var update3 = $(this).find('input[name="comeTree"]').val();
      var update4 = $(this).find('input[name="comeFour"]').val();
      $.post(
        "php/Update.php",
        {
          rowId: rowId,
          update1: update1,
          update2: update2,
          update3: update3,
          update4: update4,
        },
        function (data) {
          let myData = JSON.parse(data);
          myData = JSON.parse(data);
          alert("Dados atualizado com sucesso");
        }
      );
    });
}
//DELETE
function btDelete() {
  var del = confirm("você realmente deseja excluir?");
  if (del) {
    $(".table tr")
      .has(":checked")
      .each(function (data) {
        let rowId = $(this).find('input[name="rowId"]').val();
        var delete1 = $(this).find('input[name="comeOn"]').val();
        var delete2 = $(this).find('input[name="comeTwo"]').val();
        var delete3 = $(this).find('input[name="comeTree"]').val();
        var delete4 = $(this).find('input[name="comeFour"]').val();
        $.post(
          "php/Delete.php",
          {
            rowId: rowId,
            delete1: delete1,
            delete2: delete2,
            delete3: delete3,
            delete4: delete4,
          },
          function (data) {
            alert("Excluído com seucesso");
          }
        );
      });
  }
}

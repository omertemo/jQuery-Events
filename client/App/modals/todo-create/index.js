import bootstrap from "bootstrap";

Template.publicModalTodoCreate.onRendered(function () {
  const self = this;

  const modalElement = document.getElementById("brdPublicModalTodoCreateModal");
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener("hidden.bs.modal", function (event) {
    self.$("form#brdPublicModalTodoCreateForm").trigger("reset");
  });
});

Template.publicModalTodoCreate.events({
  "submit form#brdPublicModalTodoCreateForm": function (event, template) {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    const obj = {
      todo: {
        name: name,
        description: description,
      },
    };

    Meteor.call("todos.create", obj, function (error, result) {
      //1. Parametre: atıcağım method'un adı
      //2. Parametre: göndereceğim veriler
      //3. Parametre: callback fonksiyonu -> dönecel verinin içeriği
      if (error) {
        //hata dönecekse hatanın içeriğini bu şekilde
        console.log("error", error);
      }

      console.log(result); //hata gelmeyecekse istediğimiz sonucu bu şekilde görebiliriz
      AppUtil.refreshTokens.set("todos", Random.id()); //içerisnde birden fazla reaktif değişken buluna bir obje
      event.target.reset(); // işlem bittikten sonra formu temizler
      template.modal.hide(); //
    });
  },
});

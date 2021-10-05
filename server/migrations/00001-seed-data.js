Migrations.add({
  version: 1,
  name: "Örnek veriler yükleniyor",
  up: function () {
    for (let index = 0; index < 5; index++) {
      Study.insert({
        name: `FirstName ${index}`,
        number: parseInt(Random.fraction() * 1000),
      });
    }
  },
});

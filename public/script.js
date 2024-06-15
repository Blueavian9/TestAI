$(document).ready(function () {
  function populateNameDropdown() {
    let $nameDropdown = $("#nameDropdown");
    data.forEach((item) => {
      $nameDropdown.append(
        $("<option></option>").val(item.name).text(item.name)
      );
    });
  }

  function updateLanguageDropdown(selectedName) {
    let $languageDropdown = $("#languageDropdown");
    $languageDropdown.empty();
    let selectedItem = data.find(item => {
      return item.name === selectedName;
    });

    if (selectedItem) {
      $languageDropdown.append(
        $("<option></option>")
          .val(selectedItem.language_id)
          .text(selectedItem.language_id)
      );
    }
  }

  populateNameDropdown();

  updateLanguageDropdown($("#nameDropdown").val());

  $("#nameDropdown").change(function() {
    let selectedName = $(this).val();
    updateLanguageDropdown(selectedName);
  });
});

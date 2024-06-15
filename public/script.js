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
    console.log("selectedItem", selectedItem);
    if (selectedItem) {
      $languageDropdown.append(
        $("<option></option>")
          .val(selectedItem.language_id)
          .text(selectedItem.language_id)
      );
      console.log("appending");
    } else {
      console.log("not appending");
    }
  }

  populateNameDropdown();

  updateLanguageDropdown($("#nameDropdown").val());

  $("#nameDropdown").change(() => {
    let selectedName = $(this).val();
    console.log("updating");
    updateLanguageDropdown(selectedName);
  });
});

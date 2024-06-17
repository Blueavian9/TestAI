
//Original script.js code: 
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

  const textInput = document.getElementById("audioText");
  const voiceSelect = document.getElementById("nameDropdown");
  const audioElement = document.getElementById("audio");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();


    const data = {
      voice: voiceSelect.value,
      audioText: textInput.value,
    }

    axios.post("http://localhost:3333/api/synthesize.");
  });


});





// $(document).ready(function () {
//   $.getJSON('data.json', function (data) {
//     populateNameDropdown(data);
//     updateLanguageDropdown(data, $('#nameDropdown').val());

//     $('#nameDropdown').change(function () {
//       let selectedName = $(this).val();
//       updateLanguageDropdown(data, selectedName);
//     });

//     $('#submitButton').click(function (event) {
//       event.preventDefault();
//       handleSubmit();
//     });
//   });

//   function populateNameDropdown(data) {
//     let $nameDropdown = $('#nameDropdown');
//     data.forEach((item) => {
//       $nameDropdown.append(`<option value="${item.name}">${item.name}</option>`);
//     });
//   }

//   function updateLanguageDropdown(data, selectedName) {
//     let $languageDropdown = $('#languageDropdown');
//     $languageDropdown.empty();

//     let selectedItem = data.find((item) => item.name === selectedName);

//     if (selectedItem) {
//       $languageDropdown.append(`<option value="${selectedItem.language_id}">${selectedItem.language_id}</option>`);
//     }
//   }

//   function handleSubmit() {
//     let name = $('#nameDropdown').val();
//     let language = $('#languageDropdown').val();
//     let text = $('#audioText').val();

//     let payload = {
//       name: name,
//       language: language,
//       text: text
//     };

//     axios.post('/api/submit', payload)
//       .then(function (response) {
//         console.log(response.data);
//         // Handle success response
//       })
//       .catch(function (error) {
//         console.error(error);
//         // Handle error
//       });
//   }
// });

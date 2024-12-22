const form = document.querySelector('.form-container');

    form.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
        console.log('Form submitted!');
        alert('Form has been successfully submitted!');
    });


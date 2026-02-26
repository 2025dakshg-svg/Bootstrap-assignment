
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el))

=
(() => {
  const forms = document.querySelectorAll('.needs-validation')

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault()
      }
      form.classList.add('was-validated')
    })
  })
})();
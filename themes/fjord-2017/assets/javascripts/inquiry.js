document.addEventListener('DOMContentLoaded', () => {
  if (!document.forms.inquiry) { return; }

  const form = document.forms.inquiry;

  form.addEventListener('submit', (event) => {
    let errorCount = 0;
    event.preventDefault();

    // username
    if (form.username.value.length > 0) {
      document.getElementById('username-error').classList.add('is-hide')
    } else {
      document.getElementById('username-error').classList.remove('is-hide')
      errorCount += 1;
    }

    // email
    if (form.email.value.length > 0) {
      document.getElementById('email-error').classList.add('is-hide')
    } else {
      document.getElementById('email-error').classList.remove('is-hide')
      errorCount += 1;
    }

    // body
    if (form.name.value.length > 0) {
      document.getElementById('name-error').classList.add('is-hide')
    } else {
      document.getElementById('name-error').classList.remove('is-hide')
      errorCount += 1;
    }

    // pp
    if (form.pp.checked) {
      document.getElementById('pp-error').classList.add('is-hide')
    } else {
      document.getElementById('pp-error').classList.remove('is-hide')
      errorCount += 1;
    }

    if (errorCount == 0) {
      form.submit();
    }
  });
});

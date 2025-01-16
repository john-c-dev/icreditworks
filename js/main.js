function togglePasswordVisibility() {
  console.log('togglePasswordVisibility')
  const passwordField          = document.querySelector('.password-field--js')
  const passwordVisibilityIcon = document.querySelector('.password-visibility-icon--js')

  console.log(passwordField)
  console.log(passwordVisibilityIcon)

  if (passwordField.type === 'password') {
    passwordField.type = 'text'
    passwordVisibilityIcon.classList.add('hide-icon')
  } else {
    passwordField.type = 'password'
    passwordVisibilityIcon.classList.remove('hide-icon')
  }
}
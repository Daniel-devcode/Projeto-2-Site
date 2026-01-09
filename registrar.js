//script registrar//
function togglePassword(id) {
      const input = document.getElementById(id);
      input.type = input.type === 'password' ? 'text' : 'password';
    }

    const form = document.getElementById('cadastroForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('error');

    form.addEventListener('submit', function (e) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
      }
    });

    confirmPasswordInput.addEventListener('input', function () {
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
      }
    });
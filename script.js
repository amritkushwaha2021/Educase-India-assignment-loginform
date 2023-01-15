const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    const activeTab = document.querySelector('.tab-content.active');
    activeTab.classList.remove('active');
    const activeLink = document.querySelector('.tab-link.active');
    activeLink.classList.remove('active');

    const tabId = e.target.dataset.tab;
    document.getElementById(tabId).classList.add('active');
    e.target.classList.add('active');
  });
});

const rememberMeCheckbox = document.getElementById('remember-me');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Check if the user has previously chosen to be remembered
if (localStorage.getItem('rememberMe') === 'true') {
  rememberMeCheckbox.checked = true;
  emailInput.value = localStorage.getItem('email');
  passwordInput.value = localStorage.getItem('password');
}

// Add event listener to remember me checkbox
rememberMeCheckbox.addEventListener('change', e => {
  if (e.target.checked) {
    localStorage.setItem('rememberMe', 'true');
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
  } else {
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
});

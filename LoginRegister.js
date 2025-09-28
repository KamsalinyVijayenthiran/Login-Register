// JavaScript to handle form switching if needed
        const container = document.querySelector('.container');
        const loginLink = document.querySelector('.SignInLink');
        const RegisterLink = document.querySelector('.SignUpLink');

        RegisterLink.addEventListener('click', (e) => {
            container.classList.add('active');
        })

        loginLink.addEventListener('click', (e) => {
            container.classList.remove('active');
        })
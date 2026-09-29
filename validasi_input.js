document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const nama = document.getElementById('nama').value.trim();
    const tanggal_lahir = document.getElementById('tanggal_lahir').value;
    const alamat = document.getElementById('alamat').value.trim();
    const nomor_telpon = document.getElementById('nomor_telpon').value.trim();

    resetErrors();
    let isValid = true;

    if (username === '') {
        showError('username', 'Username tidak boleh kosong.');
        isValid = false;
    } else if (username.length < 3) {
        showError('username', 'Username minimal 3 karakter.');
        isValid = false;
    }

    if (password === '') {
        showError('password', 'Password tidak boleh kosong.');
        isValid = false;
    } else if (password.length < 8) {
        showError('password', 'Password minimal 8 karakter.');
        isValid = false;
    }

    if (nama === '') {
        showError('nama', 'Nama tidak boleh kosong.');
        isValid = false;
    }

    if (tanggal_lahir === '') {
        showError('tanggal_lahir', 'Tanggal lahir tidak boleh kosong.');
        isValid = false;
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const birthDate = new Date(tanggal_lahir);
        if (birthDate > today) {
            showError('tanggal_lahir', 'Tanggal lahir tidak boleh di masa depan.');
            isValid = false;
        }
    }

    if (alamat === '') {
        showError('alamat', 'Alamat tidak boleh kosong.');
        isValid = false;
    }

    if (nomor_telpon === '') {
        showError('nomor_telpon', 'Nomor telpon tidak boleh kosong.');
        isValid = false;
    } else if (!nomor_telpon.startsWith('62')) {
        showError('nomor_telpon', 'Nomor telpon harus berawalan 62.');
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});

function showError(fieldId, message) {
    const errorElement = document.getElementById('error-' + fieldId);
    const inputElement = document.getElementById(fieldId);
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    inputElement.classList.add('border-red-500');
}

function resetErrors() {
    const fields = ['username', 'password', 'nama', 'tanggal_lahir', 'alamat', 'nomor_telpon'];
    fields.forEach(field => {
        const errorElement = document.getElementById('error-' + field);
        const inputElement = document.getElementById(field);
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
        inputElement.classList.remove('border-red-500');
    });
}
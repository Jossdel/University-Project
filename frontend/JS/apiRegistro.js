console.log("JS cargado");

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('caPw').addEventListener('input', function () {
    var val = this.value;

    var bars = ['cb1','cb2','cb3','cb4'].map(function (id) {
      return document.getElementById(id);
    });

    var lbl = document.getElementById('caLbl');

    // 🔥 CAMBIO CLAVE AQUÍ
    bars.forEach(function (b) { 
      b.classList.remove('weak', 'medium', 'strong'); 
      b.style.opacity = '0.2';
    });

    lbl.textContent = '';
    lbl.style.color = '';

    if (!val) return;

    var score = 0;
    if (val.length >= 8)          score++;
    if (/[A-Z]/.test(val))        score++;
    if (/[0-9]/.test(val))        score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    var cls  = score <= 1 ? 'weak' : score <= 2 ? 'medium' : 'strong';
    var lbls = ['', 'Débil', 'Débil', 'Regular', 'Fuerte'];
    var clrs = ['', '#c0392b', '#c0392b', '#d4820a', '#5a7a2e'];

    bars.forEach(function (bar, index) {
      if (index < score) {
        bar.classList.add(cls);
        bar.style.opacity = '1';
      }
    });

    lbl.textContent = lbls[score] || '';
    lbl.style.color = clrs[score] || '#a07850';
  });

  document.getElementById('caEyeBtn').addEventListener('click', function () {
    var inp = document.getElementById('caPw');
    var ico = document.getElementById('caEye');

    if (inp.type === 'password') {
      inp.type = 'text';
      ico.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
      inp.type = 'password';
      ico.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
  });

  document.getElementById('caSubmit').addEventListener('click', function () {
    var nombre   = document.getElementById('caNombre').value.trim();
    var apellido = document.getElementById('caApellido').value.trim();
    var email    = document.getElementById('caEmail').value.trim();
    var password = document.getElementById('caPw').value;

    if (!nombre || !apellido || !email || !password) {
      alert('Por favor completa todos los campos.');
      return;
    }

    console.log('Registro:', { nombre, apellido, email });

    var toast = document.getElementById('caToast');
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 3000);
  });

});
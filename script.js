// Deteksi halaman untuk fungsi berbeda
const isIndex = document.querySelector('#formPengaduan') !== null;

if (isIndex) {
  const form = document.getElementById('formPengaduan');
  const listPengaduan = document.getElementById('listPengaduan');

  function simpanPengaduan(pengaduan) {
    let data = JSON.parse(localStorage.getItem('pengaduanList')) || [];
    data.push(pengaduan);
    localStorage.setItem('pengaduanList', JSON.stringify(data));
  }

  function tampilkanPengaduan() {
    listPengaduan.innerHTML = '';
    const data = JSON.parse(localStorage.getItem('pengaduanList')) || [];
    data.forEach((item, index) => {
      const el = document.createElement('div');
      el.classList.add('pengaduan-item');
      el.innerHTML = `
        <strong>Nama:</strong> ${item.name}<br>
        <strong>Email:</strong> ${item.email}<br>
        <strong>Pesan:</strong> <pre>${item.message}</pre>
        <small><em>Dikirim: ${item.date}</em></small>
      `;
      listPengaduan.appendChild(el);
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const pengaduan = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      date: new Date().toLocaleString()
    };
    simpanPengaduan(pengaduan);
    form.reset();
    tampilkanPengaduan();
  });

  tampilkanPengaduan();
}

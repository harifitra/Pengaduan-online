const listPengaduanAdmin = document.getElementById('listPengaduanAdmin');

function tampilkanPengaduanAdmin() {
  const data = JSON.parse(localStorage.getItem('pengaduanList')) || [];
  if (data.length === 0) {
    listPengaduanAdmin.innerHTML = '<div class="alert alert-warning">Belum ada pengaduan yang masuk.</div>';
    return;
  }

  listPengaduanAdmin.innerHTML = '';
  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('pengaduan-item');
    div.innerHTML = `
      <h5>Pengaduan #${index + 1}</h5>
      <p><strong>Nama:</strong> ${item.name}</p>
      <p><strong>Email:</strong> ${item.email}</p>
      <p><strong>Pesan:</strong><br><pre>${item.message}</pre></p>
      <p><em>Waktu Kirim: ${item.date}</em></p>
    `;
    listPengaduanAdmin.appendChild(div);
  });
}

function hapusSemua() {
  if (confirm("Apakah Anda yakin ingin menghapus semua pengaduan?")) {
    localStorage.removeItem('pengaduanList');
    tampilkanPengaduanAdmin();
  }
}

tampilkanPengaduanAdmin();

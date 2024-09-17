let tabl, i, j;

tabl = "<table border='1' width='650' cellspacing='0' cellpadding='3'>";
for (i = 1; i <= 9; i++) {
  tabl += "<tr>";
  for (j = 2; j <= 9; j++) {
    tabl += `<td> ${j} x ${i} = ${i * j} </td>`;
  }
  tabl += "</tr>";
  j = 2;
}

tabl += "</table>";
document.write(tabl);

function addBookHybrid(title, desc, year) {
  const tbody = document.querySelector('tbody')
  const tr = document.createElement('tr')
  tr.innerHTML = `
      <td>${title}</td>
      <td>${desc}</td>
      <td>${year}</td>
`
  tbody.append(tr)
}

addBookHybrid('HP', 'first book', 1990)
addBookHybrid('HP2', 'second book', 1990)
addBookHybrid('HP3', 'third book', 1990)
addBookHybrid('LoTR', 'long book', 1954)

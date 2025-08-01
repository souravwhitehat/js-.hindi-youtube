const rowInput = document.getElementById('rowCount')
const colInput = document.getElementById('colCount')
const button = document.getElementById('generateTable')
const result = document.getElementById('tableContainer')
button.addEventListener('click', (e) => {
    e.preventDefault()
    const rowval = (rowInput.value)
    const colval = (colInput.value)
    console.log(rowval);
    console.log(colval);

    const table = document.createElement('table')
    console.log(table);

    for (let i = 0; i < rowval; i++) {
        const tablerow = document.createElement('tr')
        let cell;
        // console.log(tablerow);
        for (let j = 0; j < colval; j++) {


            if (i === 0) {
                cell = document.createElement('th')
                cell.textContent = `Heading ${j + 1}`
                tablerow.appendChild(cell)
            }
            else {
                cell = document.createElement('td')
                cell.textContent = ''
                cell.contentEditable = true
            }


            tablerow.appendChild(cell)
            cell.style.border = '1px solid black'
            cell.style.padding = '5px'


        }
        table.style.border = '1px solid black'
        table.style.borderCollapse = 'collapse'
        table.appendChild(tablerow)
    }
    result.innerHTML = ''
    result.appendChild(table)


})
const showdata = document.getElementById('saveTable');

showdata.addEventListener('click', (e) => {
  e.preventDefault();

  const trdata = document.querySelectorAll('table tr'); // move inside the function
  let arr = [];

  trdata.forEach((row) => {
    let rowData = [];
    const cells = row.querySelectorAll('th, td');

    cells.forEach((cell) => {
      rowData.push(cell.textContent.trim());
    });

    arr.push(rowData);
  });

  console.log(arr);
});

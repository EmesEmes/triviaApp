
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
        

const Table = () => {
  const [value, setValue] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('data')
    if (data) {
      const data2 = JSON.parse(data)
      const top5 = data2.sort((a, b) => b.points - a.points).slice(0, 5);
      setValue(top5)
    } else {
      localStorage.setItem('data', JSON.stringify([]))
    }

  }, [])
  
  return (
    <DataTable value={value} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name"></Column>
    <Column field="points" header="Points"></Column>
</DataTable>
  )
}

export default Table
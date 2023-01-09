import React, { useEffect } from 'react'
import Table, { ReadyPill, RevenuePill, AffiliatePill } from './Table'  // new

const getData = () => {
  const data = [
    {
        checkbox: <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> 
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>,
        name: 'Jane Cooper',
        referral: '08 Jan 2023',
        revenue: "356.06",
        paid: "0.00",
        unpaid: "35.61",
        ready: "0.00",
        breakdown: 'view',
        type: 'type'
    },
  ]
  return [...data, ...data, ...data]
}


function doStuff(text) {
  const lowerCased = text.toLocaleLowerCase();
  const words = lowerCased.split(' ');
  words.reverse();

  const trimmedWords = [];
  for (let i in words) {
    trimmedWords.push(words[i].trim());
  }
  console.log(trimmedWords);
  const longWords = [];
  for (let i in trimmedWords) {
    if (trimmedWords[i].length > 5) {
      longWords.push(trimmedWords[i]);
    }
  }

  let result = '';
  for (let i in longWords) {
    result += longWords[i];
    result += ', ';
  }

  return result.slice(0, -2);
}

function App() {
  
  const columns = React.useMemo(() => [
    {
        Header: <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> 
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>,
        accessor: 'checkbox'
    },
    {
      Header: "Afiliate Name",
      accessor: 'name',
      Cell: AffiliatePill
    },
    {
      Header: "Most recent referral",
      accessor: 'referral',
    },
    {
      Header: "Revenue Generated",
      accessor: 'revenue',
      Cell: RevenuePill,
    },
    {
      Header: "Paid Payouts",
      accessor: 'paid',
    },
    {
      Header: "Unpaid Payouts",
      accessor: 'unpaid',
    },
    {
        Header: "Ready Payouts",
        accessor: 'ready',
        Cell: ReadyPill
    },
    {
        Header: "Breakdown",
        accessor: 'breakdown',
    },
    {
        Header: "Breakdown",
        accessor: 'type',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])
  // doStuff("Hello World bro")
  // console.log(doStuff("Hello World bro"));
 useEffect(() => {
  console.log(doStuff("Hello world goodluck, youarebest"));
 }, [])
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-6">
          {/* <Table columns={columns} data={data} /> */}
          {/* <button onClick={doStuff("Hello world")}></button> */}
        </div>
      </main>
    </div>
  );
}

export default App;

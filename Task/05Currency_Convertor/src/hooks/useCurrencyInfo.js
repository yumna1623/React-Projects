
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;


// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     if (!currency) return; // Skip if currency is not provided

//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]))
//       .catch((error) => {
//         console.error("Error fetching currency data:", error);
//         setData({}); // Reset data in case of error
//       });
//   }, [currency]);

//   // Log the updated data
//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return data;
// }

// export default useCurrencyInfo;
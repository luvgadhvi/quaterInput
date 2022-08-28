import { SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Test1Wrapper from "./Test1.wrapper";

const Test1Container = () => {
  const [quarterList, setQuarterList] = useState<QuarterDropDownValue[]>([])
  const [selectedQuarter, setSelectedQuarter] = useState<QuarterDropDownValue | null>(null)
  const startDate = '2021-4-23';
  const todayDate = new Date();

  const extractQuarter = (monthValue: number) => {
    let quarterValue: number;
    if (monthValue > 0 && monthValue < 4) {
      quarterValue = 1
    } else if (monthValue >= 4 && monthValue < 7) {
      quarterValue = 2
    } else if (monthValue >= 7 && monthValue < 10) {
      quarterValue = 3
    } else if (monthValue >= 10 && monthValue < 13) {
      quarterValue = 4
    } else {
      quarterValue = 0;
    }
    console.log(quarterValue, 'quaterValue')
    return quarterValue
  }

  const getQuarterList = (startDate: string, endDate: Date) => {
    const listValue: QuarterDropDownValue[] = [];
    const endDateArray: number[] = [endDate.getFullYear(), endDate.getMonth(), endDate.getDate()]
    const startDateArray = startDate.split("-");
    const startYear: number = parseInt(startDateArray[0]);
    const endYear: number = endDateArray[0];
    const startQuarterValue: number = extractQuarter(parseInt(startDateArray[1]));
    const endQuakerValue: number = extractQuarter(endDateArray[1]);
    console.log(startQuarterValue, endQuakerValue);
    for (let i = startYear; i <= endYear; i++) {
      if (i === startYear) {
        for (let j = startQuarterValue; j <= 4; j++) {
          console.log(i, j)
          listValue.push({
            label: `Q${j} ${i}`,
            value: `Q${j} ${i}`,
          })
        }
      }
      else if (i === endYear) {
        for (let j = 1; j < endQuakerValue; j++) {
          console.log(i, j)
          listValue.push({
            label: `Q${j} ${i}`,
            value: `Q${j} ${i}`,
          })
        }
      } else {
        console.log(i)
        for (let j = 1; j <= 4; j++) {
          listValue.push({
            label: `Q${j} ${i}`,
            value: `Q${j} ${i}`,
          })
        }
      }
    }
    return listValue;

  }

  const handleQuarterChange = (event: SelectChangeEvent) => {
    alert(event.target.value);
    setSelectedQuarter({
      label: event.target.value,
      value: event.target.value
    })
  };
  useEffect(() => {
    console.log("startDate", startDate,)
    const currentList: QuarterDropDownValue[] = getQuarterList(startDate, todayDate)
    console.log(currentList)
    setQuarterList(currentList)

  }, [])

  return (
    <Test1Wrapper selectedQuarter={selectedQuarter} quarterList={quarterList} handleQuarterChange={handleQuarterChange} />
  )
}

export default Test1Container;

type QuarterDropDownValue = {
  label: string;
  value: string
}
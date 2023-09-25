function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
  
    if (winRecord) {
      return winRecord.year;
    } else {

      return undefined;
    }
  }
  
  // Example 
  const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    
  ];
  
  const winYear = superbowlWin(record);
  console.log(winYear); 
  

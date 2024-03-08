function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"
  console.log(encouragingPromptFunction()); // Output: "You are !!!special!!!"
  
function fortuneTeller(name, age) {
  let nameFortune = "";
  let ageFortune = "";

  // Name-based fortunes
  if (name.length > 7) {
    nameFortune += "will marry late in life. ";
  } else if (name.length < 5) {
    nameFortune += "will marry within a year. ";
  } else {
    nameFortune += "will encounter a once-in-a-lifetime opportunity. ";
  }

  if (name[0].toLowerCase() === "r") {
    nameFortune += "will be rich. ";
  }

  if (name.toLowerCase().includes("i")) {
    nameFortune += "will fall in love this week. ";
  }

  // Age-based fortunes (custom rules)
  if (age < 18) {
    ageFortune = "will invent something that changes the world.";
  } else if (age >= 18 && age <= 30) {
    ageFortune = "will travel to a place they've only dreamed of.";
  } else {
    ageFortune = "will receive unexpected good news about money.";
  }

  return `${name} ${nameFortune}${ageFortune}`;
}

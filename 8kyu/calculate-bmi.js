// Calculate BMI

// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height^2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// MY SOLUTION:
function bmi(weight, height){
    let bmi = weight / height**2
    if(bmi <= 18.5){
      return 'Underweight'
    }else if(bmi <= 25.0){
      return 'Normal'
    }else if(bmi <= 30.0){
      return 'Overweight'
    }else if(bmi > 30.0){
      return 'Obese'
    }
}

// GOOD SOLUTION:
function bmi(weight, height){
    let bmi = weight / height**2
    switch(true){
      case bmi <= 18.5: return 'Underweight'
      case bmi <= 25.0: return 'Normal'
      case bmi <= 30.0: return 'Overweight'
      case bmi > 30: return 'Obese'
    }
}
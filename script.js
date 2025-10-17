// Totals
const Total = document.getElementById("Total_Income_Value")
const Cost = document.getElementById("Total_Expense_Value")
const Balance = document.getElementById("Net_Balance_Value")

// Input Fields
const Title = document.getElementById("Title")
const Amount = document.getElementById("Amount")

// DropDown
const Select = document.getElementById("Select")

// Buttons
const Add = document.getElementById("Add")
const Clear = document.getElementById("Clear")


// Functionalities Start Here

// Data Const
const Income = 0
const Expense = 0
const NetWorth = Income - Expense

Total.innerHTML = Income
Cost.innerHTML = Expense
Balance.innerHTML = NetWorth

const Data = []


Add.addEventListener("click", () => {
    // Select.value
    if ((Title.value).length > 0 && (Amount.value).length > 0) {
        Data.push({
            id: Date.now(),
            "Title": Title.value,
            "Amount": Amount.value
        })
        Title.value = ""
        Amount.value = ""
    }
    else {
        alert("Enter All The Fields")
    }


})

console.log("Income :", Data)
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

// TableData To Show The Values
const Lists = document.getElementById("TableData")



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
            "title": Title.value,
            "amount": Amount.value,
            "filter": Select.value,
        })
        localStorage.setItem("data", JSON.stringify(Data))
        Title.value = ""
        Amount.value = ""
    }
    else {
        alert("Enter All The Fields")
    }
})


// Take Data From LocalStorage
const GetDataToShow = () => {
    const Items = JSON.parse(localStorage.getItem("data"))
    Items.forEach(element => {
        Lists.innerHTML = `
            <tr class="border-2">
                <td class="text-center">${element.title}</td>
                <td class="text-center">${element.amount}</td>
                <td class="text-center">${element.filter}</td>
                <td class=" text-center">
                    <button value=${element.id} id="HandleDelete">Delete</button>
                </td>
            </tr>
        `
    });
}

// Delete Item From Local Storage
document.addEventListener("DOMContentLoaded", () => {
    // GetDataToShow()
    const DeleteBtn = document.getElementById("HandleDelete");
    DeleteBtn.addEventListener("click", () => {
        console.log(DeleteBtn.value);
    });
});


const Items = JSON.parse(localStorage.getItem("data"))
Items.forEach(element => {
    Lists.innerHTML = `
        <tr class="border-2">
            <td class="text-center">${element.title}</td>
            <td class="text-center">${element.amount}</td>
            <td class="text-center">${element.filter}</td>
            <td class=" text-center">
                <button value=${element.id} id="HandleDelete">Delete</button>
            </td>
        </tr>
    `
});
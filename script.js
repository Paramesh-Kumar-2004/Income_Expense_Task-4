// Totals
const Total = document.getElementById("Total_Income_Value")
const Cost = document.getElementById("Total_Expense_Value")
const Balance = document.getElementById("Net_Balance_Value")

// Input Fields
const Title = document.getElementById("Title")
const Amount = document.getElementById("Amount")

// DropDown
const Select = document.getElementById("Select")

// Radio Buttons
const Category = document.getElementsByName("radioBtn")

// Buttons
const Add = document.getElementById("Add")
const Clear = document.getElementById("Clear")

// TableData To Show The Values
const Lists = document.getElementById("TableData")



// Functionalities Start Here


function HandleCheckValue() {
    for (let i = 0; i < Category.length; i++) {
        if (Category[i].checked) {
            return Category[i].id
            break
        }
    }
}
Category.forEach((radio) => {
    radio.addEventListener("click", () => {
        GetDataToShow()
    });
});


// Data Const
const Data = JSON.parse(localStorage.getItem("data")) || []

const HandeleValueSet = () => {
    const Income = Data.reduce((sum, Item) => {
        if (Item.filter === "Income") {
            return Number(Item.amount) + sum
        }
        else {
            return sum
        }
    }, 0)

    const Expense = Data.reduce((sum, Item) => {
        if (Item.filter === "Expense") {
            return Number(Item.amount) + sum
        }
        else {
            return sum
        }
    }, 0)

    const NetWorth = Income - Expense

    Total.innerHTML = Income
    Cost.innerHTML = Expense
    Balance.innerHTML = NetWorth
}


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
        HandeleValueSet()

        Title.value = ""
        Amount.value = ""
    }
    else {
        alert("Enter All The Fields")
    }
})


Clear.addEventListener("click", () => {
    Title.value = ""
    Amount.value = ""
    HandeleValueSet()
})


// Take Data From LocalStorage And Show In Table
const GetDataToShow = () => {
    const FilterBy = HandleCheckValue()
    console.log(FilterBy)
    Lists.innerHTML = ""
    let count = 0
    Data.forEach((element, key) => {


        if (FilterBy === "All") {
            count += 1
            Lists.innerHTML += `
                <tr class="border-b-2 border-t-2 border-slate-500">
                    <td class="text-center font-bold text-base">${count}</td>
                    <td class="text-center font-bold text-base">${element.title}</td>
                    <td class="text-center font-bold text-base">${element.amount}</td>
                    <td class="text-center font-bold text-base">${element.filter}</td>
                    <td class=" text-center text-white font-bold text-base">
                        <button value=${element.id} id="HandleDelete" class="m-1 py-1 px-2 rounded-md bg-red-600">Delete</button>
                    </td>
                    <td class=" text-center font-bold text-base text-white">
                        <button value=${element.id} id="HandleUpdate" class="m-1 py-1 px-2 rounded-md bg-green-600">Update</button>
                    </td>
                </tr>
            `
        }
        else if (FilterBy === "Income") {
            if (element.filter === "Income") {
                count += 1
                Lists.innerHTML += `
                    <tr class="border-b-2 border-t-2 border-slate-500">
                        <td class="text-center font-bold text-base">${count}</td>
                        <td class="text-center font-bold text-base">${element.title}</td>
                        <td class="text-center font-bold text-base">${element.amount}</td>
                        <td class="text-center font-bold text-base">${element.filter}</td>
                        <td class=" text-center text-white font-bold text-base">
                            <button value=${element.id} id="HandleDelete" class="m-1 py-1 px-2 rounded-md bg-red-600">Delete</button>
                        </td>
                        <td class=" text-center font-bold text-base text-white">
                            <button value=${element.id} id="HandleUpdate" class="m-1 py-1 px-2 rounded-md bg-green-600">Update</button>
                        </td>
                    </tr>
                `
            }
        }
        else {
            if (element.filter === "Expense") {
                count += 1
                Lists.innerHTML += `
                    <tr class="border-b-2 border-t-2 border-slate-500">
                        <td class="text-center font-bold text-base">${count}</td>
                        <td class="text-center font-bold text-base">${element.title}</td>
                        <td class="text-center font-bold text-base">${element.amount}</td>
                        <td class="text-center font-bold text-base">${element.filter}</td>
                        <td class=" text-center text-white font-bold text-base">
                            <button value=${element.id} id="HandleDelete" class="m-1 py-1 px-2 rounded-md bg-red-600">Delete</button>
                        </td>
                        <td class=" text-center font-bold text-base text-white">
                            <button value=${element.id} id="HandleUpdate" class="m-1 py-1 px-2 rounded-md bg-green-600">Update</button>
                        </td>
                    </tr>
                `
            }
        }

    });
}



// Delete Item From Local Storage
document.addEventListener("DOMContentLoaded", () => {
    GetDataToShow()
    HandeleValueSet()
    const DeleteBtn = document.getElementById("HandleDelete");
    DeleteBtn.addEventListener("click", () => {
        console.log("Delete : ", DeleteBtn.value);
    });

    const UpdateBtn = document.getElementById("HandleUpdate");
    UpdateBtn.addEventListener("click", () => {
        console.log("Update : ", UpdateBtn.value);
    });

});


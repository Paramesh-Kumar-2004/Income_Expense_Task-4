# 💰 Income Expense Tracker


## 📌 Project Overview

A simple and efficient **Income Expense Tracker** built using **HTML, CSS, and JavaScript (Local Storage + DOM Manipulation)**.  
This web app allows users to **add, edit, and delete** their income or expense records while maintaining data persistence through Local Storage.

---

## 📊 App Preview

When you open the app:

- Enter details like **Title**, **Amount**, and select **Income/Expense**.
- Click **Add** to store the entry in Local Storage.
- View all entries in a dynamic table below.
- Use **Update** to modify an existing record via a popup modal.
- Use **Delete** to remove specific entries instantly.

---

## 🧩 Features

- ➕ **Add new income/expense entries**
- ✏️ **Update entries** via modal without affecting others
- ❌ **Delete entries** by ID from Local Storage
- 💾 **Persistent data** using `localStorage`
- 🔁 **Instant refresh** after updates or deletions
- 📱 **Responsive and clean UI**

---

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **TAILWIND CSS** – Layout and responsive design
- **JavaScript (ES6)** – Logic, event handling, and local storage management

---

## ⚙️ How It Works

1. Each entry (income or expense) is stored as an object:
   ```js
   { id: 1760770184814, title: "Salary", amount: "5000", filter: "Income" }
   ```
2. Data is stored and updated in `localStorage`.
3. The app dynamically refreshes the displayed data after every change.
4. Updates open in a **popup modal** for easy inline editing.

---

## 🚀 Live Demo

- **GitHub Pages:** [https://paramesh-kumar-2004.github.io/Income_Expense_Task-4/](https://paramesh-kumar-2004.github.io/Income_Expense_Task-4/)

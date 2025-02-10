# 📸 Duplicate Photo Check Bot

## 📌 Overview
The **Duplicate Photo Check Bot** is a user-friendly application developed with **.NET Core 7** and **Angular 16** to detect and manage duplicate photos effortlessly. 🚀

This application allows users to:

✅ **Identify Duplicate Photos** 🖼️  
✅ **Move Duplicates to a Separate Folder** 📂  
✅ **Easily Manage and Delete Duplicates** ❌

## 🏗️ Project Structure
```
duplicate-photo-check-bot
├── duplicate-photo-check.Api        # Presentation layer (handles HTTP requests)
├── duplicate-photo-check.Application # Business logic and duplicate detection algorithm
└── duplicate-photo-check.Front       # Front-end built with Angular 16
```

## 🖼️ Screenshots
![Imagem](https://github.com/omatheusribeiro/duplicate-photo-check/assets/48257781/61a695ad-a152-4cfe-9a90-3660ebd7f84f)

## 🚀 Getting Started

### 📋 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) (latest version)
- [.NET Core 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)

### 🔧 Installation
```bash
# Clone the repository
git clone https://github.com/omatheusribeiro/duplicate-photo-check-bot.git
cd duplicate-photo-check-bot

# Install front-end dependencies
cd duplicate-photo-check.Front
npm install

# Go back to the root directory
cd ..
```

### ▶️ Running the Project

#### 1️⃣ Start the API
```bash
cd duplicate-photo-check.Api
dotnet run
```

#### 2️⃣ Start the Front-end
```bash
cd ../duplicate-photo-check.Front
ng serve
```

Open your browser and go to: **http://localhost:4200/** 🌐

## ⚙️ How It Works
1. **Select the source folder** containing your photos.
2. **Choose the destination folder** where duplicates will be moved.
3. **Click to start** the duplicate detection process.
4. **Review and manage** the detected duplicates with ease.

## 🛠️ Technologies Used
- **.NET Core 7 (API)**
- **Angular 16 (Frontend)**
- **TypeScript, HTML, CSS**

## 📜 License
This project is licensed under the BSD 3-Clause License.


# 📦 E-Commerce Platform – Angular (Frontend)

## 📚 Table of Contents
- 📝 Project Overview  
- 🎯 Objectives  
- 🏗️ Tech Stack  
- 🚀 Setup Instructions  
- 🌐 Live Demo  
- 📡 API Integration  
- 🧭 Project Structure  
- 🌍 Localization Details  
- 🛠 Features Summary  
- 📌 Design Notes  
- 📤 Deployment Instructions  

---

## 📝 Project Overview

This project is a complete **Frontend E-Commerce Platform** built using Angular and connected to a live **Node.js backend API**. It includes essential e-commerce features such as product listing, cart management, authentication, order placement, and payment. The UI supports full localization in English and Arabic with RTL support.

---

## 🎯 Objectives

### 🔐 User Authentication  
- Login and registration using backend API  
- Token-based session management  
- Form validation

### 🛒 Product and Cart Management  
- Real-time data fetched from REST API  
- Add/remove items in cart  
- Order placement and payment simulation  
- View order history

### 🌍 Multilingual Support  
- English and Arabic  
- RTL layout for Arabic  
- Language switcher

---

## 🏗️ Tech Stack

- **Angular 17+**
- **Angular Signals + @if / @for** syntax  
- **Angular Router**  
- **ngx-toastr** (for notifications)  
- **Bootstrap 5**  
- **i18n JSON**  
- **HTTP Interceptors** (auth token, loading, errors)

---

## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-angular.git
   cd ecommerce-angular
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Update Environment Variables**  
   In `src/app/core/env/env.ts`, set the `API_URL`:
   ```ts
   export const environment = {
     production: false,
     API_URL: 'https://your-backend-domain.com/api/v1'
   };
   ```

4. **Run the App**
   ```bash
   ng serve
   ```

5. Open [http://localhost:4200](http://localhost:4200)

---

## 🌐 Live Demo

🔗 Live: [https://ahmed-shaltout-ecommerce.netlify.app/home](https://ahmed-shaltout-ecommerce.netlify.app/home)


## 📡 API Integration

The frontend communicates with a REST API built using **Node.js + Express**:

| Endpoint              | Description               |
|----------------------|---------------------------|
| `POST /auth/login`   | User login                |
| `POST /auth/register`| User registration         |
| `GET /products`      | Fetch all products        |
| `GET /categories`    | Fetch product categories  |
| `GET /brands`        | Fetch all brands          |
| `POST /cart`         | Add to cart               |
| `GET /cart`          | View user cart            |
| `POST /orders`       | Place order               |
| `GET /orders`        | Get all user orders       |

Interceptors are used to automatically attach tokens and handle errors globally.

---

## 🧭 Project Structure

```
src/
├── app/
│   ├── components/         # Reusable components (cart, login, register, etc.)
│   ├── core/
│   │   ├── services/       # API logic for auth, products, cart, orders
│   │   ├── interceptors/   # Token, error, and loading interceptors
│   │   ├── interfaces/     # Shared TypeScript interfaces
│   │   ├── pipes/          # Custom search and term filter pipes
│   ├── layouts/            # AuthLayout, BlankLayout components
│   ├── app.routes.ts       # Main routing file
│   ├── app.component.ts    # Root component
│   └── app.config.ts       # Configuration logic
├── styles.scss             # Global styles
├── main.ts                 # Entry point
```

---

## 🌍 Localization Details

- Language switcher in navbar (EN 🇺🇸 / AR 🇸🇦)  
- Uses `i18n` service with language JSON files  
- RTL layout applied using `[dir]` and conditional classes  
- All content dynamically translated

---

## 🛠 Features Summary

| Feature               | Status |
|----------------------|-------- |
| Register/Login       | ✅     |
| Authenticated Routes | ✅     |
| Products/Details     | ✅     |
| Cart Functionality   | ✅     |
| Checkout             | ✅     |
| Order History        | ✅     |
| Multilingual (EN/AR) | ✅     |
| RTL Layout           | ✅     |

---

## 📌 Design Notes

- Responsive UI using Bootstrap Grid  
- Admin and user layouts separated  
- Services follow Angular best practices  
- Signals used in cart for reactive state updates  
- Error handling via `ngx-toastr` + interceptors

---

## 📤 Deployment Instructions

1. **Build the App**
   ```bash
   ng build --configuration production
   ```

2. **Deploy via Netlify/Vercel/GitHub Pages**

   Example (GitHub Pages):
   ```bash
   npm install angular-cli-ghpages --save-dev
   ng deploy --base-href=/your-repo-name/
   ```

---

## 💡 Credits
- Ahmed shaltout

- Email: shaltouta477@gmail.com

- LinkedIn: www.linkedin.com/in/ahmed-shaltout-015b85252

- WhatsApp: +201208073209

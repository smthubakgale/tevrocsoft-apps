# 🚀 React Starter Project

This project demonstrates a simple React setup using:

- 🧭 React Router (navigation between pages)
- 🗂 Zustand (global state management)
- 🎨 Lucide React (icons)
- 🎨 Tailwind CSS (utility-first styling)

It is designed as a clean starter structure for building scalable React applications.

---

# 📁 Project Structure

├── src/ 
| ├── App.jsx
| ├── components/
| │ └── Navbar.jsx
| ├── pages/
| │ ├── Home.jsx
| │ └── User.jsx
| | └── TailwindTest.jsx 
| ├── store/
| │ └── useCounter.js
| └── App.jsx
| └── index.css
| └── main.jsx
├── index.html
├── package.json
├── postcss.config
├── READMe.md
├── tailwing.config.js
└── vite.config.js

---

# 🧭 React Router

React Router allows navigation between pages without refreshing the browser (Single Page Application behavior).

### Key Concepts

- `BrowserRouter` → enables routing in the app
- `Routes` → wraps all route definitions
- `Route` → maps a URL to a component
- `Link` → navigation without page reload

### Example

```jsx
<Route path="/" element={<Home />} />
<Route path="/user" element={<UserPage />} />
```

``` html
<Link to="/">Home</Link>
<Link to="/user">User</Link>
```

🗂 Zustand (Global State Management)

Zustand is a lightweight state management library used to share state across components without prop drilling.

Why Zustand?
- Minimal boilerplate
- Easy to use
- Fast and scalable
- Works outside component tree

Example Store
``` jsx
import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,

  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

Usage in Components
``` jsx
const { count, inc, dec, reset } = useCounter();
```

🎨 Lucide React (Icons)

Lucide React is a modern icon library for React applications.

Install
```
npm install lucide-react
```

Usage

``` jsx
import { User } from "lucide-react";

<User size={28} color="blue" />
```

Benefits
- Lightweight SVG icons
- Customizable size and color
- Clean modern design
- Tree-shakable (only loads used icons)


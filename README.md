# 🔢 Number Parity Checker

A real-time Even/Odd number checker built using **both Vue 3 and React**. 

I implemented this exact same UI and validation logic in two different ecosystems to deeply understand how each framework handles reactivity, event handling, and JavaScript's tricky edge cases.

---

### ✨ Features

- **Real-Time Validation:** Instantly evaluates if the input is Even or Odd as the user types.
- **Zero Edge-Case Handling:** Correctly identifies `0` as an Even number in both frameworks.
- **Framework-Specific Rendering:** Utilizes Vue's `v-if` and React's `&&` operator for conditional UI.
- **Consistent UI:** Both versions share the exact same Tailwind CSS design language.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API)
- **Key Concept:** Uses the `watch` API to observe input changes and explicit null/empty string checks to handle the `0` edge case.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concept:** Uses direct `onChange` event handlers, extracting `e.target.value` to avoid stale state, and the `&&` operator for conditional rendering.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first styling)

---

###  Live Demos & Source

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
| ⚡ **Vue 3** | [🔗 View Vue Live Demo](https://number-parity-checker-vue-fth.vercel.app) | [`/vue`](#) |
| ⚛️ **React** | [🔗 View React Live Demo](https://number-parity-checker-react-fth.vercel.app) | [`/react`](#) |

---
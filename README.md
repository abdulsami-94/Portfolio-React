# � Portfolio Project: Learning Log & Dev Diary

This document serves as a master log of everything learned, built, and debugged during the creation of this Portfolio project. It is designed to be a reference for future projects.

---

## 🏗️ Phase 1: Core React & Routing
**Goal:** Create a multi-page website using `react-router-dom`.

### 🔑 Key Concepts
*   **React Router**: The library that enables navigation without page reloads.
    *   `<BrowserRouter>`: Wraps the entire app to enable routing.
    *   `<Routes>` & `<Route>`: Maps URL paths (e.g., `/projects`) to Components.
    *   `<Link>`: Used instead of `<a>` tags. `<a>` reloads the page (bad for React state), `<Link>` just swaps the component (fast).
*   **Component Structure**: keeping pages (`Home`, `Projects`) separate from components (`Navbar`).

### 🐛 Bugs & Fixes
| Issue | Cause | Fix |
| :--- | :--- | :--- |
| **404 on Refresh** | Browser looks for a real file instead of a React route. | (Solved by Vite dev server, but good to know for deployment). |
| **Links not working** | Using `href` instead of `to`. | Changed `<a href="...">` to `<Link to="...">`. |

---

## 🗂️ Phase 2: Dynamic Data & Parameters
**Goal:** Create a single "Details" page that can show data for *any* project using its ID.

### 🔑 Key Concepts
*   **Dynamic Routing**: Using the colon syntax `path="/projects/:id"`. This tells React that `:id` is a variable, not a literal text.
*   **`useParams` Hook**: How we grab that ID from the URL.
    *   URL: `/projects/1` -> `const { id } = useParams()` -> `id` is "1".
*   **Data Finding**: Using `Array.prototype.find()` to locate the specific project object from our data file.
    *   *Gotcha*: IDs from URLs are always **strings**. IDs in data are **numbers**.
    *   *Fix*: `Number(id)` must be used for comparison.

### 🐛 Bugs & Fixes
| Issue | Cause | Fix |
| :--- | :--- | :--- |
| **Project Not Found** | ID mismatch types. | Used `Number(id)` to convert string "1" to number 1. |
| **Crash on invalid ID** | User enters ID 999 which doesn't exist. | Added `if (!project) return ...` check to handle missing data gracefully. |

---

## 📝 Phase 3: Forms & State Management
**Goal:** Create a "Contact Me" page where users can input data.

### 🔑 Key Concepts
*   **Controlled Components**: The "React Standard" for inputs.
    *   We don't let the HTML DOM remember the text.
    *   We force the input to display *our* state: `value={name}`.
    *   We update our state on every keystroke: `onChange={e => setName(e.target.value)}`.
*   **Event Handling**:
    *   `e.preventDefault()`: **CRITICAL**. Stops the form from refreshing the page on submit.

### 🐛 Bugs & Fixes
| Issue | Cause | Fix |
| :--- | :--- | :--- |
| **Route Error** | Typed path as `./contact`. | Routes must be absolute: `/contact`. |
| **Console Empty** | Browser Console filters were on "Warnings only". | Reset filters to show "Info" logs. |
| **Crash: `usestate`** | Typo in import. | Hooks are case-sensitive: `useState`. |
| **Variable Mismatch** | `[project, setProjects]` | Renamed setter to `setProject` to match the variable. |

---

## � Phase 4: Async Data (Attempted)
**Goal:** Simulate a real server API call.
*   *Status*: **Reverted** to focus on fundamentals.
*   **Lesson**: `useEffect` is used to synchronize with external systems (like servers). Because fetching is *slow* (asynchronous), we need a "Loading" state or `null` state while we wait.

---

## ✅ Best Practices Checklist
- [ ] Always import hooks like `useState`, `useEffect` at the top level.
- [ ] Use `const` for components and functions.
- [ ] Always cleanup logs (`console.log`) before deployment.
- [ ] Verify imports: Are they named exports `{ }` or default exports?

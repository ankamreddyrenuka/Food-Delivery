# Food-Delivery

## Setup and Run

1. Open the project root folder `Food-Delivery/food -del`.
2. Install dependencies:
   - `npm install`
3. Fix any backend model syntax errors if they exist (for example, remove stray text from `backend/models/foodModel.js`).
4. Start both frontend and backend together:
   - `npm run dev`
5. Open the running apps in your browser:
   - Frontend: `http://localhost:5174/`
   - Backend: `http://localhost:4000/`

## Notes

- The frontend uses Vite.
- The backend uses Express and Nodemon.
- If port `5173` is already in use, Vite will try another port automatically.

## Deployment

### Frontend

1. Build the React app:
   - `npm --prefix frontend run build`
2. Deploy the static `frontend/dist` folder to any static hosting provider such as Netlify, Vercel, GitHub Pages, or Firebase Hosting.
3. If you want to serve the frontend from the backend, copy `frontend/dist` into the backend public folder and configure Express to serve static files.

### Backend

1. Install dependencies in the backend folder:
   - `npm --prefix backend install`
2. Ensure environment variables are set for MongoDB and any secrets used by the server.
3. Deploy the backend to a Node.js host such as Heroku, Render, Railway, Azure App Service, or any VPS.
4. Start the app with:
   - `node server.js`
   - or `npm --prefix backend run server`

### Full-stack deployment options

- Deploy the backend as a Node.js API and the frontend as a separate static app.
- Or deploy both together by serving the built frontend files from the backend Express server.

## Project Structure

```text
Food-Delivery/
├── README.md
└── food -del/
    ├── package.json
    ├── backend/
    │   ├── package.json
    │   ├── server.js
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   │   └── foodController.js
    │   ├── middleware/
    │   ├── models/
    │   │   └── foodModel.js
    │   ├── routes/
    │   │   └── foodRoute.js
    │   └── uploads/
    └── frontend/
        ├── package.json
        ├── eslint.config.js
        ├── index.html
        ├── README.md
        ├── vite.config.js
        ├── public/
        └── src/
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── assets/
            │   └── assets.js
            ├── components/
            │   ├── AppDownload/
            │   │   ├── AppDownload.css
            │   │   └── Appdownload.jsx
            │   ├── context/
            │   │   └── StoreContext.jsx
            │   ├── ExploreMenu/
            │   │   ├── ExploreMenu.css
            │   │   └── ExploreMenu.jsx
            │   ├── FoodDisplay/
            │   │   ├── FoodDisplay.css
            │   │   └── FoodDisplay.jsx
            │   ├── FoodItem/
            │   │   ├── FoodItem.css
            │   │   └── FoodItem.jsx
            │   ├── Footer/
            │   │   ├── footer.css
            │   │   └── footer.jsx
            │   ├── LoginPopup/
            │   │   ├── loginPopup.css
            │   │   └── loginPopup.jsx
            │   ├── navbar/
            │   │   ├── navbar.css
            │   │   ├── navbar.jsx
            │   │   └── Header/
            │   │       ├── header.css
            │   │       └── header.jsx
            └── pages/
                ├── Auth/
                │   ├── Auth.css
                │   └── Auth.jsx
                ├── Cart/
                │   ├── Cart.css
                │   └── Cart.jsx
                ├── Home/
                │   ├── Home.css
                │   └── Home.jsx
                ├── Menu/
                │   ├── Menu.css
                │   └── Menu.jsx
                └── PlaceOrder/
                    ├── PlaceOrder.css
                    └── PlaceOrder.jsx
```

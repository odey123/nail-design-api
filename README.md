# 💅 Nail Design API

A simple Express.js + MongoDB backend for saving and retrieving custom nail designs. Built to showcase backend architecture and thinking — no frontend or auth included.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/odey123/nail-design-api.git
cd nail-design-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment**

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://Jude:tvSHhtao0PRs4N78@naildb.n3biajr.mongodb.net/?retryWrites=true&w=maj

4. **Run the server**

```bash
npm start
```

Server will start on `http://localhost:5000`.

---

## 📡 API Endpoints

### ➕ POST `/api/designs`

Save a new nail design.

**Request Body:**

```json
{
  "shape": "coffin",
  "color": "pastel pink",
  "length": "long",
  "user": "optional user info"
}
```

**Response:**

```json
{
  "_id": "id",
  "shape": "coffin",
  "color": "pastel pink",
  "length": "long",
  "user": "optional user info",
  "createdAt": "timestamp"
}
```

---

### 📥 GET `/api/designs`

Retrieve all saved nail designs.

**Response:**

```json
[
  {
    "_id": "id",
    "shape": "almond",
    "color": "nude",
    "length": "medium",
    "user": "Jane Doe",
    "createdAt": "timestamp"
  },
  ...
]
```


---

## 🌱 Improvements with More Time

If given more time, I would consider adding:

- ✅ Design update and delete endpoints
- ✅ Input validation with `Joi` or `express-validator`
- ✅ Pagination and search filters
- ✅ Image upload support via `multer` or Cloudinary
- ✅ Better error handling middleware
- ✅ Docker support for deployment
- ✅ Unit and integration tests using Jest
- ✅ Security best practices (CORS, Helmet, rate limiting)

---

## 📬 License

MIT — free to use and modify.

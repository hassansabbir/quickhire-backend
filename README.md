# QuickHire Backend

REST API backend for the QuickHire job portal, built with Express.js, MongoDB, and TypeScript.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 5
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Validation**: Zod
- **File Upload**: Multer + Cloudinary
- **Dev Server**: ts-node-dev

## Project Structure

```
src/
├── config/               # Environment & Cloudinary config
├── middlewares/           # Error handler, request validator
├── modules/
│   ├── jobs/             # CRUD for job postings
│   ├── applications/     # Job application submissions
│   └── upload/           # File upload via Cloudinary
├── routes/               # Central route aggregator
├── utils/                # catchAsync, sendResponse helpers
├── app.ts                # Express app setup (CORS, routes, 404)
└── server.ts             # Database connection & server bootstrap
```

## API Endpoints

### Jobs (`/api/jobs`)

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/`      | Get all jobs     |
| GET    | `/:id`   | Get job by ID    |
| POST   | `/`      | Create a new job |
| PUT    | `/:id`   | Update a job     |
| DELETE | `/:id`   | Delete a job     |

**Query Filters** (GET `/`): `?category=`, `?location=`, `?search=`

### Applications (`/api/applications`)

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ |
| GET    | `/`      | Get all applications     |
| POST   | `/`      | Submit a new application |

### Upload (`/api/upload`)

| Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| POST   | `/`      | Upload a file to Cloudinary |

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### Installation

```bash
# Clone and enter the directory
cd quickHire-backend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/quickHire
NODE_ENV=development

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running

```bash
# Development (auto-restart on changes)
npm run dev

# Production build
npm run build
npm start
```

The server starts at `http://localhost:5000` by default.

## Response Format

All endpoints return a consistent JSON format:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": []
}
```

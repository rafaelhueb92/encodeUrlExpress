# Encode Url Express

A simple, secure, and extensible URL shortener service built with Node.js, Express, and Helmet.

## Features

- **Shorten URLs:** Encode any URL into a short, unique alphanumeric string.
- **Retrieve Original URLs:** Decode a short string back to the original URL.
- **In-memory Storage:** All mappings are stored in memory for demonstration and development purposes.
- **Security:** Uses [Helmet](https://helmetjs.github.io/) to set secure HTTP headers.

## Endpoints

### `GET /encode/:url`

Encodes the provided URL into a short string.

**Request:**

```
GET /encode/https://example.com
```

**Response:**

```json
{
  "encoded": "a1B2c3"
}
```

### `GET /decode/:encodedUrl`

Decodes the provided short string back to the original URL.

**Request:**

```
GET /decode/a1B2c3
```

**Response:**

```json
{
  "decodedUrl": "https://example.com"
}
```

### `GET /`

Returns all current URL mappings (for debugging/demo purposes).

**Request:**

```
GET /
```

**Response:**

```json
{
  "a1B2c3": "https://example.com",
  "d4E5f6": "https://another.com"
}
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:9000` by default.

## Configuration

- The server port can be set via the `PORT` environment variable.

## Notes

- **Persistence:** This service uses in-memory storage. All data will be lost when the server restarts. For production, integrate with a persistent database.
- **Security:** Helmet is used for basic HTTP header security. For production, consider additional security measures.
- **URL Validation:** Ensure your `service.js` includes proper URL validation and error handling.

## Example Usage

Shorten a URL:

```bash
curl http://localhost:9000/encode/https://openai.com
```

Retrieve the original URL:

```bash
curl http://localhost:9000/decode/a1B2c3
```

## License

MIT

---

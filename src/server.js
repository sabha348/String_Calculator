import express from 'express';
import { add } from './calculator.js';

const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
  try {
    const { numbers } = req.body;
    const result = add(numbers);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
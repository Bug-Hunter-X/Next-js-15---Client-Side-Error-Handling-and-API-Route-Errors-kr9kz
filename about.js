```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  // Simulate a fetch that might throw an error
  const data = fetch('/api/data').then(res => res.json()).catch(error => {
    console.error('Error fetching data:', error);
    return { error: 'Failed to fetch data' };
  });
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  );
}
```
```javascript
//pages/api/data.js

export default function handler(req, res) {
  // Simulate a random error
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```
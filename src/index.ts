import app from '@/app';

app.listen(3000, () => {
  console.warn('Server is running on port 3000');
});

export const viteNodeApp = app;

import { Suspense } from 'react';
import Button from 'remote/Button';

export const App = () => (
  <div className="flex gap-x-8 min-h-screen text-zinc-200 bg-base-100 p-6">
    <Suspense fallback={<div>loading...</div>}>
      <Button />
    </Suspense>
  </div>
);

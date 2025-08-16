import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Bean POS" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


const HomePage = () => {
  return (
    <div>
        <Button>Click here!</Button>
    </div>
  )
}

export default HomePage
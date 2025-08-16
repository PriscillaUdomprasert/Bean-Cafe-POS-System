import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Bean POS" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


const HomePage = () => {
  return (
    <body>
        <div className="w-full h-screen flex items-center justify-center">
            <Link to="/login" >
                <Button className="bg-stone-600 text-white">Login</Button>
            </Link>
        </div>    
    </body>
    
        
    
  )
}

export default HomePage
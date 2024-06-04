import React from 'react';
import '~/tailwind.css';
import { Form } from "@remix-run/react";

export type TaskType = {
    title: string;
    description: string;
    state: boolean;
}

interface TaskProps {
    task: TaskType
};

export default function Task({ task: { title, description, state} }: TaskProps) {
    return ( 
        <div className='list-item'>
            <input type="text" value={title} name="title" />
            <input type="text" value={description} name="description" />
        </div>
    )
}
   
  
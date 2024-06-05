import React from 'react';
import { useState } from 'react';
import '~/tailwind.css';
import { Form } from "@remix-run/react";

export type TaskType = {
    title: string;
    description: string;
    completed: boolean

}

interface TaskProps {
    task: TaskType
};

const title = "title"
const description = "description"

export default function Task({ task: { title, description, completed } }: TaskProps) {
    const [isChecked, setIsChecked] = useState(undefined)

    const Checkbox = () => {
        return (
            <input className='bg' type="checkbox" checked={setIsChecked} ></input>
        )
    };

    // const Display = ischecked => {
    //     return (
    //         <div> </div>
    //     )
    // }

    return (
            <div className='row'  style={{
                backgroundColor: isChecked ? '#E2FFE5' : '#FFFFFF',
            }}>
                <Checkbox />
                <div defaultValue={title} />
                <div defaultValue={description} />
            </div>
    )
};


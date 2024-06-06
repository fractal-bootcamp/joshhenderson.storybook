import React from 'react';
import { useState } from 'react';
import '~/tailwind.css';
import { Form } from "@remix-run/react";

type Task = {
    title: string,
    description: string,
    complete: boolean
};

const initialTasks = [
    {
        title: "Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
        complete: true
    },
    {
        title: "Mop the floor",
        description: "Use Soap",
        complete: true
    },
    {
        title: "Do Laundry",
        description: "Use Detergent",
        complete: false
    },
    {
        title: "Buy groceries",
        description: "Don't forget lettuce",
        complete: false
    },

];



// const Component = (props: PropTypes) => {
//      useHook()

//      return <JSX></JSX>
// }

// return <Component />



const MapTaskToTaskComponent = (task: Task) => {
    const [clicked, setClicked] = useState(false)


    function handleClick() {
        setClicked(!clicked)
    }


    return <div>

        <div onClick={handleClick} className={`${clicked ? 'bg-green-300' : "bg-white"} flex flex-row justify-start align-middle`}>
            <button className='flex flex-col align order-1 border rounded-sm border-black m-2 w-4 h-4'></button>
            <div className='flex flex-col order-2'>
                <p>{task.title}</p>
                <p>{task.description}</p>
            </div>
        </div>
    </div>


};

function TaskList() {
    return (
        <div>
            {initialTasks.map(MapTaskToTaskComponent)}
        </div>
    )
};

export default TaskList






import { useState, useEffect } from 'react'
import PrioritySelector from '../components/Priority';
import Greeting from '../components/Greeting';

const Tasks = () => {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!title.trim() && !content.trim()) return;

        const newTask = {
            title: title.trim(),
            content: content.trim(),
            priority: "Select Priority"
        }

        setTasks((currentTasks) => [...currentTasks, newTask]);

        setTitle("");
        setContent("");

    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];

        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const updateTaskPriority = (index, priority) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];

            updatedTasks[index] = {
                ...updatedTasks[index],
                priority: priority
            };

            return updatedTasks;
        });
    };

    return (
        <main className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            <section className="w-full border border-zinc-600 rounded-md bg-linear-180 from-zinc-700 to-zinc-800 p-5 sm:p-6" aria-labelledby="tasks-heading">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-zinc-500 pb-4">
                    <div>
                        <h2 id="tasks-heading" className="text-xl leading-tight sm:text-2xl">Tasks</h2>
                    </div>
                    <div className="flex items-center">
                        <Greeting />

                        <span className="shrink-0 text-sm text-white py-1 px-2 rounded-full bg-[linear-gradient(90deg,#FEA7FF,#353535,#FEA7FF)] cursor-default bg-[length:200%_100%] animate-[gradient_4s_linear_infinite] border border-[#535353]">
                            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                    <label className="grid min-w-0 gap-2 text-sm text-zinc-300">
                        <span>Task title</span>
                        <input className="min-h-11 w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-2.5 text-white outline-none placeholder:text-zinc-500 focus:border-purple-400" type="text" value={title} placeholder="e.g. Review project notes" onChange={(event) => setTitle(event.target.value)} />
                    </label>
                    <label className="grid min-w-0 gap-2 text-sm text-zinc-300">
                        <span>Details</span>
                        <input className="min-h-11 w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-2.5 text-white outline-none placeholder:text-zinc-500 focus:border-purple-400" type="text" value={content} placeholder="Add a short description" onChange={(event) => setContent(event.target.value)} />
                    </label>
                    <button className="rounded-full min-h-11 w-full bg-purple-500 px-5 py-2.5 cursor-pointer transition duration-100 hover:bg-purple-400 active:bg-purple-600 md:w-auto" type="button" onClick={addTask}>Add task</button>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]" aria-live="polite">
                    {tasks.length === 0 ? (
                        <p className="rounded-md border border-dashed border-zinc-700 bg-zinc-900 p-5 text-center text-zinc-400 md:col-span-2">Your tasks will appear here.</p>
                    ) : tasks.map((item, index) => (
                        <article className="relative w-full rounded-md border border-zinc-700 bg-zinc-900/50 p-4 md:col-span-2" key={`${item.title}-${index}`}>

                            <button onClick={() => {
                                deleteTask(index)
                            }} className='absolute top-4 right-4 p-1 rounded-full hover:bg-red-400 active:bg-red-600 text-white cursor-pointer transition duration-100 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h3 className="break-words text-xl">{item.title || 'Untitled task'}</h3>
                            {item.content && <p className="mt-2 break-words leading-6 text-zinc-400">{item.content}</p>}
                            <div className="mt-4">
                                <PrioritySelector
                                    selected={item.priority}
                                    setSelected={(priority) => updateTaskPriority(index, priority)}
                                />
                            </div>
                        </article>

                    ))}
                </div>
            </section>
        </main>
    );
};

export default Tasks

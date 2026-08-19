const Greeting = () => {

    const hour = new Date().getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Afternoon";
    } else if (hour >= 17 && hour < 20) {
        greeting = "Evening";
    } else {
        greeting = "Night";
    }

    return (
        <div className='px-4 flex justify-center'>
            <h1 className='border border-zinc-500 rounded-full px-2 py-1'>{`${greeting}`}</h1>
        </div>
    )
}

export default Greeting;
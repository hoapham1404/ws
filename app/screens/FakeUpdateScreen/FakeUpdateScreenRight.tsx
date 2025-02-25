    'use client'

    export const FakeUpdateScreenRight = () => {
        return (
            <div className="w-[300px] h-full bg-white flex flex-col gap-1 items-center">
                <p className="text-xl">Update time</p>
                <div className="flex gap-2 my-2 justify-center items-center">
                    <input 
                        type="number" 
                        min="1" 
                        max="100"
                        className="w-28 h-10 text-sm border-b border-black px-1"
                    />
                    <p>minutes</p>
                </div>

                <p className="text-xl">Start time</p>
                <div className="flex gap-2 my-2 justify-center items-center">
                    <input 
                        type="number" 
                        min="1" 
                        max="100"
                        className="w-28 h-10 text-sm border-b border-black px-1"
                    />
                    <p>%</p>
                </div>

                <button className="mt-8 bg-white text-black border border-black rounded py-2 px-4 textxl hover:bg-gray-100 transition-colors">
                    Restart
                </button>
            </div>
        );
    };

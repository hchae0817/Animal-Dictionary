import "../index.css"
import AdbIcon from '@mui/icons-material/Adb';

function Home(): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <div className="bg-modle_s"></div> */}
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">

                <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
                    Welcome to the
                </h2>
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
                    Animal Adventure
                </h1>
                <div className="text-lg md:text-1xl lg:text-2xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
                    Let's start
                </div>
            </main>


            <main className="container min-w-full h-24 p-20 flex-1 h-14 bg-gradient-to-r from-sky-500 to-indigo-500 bg-opacity-10">
                <h2 className="text-1xl md:text-2xl lg:text-3xl font-black">
                    Animal
                </h2>
                <h3 className="text-1xl md:text-2xl lg:text-3xl">
                    /ˈanɪm(ə)l/ (noun)
                </h3>
                <br />
                <h2 className="text-1xl md:text-1xl lg:text-2xl">
                    A living organism that feeds on organic matter,
                    typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.
                </h2>
            </main>

            <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
                <p>Built with ❤️ by Hana Chae</p>
                <div className="flex -mx-6">
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                </div>
            </footer>
        </div>
    )
}

export default Home
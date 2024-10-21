import Header  from "../../components/header/header";

export default function HomePage(){
    return(
        <>
        <Header/>
          <div className="w-full h-screen bg-blue-900 flex flex-col items-center">
            <h1 className="text-white text-[50px]">Welcome to the Leonine Villa</h1>
          </div>
        </>
    )
  }


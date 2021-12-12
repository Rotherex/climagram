import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
    const { data: session } = useSession()

    console.log(session)

    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                className="w-16 h-16 rounded-full border p-[2px]"
                src={session?.user?.image} 
                alt=""
            />

            <div>
                <h2>{session?.user?.username}</h2>
                <h3>welcome to climagram</h3>
            </div>

            <button onClick={signOut} className="text-blue-400">Sign Out</button>
        </div>
    )
}

export default MiniProfile

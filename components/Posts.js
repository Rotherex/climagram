import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Snapshot } from "recoil"
import { db } from "../firebase"
import Post from "./Post"
const posts = [
    {
        id: '123',
        username: 'climaisagod',
        userImg: "https://avatars.githubusercontent.com/u/32068559?v=4",
        img: "https://avatars.githubusercontent.com/u/32068559?v=4",
        caption: "clima is a god imo"
    },
    {
        id: '123',
        username: 'climaisagod',
        userImg: "https://avatars.githubusercontent.com/u/32068559?v=4",
        img: "https://avatars.githubusercontent.com/u/32068559?v=4",
        caption: "clima is a god imo"
    },
]

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })
    }, [db])

    return (
        <div>
           {posts.map(post => (
               <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
           ))}
        </div>
    )
}

export default Posts

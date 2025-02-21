import { useEffect, useState } from "react";
import { obtenerPosts } from "../api/blog.api";
import { PostCard } from "./PostCard";


export function PostlList(){
    const [post, setPosts] = useState([]);

    useEffect (() => {
        async function cargarPost(){
            const res = await obtenerPosts();
            setPosts(res.data);
            }
            cargarPost();
            }, []);

        return (
            <div className="mt-36 mb-96  grid grid-cols-1 gap-2 place-items-center ">
                {post.map((post)=>(
                     <PostCard key={post.id} post={post} />
                     
                ))}


            </div>
        )
    }

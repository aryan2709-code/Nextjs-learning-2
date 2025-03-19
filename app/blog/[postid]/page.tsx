// This is a dynamic route
import axios from "axios";
export default async function BlogPage({params} : any) {
    //params is  a promise 
const postId = (await params).postid; // Whatever is the name of the route group , mention it. params.(route group)
const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const data = response.data;

    return <div>
        Blog Page {postId}

        <br />
        title - {data.title}
        body - {data.body}

    </div>
}


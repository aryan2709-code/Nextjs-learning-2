// Learning Catch all segments
export default async function BlogPage({params} : any) {
    //params is  a promise 
const postId = (await params).postid; // Whatever is the name of the route group , mention it. params.(route group)
// postId is an array containing all the subroutes
return <div>
    Blog Page {JSON.stringify(postId)}
</div>
}


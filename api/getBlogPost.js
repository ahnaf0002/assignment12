export default async function getBlogPost(id){

    const res = await fetch ( `https://jsonplaceholder.typicode.com/posts/${id}` );

    if (!res.ok) {
        throw new Error("Error Generated from Get B Posts"); 
    }

    return res.json();

}
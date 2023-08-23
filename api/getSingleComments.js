 

export default async function getSingleComments(id){
  

    const res = await fetch ( `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    
    {
        next:{
            revalidate:3600,
        }
    } );

    if (!res.ok) {
        throw new Error("Error Generated from Get Comments"); 
    }

    return res.json();

}
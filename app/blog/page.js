import React from 'react';
import Menu from '../component/Menu';
import Link from 'next/link';
import getAllPosts from '@/api/getAllPosts';
const page = async () => {

    const posts = await getAllPosts();
    console.log(posts);

    return (
        <div className='container mx-auto'>
            <Menu/>
            <h1 className="flex mt-20 font-bold  pb-10">Blog Post</h1>

            {
               posts.map(post=>{
                return (
                    
                  <p className="pb-5" key={post.id}><Link href={`/blog/${post.id}`}> 
                  {post.id} - {post.title}</Link>
                  </p>
                )
            }) 
                
                }


        </div>
    );
};

export default page;
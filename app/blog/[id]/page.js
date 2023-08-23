import React from 'react';
import Menu from '../../component/Menu'
import Comments from '../../component/Comments'
import getBlogPost from '@/api/getBlogPost';
import getSingleComments from '@/api/getSingleComments';
import {Suspense} from 'react';
const page = async ({params}) => {
    const id = params.id;
    const postPromise  =  getBlogPost(id);
    const commentsPromise =  getSingleComments(id);
    const post = await postPromise;
 
   

 


    return (
        <div className='container mx-auto'>
        <Menu/>
        <h1 className="flex mt-20 font-bold ">{post.title}</h1>
        <p className="flex mt-10 ">{post.body}</p><br/>

    
    <section>
        
        <Suspense fallback={<h3>Loading comments...</h3>}>
            <Comments commentsPromise = {commentsPromise}/>
        </Suspense>
    </section>
        

        


    </div>
    );
};

export default page;
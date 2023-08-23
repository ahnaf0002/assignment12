import React from "react";

const Comments = async ({commentsPromise}) => {

    const comments = await commentsPromise;
    return (
        <div>
            {
            comments.map(comments=>{
        return(
            <p key={comments.id}>{comments.name} - {comments.body} - {comments.email}</p>
        )

    })
}

        </div>
    );
};

export default Comments;


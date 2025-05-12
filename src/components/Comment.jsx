import './Comment.css'

function Comment ({id, body, name, email}) {

    return(
        <div className="commentContainer">
            <b>comment number {id}</b>
            <p>{body}</p>

                  <div className="commentInfo">
                    <p>{email}</p>
                    <p>{name}</p>
                  </div>
        </div>
    )
}

export default Comment;
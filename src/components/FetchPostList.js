

const FetchPostList = props => {
    return (
        <div>
                <div>
                    <h4>{props.post.title}</h4>
                    <span>{props.post.body}</span>
                </div>
        </div>
    )
}

export default FetchPostList;
import AddPost from "./AddPost";
import PostList from "./PostList";
import DataList from './DataList';
import FetchPost from "./FetchedPost";

function Post() {
    return (
        <div>
            <AddPost />
            <PostList />
            <FetchPost />
            <div>
                <DataList />
            </div>
        </div>
    )
}

export default Post;
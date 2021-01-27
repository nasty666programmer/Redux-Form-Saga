import {useDispatch,useSelector} from 'react-redux';
import { fetchPost } from '../redux/reducers/action';
import FetchPostList from './FetchPostList';

function FetchPost() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.fetchPost)
    return (
        <div style={{marginLeft:'60%',position:'relative',zIndex:'2'}}>
            <button onClick={() => dispatch(fetchPost())}>Download fetch post</button>
            {posts.map(post => <FetchPostList post={post} />)}
        </div>
    )
}

export default FetchPost;
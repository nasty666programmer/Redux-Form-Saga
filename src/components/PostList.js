import {connect} from 'react-redux';

function PostList(props) {
    const {post} = props;
    return (
        <div style={{position:'relative',zIndex:'2'}}>
            {post.length != 0 ?
                post.map(el => <h2>{el.items}</h2>):<h3>not items</h3>}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        post: state.post.post
    }
}

export default connect(mapStateToProps,null)(PostList);
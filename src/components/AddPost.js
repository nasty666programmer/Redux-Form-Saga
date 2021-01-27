import {useState} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../redux/reducers/action'

function AddPost(props) {
    const [forms,setForms] = useState({items:''})

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(forms)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label>Add Item</label>
                <input type='text' name='postItem' onChange={e => setForms({...forms,items:e.target.value})}/>
                <button>Create Post</button>
            </form>
        </div>
    )
}

const mapToDispatchToProps = {
    createPost
}

export default connect(null,mapToDispatchToProps)(AddPost);
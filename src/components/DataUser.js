import {Field, reduxForm} from 'redux-form';

const  DataUser = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={'first name'} name={'first_name'} component={'input'}/>
                <br/>
                <Field placeholder={'last name'} name={'last_name'} component={'input'}/>
                <br/>
                <Field placeholder={'about u'} name={'about_user'} component={'input'}/>
                <br/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form:'users',
    onSubmit: data => {
        console.log(data)
    }
})(DataUser);
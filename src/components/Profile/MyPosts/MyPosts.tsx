import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {useFormik} from "formik";
import {PostType} from "../../../Types/types";


export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = (text:any) => {
        props.addPost(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <AddPost onAddPost={onAddPost}/>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

type onAddPost = {
    onAddPost:({})=>void
}

const AddPost: React.FC<onAddPost> = (props) => {

    const initialValues = {
        textarea: ''
    }

    const onSubmit = (values:any) => {
        props.onAddPost(formik.values.textarea)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })



    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input value={formik.values.textarea} onChange={formik.handleChange} type = 'textarea' name='textarea' placeholder='textarea'/>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    </div>
}




export default MyPosts;
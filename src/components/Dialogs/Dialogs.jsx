import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";



const Dialogs= ({dialogsPage,sendMessage}) => {

    let state = dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );


    let onSendMessageClick = (values) => {
        sendMessage(values);
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <AddMesege onSendMessageClick={onSendMessageClick}/>
                </div>
            </div>
        </div>
    )
}



const AddMesege = ({onSendMessageClick}) => {

    const initialValues = {
        textarea: ''
    }

    const onSubmit = (values) => {
        onSendMessageClick(formik.values.textarea)
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

export default Dialogs;


























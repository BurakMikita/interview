import React from "react";
import {useFormik} from "formik";
import s from './ProfileDataForm.module.css'
import * as Yup from 'yup';
import {stopSubmit} from "../../../redux/profile-reducer";



const ProfileDataForm =(props)=>{
    const initialValues = {
        FullName: props.profile.fullName,
        lookingForAJob: false,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        aboutMe: props.profile.aboutMe,
        facebook: props.profile.contacts.facebook,
        website: props.profile.contacts.website,
        vk: props.profile.contacts.vk,
        twitter: props.profile.contacts.twitter,
        instagram: props.profile.contacts.instagram,
        youtube: props.profile.contacts.youtube,
        github: props.profile.contacts.github,
        mainLink:props.profile.contacts.mainLink
    }
debugger



    const onSubmit = values => {
        props.onSubt ({FullName:formik.values.FullName ,lookingForAJob:formik.values.lookingForAJob ,lookingForAJobDescription:formik.values.lookingForAJobDescription,aboutMe:formik.values.aboutMe,
            contacts:{facebook:formik.values.facebook,website:formik.values.website,vk:formik.values.vk,twitter:formik.values.twitter,
                instagram:formik.values.instagram,youtube:formik.values.youtube,github:formik.values.github,mainLink:formik.values.mainLink}})
            props.goToEditMode()
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            FullName: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
        })

    })
    return  <form onSubmit={formik.handleSubmit}>
         <div><button  type='submit' >save</button></div>
        <div>
            <b>{props.Stop_form}</b>
            <b>Full name</b>:
            <td><input value={formik.values.FullName}  onChange={formik.handleChange} type = 'text' name='FullName' /></td>
            {formik.errors.FullName && formik.touched.FullName && (
                <p>{formik.errors.FullName}</p> )}
        </div>
        <div>
            <b>Lookin for a job</b>:
            <td> <input value={formik.values.lookingForAJob} onChange={formik.handleChange} type = 'checkbox' name='lookingForAJob' /></td>
        </div>
        <div>
            <b>My professional skills</b>:
          <td><textarea  value={formik.values.lookingForAJobDescription} onChange={formik.handleChange} type='textarea' name='lookingForAJobDescription' /></td>
        </div>
        <div>
            <b>About me</b>:
            <td><textarea className={s.textarea} value={formik.values.aboutMe} onChange={formik.handleChange} type='textarea' name='aboutMe' /></td>
        </div>
         <div>
            <b>Contacts</b>:
            {Object.keys(props.profile.contacts).map(key=>{
                return <div>
                    <b>{key}:</b> <td><input onChange={formik.handleChange} value={formik.values.key} type='text' name={key}/></td>
                </div>
        })  }
        </div>
    </form>
}

export default ProfileDataForm
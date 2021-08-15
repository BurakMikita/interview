import {Field, Form, Formik} from "formik";
import React from "react";
import s from './ProfileDataForm.module.css'







const ProfileDataForm = ({profile,onSubmit,goToEditMode}) => (



    <div>

        <Formik
            initialValues={{
                FullName: profile.fullName,
                lookingForAJob: false,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
                contacts:{
                    facebook: profile.contacts.facebook,
                    website: profile.contacts.website,
                    vk: profile.contacts.vk,
                    twitter: profile.contacts.twitter,
                    instagram: profile.contacts.instagram,
                    youtube: profile.contacts.youtube,
                    github: profile.contacts.github,
                    mainLink:profile.contacts.mainLink
                }

            }}
            onSubmit={(values, ) => {
                onSubmit(values)
            }}
        >
            {(props) => (
                <Form><div className={s.Field} >
                       <div className={s.flex1}>
                      <p>FullName</p>  <Field name="FullName" placeholder="FullName"  />
                    <td/>
                    <b>lookingForAJob:</b><Field name="lookingForAJob" type="checkbox"  />

                    <p>lookingForAJobDescription</p>  <Field  className={s.textarea} name="lookingForAJobDescription"  placeholder="lookingForAJobDescription"  />

                    <td/>
                    <p>aboutMe</p><Field  className={s.textarea} name="aboutMe"  placeholder="aboutMe" />
                    <td/>
                       </div>
                    <div className={s.flex2}>
                    <p>facebook</p><Field name="contacts.facebook" />
                    <td/>
                    <p>website</p>
                    <Field name="contacts.website" />
                    <td/>
                    <p>vk</p>
                    <Field name="contacts.vk" />
                    <td/>
                    <p>twitter</p>
                    <Field name="contacts.twitter" />
                    <td/>
                    <p>instagram</p>
                    <Field name="contacts.instagram" />
                    <td/>
                    <p>github</p>
                    <Field name="contacts.github" />
                    <td/>
                    <p>mainLink</p>
                    <Field name="contacts.mainLink" />
                    </div>
                </div>
                    <button className={s.button} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);



export default ProfileDataForm
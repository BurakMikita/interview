import {PhotosType, PostType, ProfileType} from "../Types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";
import {profileAPI} from "../api/profile-api";




let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    isFetchingSave: false as boolean
};



const profileReducer = (state = initialState, action:ActionsTypes):initialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }

        case 'DELETE_POST':
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case "SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType }
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetchingSave: action.isFetching}
        default:
            return state;
    }
}

export  const  actions = {
     addPostActionCreator:(newPostText:string) => ({type: 'ADD-POST', newPostText})as const,
     setUserProfile: (profile:ProfileType) => ({type: 'SET_USER_PROFILE', profile})as const,
     setStatus :(status:string) => ({type: 'SET_STATUS', status})as const,
     deletePost: (postId:number) => ({type: 'DELETE_POST', postId})as const,
     savePhotoSuccess: (photos:PhotosType) => ({type: "SAVE_PHOTO_SUCCESS", photos})as const,
     isFetchingTogle: (isFetching:boolean) =>({type: "TOGGLE_IS_FETCHING" , isFetching }) as const,
}





export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId:number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file:File):ThunkType => async (dispatch)=>{
    dispatch(actions.isFetchingTogle(true))
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
    dispatch(actions.isFetchingTogle(false))
}

export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch,getState)=>{
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !=null){dispatch(getUserProfile(userId))}
        else {
            throw new Error("userId null")
        }

    }


}
export default profileReducer;

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof  actions>
type ThunkType = BaseThunkType<ActionsTypes>
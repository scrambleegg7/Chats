


export const joinroom = (credentials) => {

    const data = {
        name: credentials.name,
        room: credentials.room
    }
    //return (dispatch, getState) => {
    return (dispatch) => {

        dispatch({ type: "JOIN_SUCCESS", data: data   })
        //console.log(userinfo)
    }

}
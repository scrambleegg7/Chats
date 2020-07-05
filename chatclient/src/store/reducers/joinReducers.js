
const InitState = {
    data: null,
}

const joinReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'JOIN_SUCCESS':
            console.log("successfully join from joinreducer.", action.data)
            return {
                data: action.data
            }

        default: 
            return state;
        
        }

}

export default joinReducer;
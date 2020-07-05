import { connect } from 'react-redux';
import Chat from '../components/Chat';

import {joinroom} from '../store/actions/joinActions';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.join.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        joinroom: (credentials) => dispatch( joinroom(credentials) ),
        //signOut: () => dispatch( signOut() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

import { connect } from 'react-redux';
import Join from '../components/Join';

import {joinroom} from '../store/actions/joinActions';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        joinroom: (credentials) => dispatch( joinroom(credentials) ),
        //signOut: () => dispatch( signOut() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join);

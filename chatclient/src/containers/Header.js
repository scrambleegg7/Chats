import { connect } from 'react-redux';
import Header from '../components/Header';

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

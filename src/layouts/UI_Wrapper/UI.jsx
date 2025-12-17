import PropTypes from 'prop-types';

const Ui = ({children}) => {
    return <div id="wrapper">
        {children}
    </div>
}

Ui.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Ui;
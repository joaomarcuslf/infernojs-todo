import Inferno from 'inferno';
import { connect } from 'inferno-redux';

const App = ({}) => {
  return (
    <h1>
      Hello World
    </h1>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);

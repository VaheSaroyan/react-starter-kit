import {route, withParams} from 'utils/helper';

const webRoutes = [
  route('/', 'Home', {auth: true}),
  route('/welcome', 'Welcome', {auth: true}),
  route('/login', 'Login'),
];

export default withParams(webRoutes);

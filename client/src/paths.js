const Path  = {
    Index: '/',
    Home: '/home',
    Groups: '/groups',
    AddGroup: 'groups/add',
    EditGroup: 'groups/:groupId/edit',
    GroupDetails: '/groups/:groupId',
    MyGroups: 'groups/:userId',
    RegisterUser: '/users/register',
    EditUser: '/users/edit/:userId',
    Users: '/users',
    Login: '/users/login',
    Logout: '/logout',
    AddGuest: '/guests/add/:groupId',
    EditGuest: '/:groupId/:guestId/edit',
   
    NotFound: '*',

};

export default Path;
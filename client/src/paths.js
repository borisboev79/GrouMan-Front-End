const Path  = {
    Index: '/',
    Home: '/home',
    Groups: '/groups',
    AddGroup: 'groups/add',
    EditGroup: 'groups/:groupId/edit',
    GroupDetails: '/groups/:groupId',
    MyGroups: 'groups/:userId',
    RegisterUser: '/users/register',
    Users: '/users',
    Login: '/users/login',
    Logout: '/logout',
    AddGuest: '/guests/add/:groupId',
    EditGuest: '/:groupId/:guestId/edit',
    DeleteUser: '/users/delete/:userId',
    NotFound: '*',

};

export default Path;
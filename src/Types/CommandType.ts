export enum CommandType {
    Register = 'Register',
    Login = "Login",
    RegisterCallback = 'RegisterCallback',
    InvalidCommand = "InvalidCommand",
    UserListRequest = "UserListRequest",
    UserList = "UserList",
    CreateRoom = "CreateRoom",
    JoinRoom = "JoinRoom",
    FindRoom = "FindRoom",
    ParticipantsList = "ParticipantsList",
    Offer = "Offer",
    Candidate = "Candidate",
    Answer = "Answer",
    Hangup = "Hangup",
    Logout = "Logout",
    Sdp = "Sdp",
    ValidateSession = "ValidateSession",
    ToggleMute = "ToggleMute",
    GetProfileDetails = "GetProfileDetails",
    LeaveRoom = "LeaveRoom",
    CreatePeerConnectionServer = "CreatePeerConnectionServer",
    RoomList = "RoomList",
    ExitRoom = "ExitRoom",
    AnonymousLogin = "AnonymousLogin",
    getRouterRtpCapabilities = "getRouterRtpCapabilities",
}
export enum EventTypes {
    RegistrationSuccess = 'RegistrationSuccess',
    RegistrationFailed = 'RegistrationFailed',
    InvalidCommand = "InvalidCommand",
    UserList = "UserList",
    UserAlredyExit = "UserAlredyExit",
    LoginSuccess = "LoginSuccess",
    LoginFailed = "LoginFailed",
    RoomCreated = "RoomCreated",
    RoomList = "RoomList",
    RoomCreationFailed = "RoomCreationFailed",
    RoomAlreadyExist = "RoomAlreadyExist",
    JoinedRoom = "JoinedRoom",
    JoinError = "JoinError",
    RoomExited = "RoomExited",
    RoomExitError = "RoomExitError",
    FindRoomSuccess = "FindRoomSuccess",
    FindRoomFailed = "FindRoomFailed",
    NewUserJoined = "NewUserJoined",
    ParticipantsList = "ParticipantsList",
    Offer = "Offerr",
    Answer = "Answer",
    Candidate = "Candidate",
    Hangup = "Hangup",
    Logout = "Logout",
    Sdp = "Sdp",
    InvalidSession = "InvalidSession",
    ValidSession = "ValidSession",
    MuteState = "MuteRequestChanged",
    UserDisconnected = "UserDisconnected",
    GetProfileDetails = "GetProfileDetails",
    PeerConnectionServerCreated="PeerConnectionServerCreated",
    PeerConnectionServerFailed="PeerConnectionServerFailed",
    CallDroped="CallDroped",
    RtpCapabilitiesReceived="RtpCapabilitiesReceived",
    RtpCapabilitiesError="RtpCapabilitiesError"
}
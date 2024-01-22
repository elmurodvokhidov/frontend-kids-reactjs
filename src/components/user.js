function User({ user }) {
    return (
        <div className="user">
            <img src={user.rasmi} alt="" style={{ background: user.rang }} />
            <div className="box">
                <h1>{user.ismi}</h1>
                <h3>{user.kasbi}</h3>
                <p>{user.haqida}</p>
                <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                    <li><a href="">Telegram</a></li>
                    <li><a href="">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}

export default User
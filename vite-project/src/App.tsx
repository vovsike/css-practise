import './App.css'

function App() {

    return (
        <div className={"app"}>
            <nav className={"navbar"}>
                <span>Some text</span>
                <span>Some text</span>
                <span>Some text</span>
                <span>Some text</span>
            </nav>
            <div className="main">
                <form className={"container login-form"}>
                    <span className={"form-title"}>Please login</span>
                    <hr className={"hr"}/>
                    <div className={"form-control"}>
                        <label className={"form-label"}>
                            Username
                            <input size={35} className={"form-input"} type={"text"}/>
                        </label>
                    </div>
                    <div className={"form-control"}>
                        <label className={"form-label"}>
                            Password
                            <input size={35} className={"form-input"} type={"password"}/>
                            <a href={"https://google.com"} className={"forgot-password"}>Forgot password</a>
                        </label>
                    </div>
                    <div className={"flex-horizontal"}>
                        <button className={"button lgoin-button"} type="submit">Login</button>
                        <button className={"button signup-button"} type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default App

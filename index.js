


function launchingSoon(){
    return(
     <div className="container text-center">
            <img id="img" src="logo.svg"/>
            <p id="p1">We are launching <span id="p3">soon!</span></p>
            <p id="p2">Subscribe and get notified</p>
            <form>
                <div className="row">
                    <div className="col-8"> <div className="form-floating">
                    <input type="email" className="form-control rounded-5" id="Email" aria-describedby="email" placeholder="name@example.com"/>
                    <label className="lbl" for="Email">Your email adress...</label>
                    </div>
                </div>
                    <div className="col-4"><button className="btn rounded-5">Notify Me</button></div>
                </div>
        </form>
        <img src="illustration-dashboard.png" className="img"/>
        <p id="p4">&copy; Copyright Ping. All rights reserved.</p>
    </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(launchingSoon())
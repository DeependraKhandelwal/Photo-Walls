import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import axios from 'axios'
// import {loginAction} from '../../redux/reduxuser/UserActions'

function LoginAction(props) {


    function preback() {
        window.history.forward();
    }
    setTimeout(preback(), 0);

    window.onunlod = () => (null);

    const history = useHistory()

    const [msg, setMsg] = useState("")



    useEffect(() => {
        axios
            .get(`http://localhost:8082/login/${props.userName}/${props.password}`)
            .then((response) => {

                if (response.data.userRole === "admin") {
                    sessionStorage.setItem("password", response.data.password)
                    sessionStorage.setItem("name", response.data.userName)


                    history.push({
                        pathname: '/HomeProduct'
                    })

                    setTimeout(function () {
                        myFunction()
                    }, 1000)
                }
                else {
                    sessionStorage.setItem("name", response.data.userName)
                    sessionStorage.setItem("password", response.data.password)
                    history.push({
                        pathname: '/'
                    })

                    setTimeout(function () {
                        myFunction()
                    }, 1000)
                }

            })
        // .catch((error) => {
        // //   setMsg(error.response.data);

        // });

    }, [])


    function myFunction() {
        window.location.reload(false)
    }


    return (
        <>
            <div className="alert alert-success">{msg}</div>
        </>
    )
    //loginuser.loading?(
    //     <div className="text-warning">{loginuser.loading}</div>
    // ) : loginuser.error ?(
    //     <div className="alert alert-danger">{loginuser.error}</div>
    // ):
    // (
    //         <div className="alert alert-success">Welcome {loginuser.lUser.userName} </div>
    // )


}

// const mapStateToProps=(state,props)=>{
//     return{

//         prop:props,
//         loginuser:state.loginU
//     }
// }

// const mapDispatchToProps= (dispatch,props)=>{
//     return{
//         loginAction: ()=> dispatch(loginAction(props.userName,props.password))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(LoginAction)


export default LoginAction